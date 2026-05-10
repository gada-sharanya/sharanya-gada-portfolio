'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(30,58,95,0.6)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div
            className="w-7 h-7 rounded flex items-center justify-center text-xs font-black"
            style={{ background: 'var(--cyan)', color: '#000' }}
          >
            SG
          </div>
          <span className="hidden sm:block font-mono text-sm tracking-wider" style={{ color: 'var(--foreground)' }}>
            sharanya<span style={{ color: 'var(--cyan)' }}>.gada</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-mono transition-colors duration-200 hover:text-[var(--cyan)]"
              style={{ color: 'var(--muted)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/gsharanya/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block px-4 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all duration-200"
            style={{
              border: '1px solid rgba(0,212,255,0.4)',
              color: 'var(--cyan)',
              background: 'rgba(0,212,255,0.06)',
            }}
          >
            Open to Work
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-5 h-px transition-all duration-200" style={{ background: menuOpen ? 'var(--cyan)' : 'var(--muted)', transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none' }} />
            <span className="w-5 h-px transition-all duration-200" style={{ background: menuOpen ? 'transparent' : 'var(--muted)' }} />
            <span className="w-5 h-px transition-all duration-200" style={{ background: menuOpen ? 'var(--cyan)' : 'var(--muted)', transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(10,10,15,0.98)', borderBottom: '1px solid var(--border)' }}
          >
            <div className="px-6 py-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-mono"
                  style={{ color: 'var(--muted)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
