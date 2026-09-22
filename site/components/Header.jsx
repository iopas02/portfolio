'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { gotoSection } from '../lib/deck';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Journey', href: '#journey' },
  { label: 'About', href: '#about' },
  { label: 'Now', href: '#now' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    gotoSection(href.slice(1));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-dark/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={(e) => go(e, '#home')}
          className="text-xl font-semibold tracking-tight text-white transition-colors hover:text-accent"
        >
          CA.
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => go(e, item.href)}
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/5 bg-dark px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => go(e, item.href)}
                className="text-base font-medium text-muted transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
