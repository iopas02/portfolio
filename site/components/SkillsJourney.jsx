'use client';

import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../lib/data';

const SKILLS = portfolioData.skills;
const START_YEAR = 2014;
const END_YEAR = 2026;

const CX = 50;
const CY = 55;

const SKILL_INFO = {
  HTML5: 'Semantic markup and accessible page structure',
  CSS3: 'Responsive layouts, animations, and modern styling',
  JavaScript: 'Core language powering interactive interfaces',
  TypeScript: 'Typed JavaScript for safer, scalable codebases',
  PHP: 'Server-side scripting for dynamic web apps',
  MySQL: 'Relational database design and query tuning',
  Laravel: 'PHP framework for robust backends and APIs',
  React: 'Component-driven UIs with a rich ecosystem',
  'Next.js': 'React framework for SSR, routing, and fast sites',
  'Vue.js': 'Progressive framework for reactive interfaces',
  Python: 'Scripting, automation, and backend utilities',
  n8n: 'No-code workflow automation between apps and services',
  'RESTful APIs': 'Designing and integrating HTTP services',
  'SaaS Development': 'Multi-tenant platforms and subscription products',
  'Server Deployment': 'Shipping and managing live production apps',
};

const nodes = SKILLS.map((name, i) => {
  const angle = -Math.PI / 2 + (i / SKILLS.length) * Math.PI * 2;
  const outer = i % 2 === 0;
  return {
    name,
    x: +(CX + (outer ? 38 : 30) * Math.cos(angle)).toFixed(4),
    y: +(CY + (outer ? 26 : 19) * Math.sin(angle) + (i === 0 ? 6 : 0)).toFixed(4),
  };
});

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export default function SkillsJourney() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const scroller = el.closest('.deck-panel') || window;
    const update = () => {
      const vh = scroller === window ? window.innerHeight : scroller.clientHeight;
      const total = el.offsetHeight - vh;
      const next =
        total > 0 ? clamp(-el.getBoundingClientRect().top / total, 0, 1) : 1;
      setProgress(next);
    };
    update();
    scroller.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      scroller.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const reveal = progress * SKILLS.length;
  const nodeT = (i) => clamp(reveal - i, 0, 1);
  const year =
    progress >= 0.99
      ? 'Now'
      : Math.round(START_YEAR + progress * (END_YEAR - START_YEAR));

  const stage =
    progress < 0.33
      ? 'Foundations'
      : progress < 0.66
        ? 'Frameworks & APIs'
        : 'Full-stack & DevOps';

  return (
    <div ref={ref} className="h-[320vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute top-20 left-1/2 z-20 w-full max-w-2xl -translate-x-1/2 rounded-2xl bg-surface/80 px-6 py-4 text-center backdrop-blur-md">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            The Journey
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            One skill at a time.
          </h2>
        </div>

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {nodes.map((node, i) => {
            if (i === 0) return null;
            const prev = nodes[i - 1];
            const t = nodeT(i - 1);
            if (t <= 0) return null;
            const len = Math.hypot(node.x - prev.x, node.y - prev.y);
            return (
              <line
                key={`chain-${node.name}`}
                x1={prev.x}
                y1={prev.y}
                x2={node.x}
                y2={node.y}
                strokeWidth="0.35"
                className="stroke-accent/70"
                strokeDasharray={len}
                strokeDashoffset={len * (1 - t)}
                vectorEffect="non-scaling-stroke"
              />
            );
          })}

          {nodes.map((node, i) => {
            const t = nodeT(i);
            if (t <= 0) return null;
            return (
              <line
                key={`spoke-${node.name}`}
                x1={CX}
                y1={CY}
                x2={node.x}
                y2={node.y}
                strokeWidth="0.2"
                className="stroke-white/10"
                vectorEffect="non-scaling-stroke"
                style={{ opacity: t }}
              />
            );
          })}
        </svg>

        {nodes.map((node, i) => {
          const t = nodeT(i);
          return (
            <div
              key={node.name}
              className="group absolute cursor-default rounded-full border border-white/10 bg-dark px-4 py-2 text-xs font-semibold text-zinc-200 shadow-lg hover:z-30 hover:border-accent md:text-sm"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                opacity: t,
                transform: `translate(-50%, -50%) scale(${(0.5 + 0.5 * t).toFixed(4)})`,
                ...(t >= 1 ? { borderColor: 'rgba(255,0,119,0.5)' } : {}),
              }}
            >
              {node.name}
              <span
                className={`pointer-events-none absolute left-1/2 w-44 -translate-x-1/2 rounded-lg border border-white/10 bg-dark/95 px-3 py-2 text-left text-[11px] font-normal leading-snug text-muted opacity-0 shadow-xl transition-all duration-200 group-hover:opacity-100 ${
                  node.y < CY ? 'top-full mt-2' : 'bottom-full mb-2'
                }`}
              >
                {SKILL_INFO[node.name] || node.name}
              </span>
            </div>
          );
        })}

        <div className="relative z-10 flex translate-y-[5vh] flex-col items-center">
          <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border border-accent/40 bg-dark shadow-[0_0_40px_rgba(255,0,119,0.15)] md:h-44 md:w-44">
            <span className="text-3xl font-bold text-white md:text-4xl">
              {year}
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-widest text-muted md:text-xs">
              {stage}
            </span>
          </div>
          <p className="mt-4 text-xs uppercase tracking-widest text-muted">
            {START_YEAR} — Present · Upskilling
          </p>
        </div>
      </div>
    </div>
  );
}
