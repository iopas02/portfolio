'use client';

import { useEffect, useRef } from 'react';
import { portfolioData } from '../lib/data';

// Eye placement tuned to profile-pic.jpg (all values are % of the image box).
const EYES = [
  { left: '41%', top: '46%', width: '10%', height: '11%' },
  { left: '61%', top: '46%', width: '10%', height: '11%' },
];

export default function HeroPortrait() {
  const wrapRef = useRef(null);
  const pupilRefs = useRef([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const wrap = wrapRef.current;
    if (!wrap) return;
    const eyes = wrap.querySelectorAll('[data-eye]');
    let raf = 0;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;

    const tick = () => {
      eyes.forEach((eye, i) => {
        const pupil = pupilRefs.current[i];
        if (!pupil) return;
        const r = eye.getBoundingClientRect();
        const dx = mx - (r.left + r.width / 2);
        const dy = my - (r.top + r.height / 2);
        const dist = Math.hypot(dx, dy) || 1;
        const max = r.width * 0.35;
        const ease = Math.min(dist / 80, 1);
        pupil.style.transform = `translate(calc(-50% + ${(dx / dist) * max * ease}px), calc(-50% + ${(dy / dist) * max * ease}px))`;
      });
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative mb-8 h-36 w-36 md:h-44 md:w-44">
      <img
        src="/images/profile-pic.jpg"
        alt={portfolioData.personal.fullName}
        className="h-full w-full rounded-full object-cover ring-4 ring-accent/30 shadow-[0_0_50px_rgba(255,0,119,0.25)]"
      />
      {EYES.map((pos, i) => (
        <span
          key={i}
          data-eye
          className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
          style={{
            left: pos.left,
            top: pos.top,
            width: pos.width,
            height: pos.height,
          }}
        >
          <span
            ref={(el) => {
              pupilRefs.current[i] = el;
            }}
            className="absolute left-1/2 top-1/2 h-[45%] w-[45%] rounded-full bg-zinc-900"
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        </span>
      ))}
    </div>
  );
}
