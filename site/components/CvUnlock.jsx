'use client';

import { useEffect, useState } from 'react';
import { Lock, Download, Check } from 'lucide-react';
import { DECK_CHANGE } from '../lib/deck';

const CV_URL = '/files/abuzo-CV-2026.pdf';

export default function CvUnlock() {
  const [index, setIndex] = useState(0);
  const [total, setTotal] = useState(8);
  const [justUnlocked, setJustUnlocked] = useState(false);

  const progress = total > 1 ? index / (total - 1) : 0;
  const unlocked = index === total - 1;
  const percent = Math.min(100, Math.round(progress * 100));

  useEffect(() => {
    const onChange = (e) => {
      setIndex(e.detail.index);
      setTotal(e.detail.total);
    };
    window.addEventListener(DECK_CHANGE, onChange);
    return () => window.removeEventListener(DECK_CHANGE, onChange);
  }, []);

  useEffect(() => {
    if (unlocked && !justUnlocked) {
      setJustUnlocked(true);
      const t = setTimeout(() => setJustUnlocked(false), 3000);
      return () => clearTimeout(t);
    }
  }, [unlocked, justUnlocked]);

  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(progress, 1));

  const inner = (
    <>
      <span className="relative flex h-10 w-10 items-center justify-center">
        <svg className="absolute inset-0 h-10 w-10 -rotate-90" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r={radius}
            fill="none"
            strokeWidth="3"
            className="stroke-white/10"
          />
          <circle
            cx="20"
            cy="20"
            r={radius}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="stroke-accent transition-[stroke-dashoffset] duration-500"
          />
        </svg>
        {unlocked ? (
          justUnlocked ? <Check size={16} className="text-accent" /> : <Download size={16} className="text-accent" />
        ) : (
          <Lock size={16} className="text-muted" />
        )}
      </span>
      <span className="text-sm font-medium">
        {unlocked
          ? 'CV unlocked'
          : `Explore to unlock CV · ${index + 1}/${total}`}
      </span>
    </>
  );

  const baseClass =
    'fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border px-4 py-2 shadow-lg backdrop-blur-md transition-all duration-300';

  if (unlocked) {
    return (
      <a
        href={CV_URL}
        target="_blank"
        rel="noreferrer"
        className={`${baseClass} border-accent/60 bg-dark/90 text-accent hover:bg-accent hover:text-white ${
          justUnlocked ? 'shadow-[0_0_24px_rgba(255,0,119,0.5)]' : ''
        }`}
        aria-label="CV unlocked — download now"
      >
        {inner}
      </a>
    );
  }

  return (
    <div
      className={`${baseClass} cursor-not-allowed border-white/10 bg-dark/90 text-muted`}
      aria-live="polite"
      aria-label={`CV locked — section ${index + 1} of ${total}`}
    >
      {inner}
    </div>
  );
}
