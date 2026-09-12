'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { DECK_CHANGE, DECK_GOTO } from '../lib/deck';

const VARIANTS = ['fade', 'rise', 'zoom', 'slide'];
const TRANSITION_MS = 700;

export default function Deck({ sections }) {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const lock = useRef(false);
  const panelRefs = useRef([]);
  const stageRef = useRef(null);
  const touchY = useRef(null);

  const goTo = useCallback(
    (index, dir = 1) => {
      const next = Math.min(sections.length - 1, Math.max(0, index));
      if (next === activeRef.current || lock.current) return;
      lock.current = true;
      setTimeout(() => {
        lock.current = false;
      }, TRANSITION_MS + 150);
      const panel = panelRefs.current[next];
      if (panel) {
        panel.scrollTop = dir < 0 ? panel.scrollHeight : 0;
      }
      setActive(next);
    },
    [sections],
  );

  useEffect(() => {
    activeRef.current = active;
    window.dispatchEvent(
      new CustomEvent(DECK_CHANGE, {
        detail: {
          index: active,
          total: sections.length,
          id: sections[active].id,
        },
      }),
    );
  }, [active, sections]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const panelState = () => {
      const panel = panelRefs.current[activeRef.current];
      if (!panel) return { canDown: false, canUp: false };
      return {
        canDown: panel.scrollTop + panel.clientHeight < panel.scrollHeight - 2,
        canUp: panel.scrollTop > 2,
      };
    };

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) < 4) return;
      const dir = e.deltaY > 0 ? 1 : -1;
      const { canDown, canUp } = panelState();
      if (dir > 0 && canDown) return;
      if (dir < 0 && canUp) return;
      if (lock.current) return;
      e.preventDefault();
      goTo(activeRef.current + dir, dir);
    };

    const onTouchStart = (e) => {
      touchY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (touchY.current === null) return;
      const y = e.touches[0].clientY;
      const dy = touchY.current - y;
      touchY.current = y;
      if (Math.abs(dy) < 6) return;
      const dir = dy > 0 ? 1 : -1;
      const { canDown, canUp } = panelState();
      if (dir > 0 && canDown) return;
      if (dir < 0 && canUp) return;
      if (lock.current) return;
      e.preventDefault();
      goTo(activeRef.current + dir, dir);
    };

    const onKeyDown = (e) => {
      const forward = ['ArrowDown', 'PageDown', ' '];
      const back = ['ArrowUp', 'PageUp'];
      if (![...forward, ...back].includes(e.key)) return;
      const dir = forward.includes(e.key) ? 1 : -1;
      const { canDown, canUp } = panelState();
      if (dir > 0 && canDown) return;
      if (dir < 0 && canUp) return;
      e.preventDefault();
      goTo(activeRef.current + dir, dir);
    };

    const onGoto = (e) => {
      const idx = sections.findIndex((s) => s.id === e.detail);
      if (idx >= 0) goTo(idx);
    };

    const onHashChange = () => {
      const idx = sections.findIndex(
        (s) => s.id === window.location.hash.slice(1),
      );
      if (idx >= 0) goTo(idx);
    };

    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href').slice(1);
      const idx = sections.findIndex((s) => s.id === id);
      if (idx >= 0) {
        e.preventDefault();
        goTo(idx);
      }
    };

    const initial = sections.findIndex(
      (s) => s.id === window.location.hash.slice(1),
    );
    if (initial > 0) setActive(initial);

    stage.addEventListener('wheel', onWheel, { passive: false });
    stage.addEventListener('touchstart', onTouchStart, { passive: true });
    stage.addEventListener('touchmove', onTouchMove, { passive: false });
    stage.addEventListener('click', onClick);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener(DECK_GOTO, onGoto);
    window.addEventListener('hashchange', onHashChange);
    return () => {
      stage.removeEventListener('wheel', onWheel);
      stage.removeEventListener('touchstart', onTouchStart);
      stage.removeEventListener('touchmove', onTouchMove);
      stage.removeEventListener('click', onClick);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener(DECK_GOTO, onGoto);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [goTo, sections]);

  return (
    <div ref={stageRef} className="relative h-screen w-full overflow-hidden">
      {sections.map((section, i) => (
        <div
          key={section.id}
          id={section.id}
          ref={(el) => (panelRefs.current[i] = el)}
          data-variant={VARIANTS[i % VARIANTS.length]}
          className={`deck-panel ${i === active ? 'active' : ''}`}
          style={{ zIndex: i === active ? 20 : 10 }}
          aria-hidden={i !== active}
        >
          {section.children}
        </div>
      ))}

      <nav
        aria-label="Section navigation"
        className="absolute right-4 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-3 md:right-6"
      >
        {sections.map((section, i) => (
          <button
            key={section.id}
            onClick={() => goTo(i)}
            aria-label={section.id}
            aria-current={i === active ? 'true' : undefined}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === active
                ? 'scale-150 bg-accent'
                : 'bg-white/25 hover:bg-white/50'
            }`}
          />
        ))}
      </nav>
    </div>
  );
}
