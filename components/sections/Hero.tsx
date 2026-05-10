'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { personal } from '@/data/portfolio';
import TypeWriter from '@/components/ui/TypeWriter';
import StarField from '@/components/ui/StarField';

const GlobeCanvas = dynamic(() => import('@/components/ui/GlobeCanvas'), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      style={{ background: 'var(--background)' }}
    >
      <StarField />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 70% 50%, rgba(0,212,255,0.06) 0%, transparent 70%)',
          zIndex: 1,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Text */}
          <motion.div
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full"
              style={{ border: '1px solid rgba(0,212,255,0.3)', background: 'rgba(0,212,255,0.07)' }}>
              <span className="online-dot" />
              <span className="text-xs font-mono tracking-widest" style={{ color: 'var(--cyan)' }}>
                SOFTWARE DEVELOPMENT ENGINEER · DALLAS TX
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-none">
              <span style={{ color: 'var(--foreground)' }}>Sharanya</span>
              <br />
              <span className="glow-cyan" style={{ color: 'var(--cyan)' }}>Gada</span>
            </h1>

            <div className="text-xl sm:text-2xl font-mono mb-6 h-8">
              <TypeWriter texts={personal.taglines} speed={55} pause={2200} />
            </div>

            <p className="text-base leading-relaxed mb-10 max-w-xl" style={{ color: 'var(--muted)' }}>
              {personal.bio}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mb-10">
              {personal.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-black glow-cyan" style={{ color: 'var(--cyan)' }}>
                    {s.value}
                  </div>
                  <div className="text-xs mt-0.5 leading-tight" style={{ color: 'var(--muted)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="px-6 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200"
                style={{
                  background: 'var(--cyan)',
                  color: '#000',
                  boxShadow: '0 0 20px rgba(0,212,255,0.4)',
                }}
              >
                View Systems →
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 hover:border-[var(--cyan)]"
                style={{
                  border: '1px solid var(--border)',
                  color: 'var(--foreground)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                File a Flight Plan
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200"
                style={{
                  border: '1px solid var(--border)',
                  color: 'var(--muted)',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>

          {/* Right: Globe */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative">
              {/* Glow ring behind globe */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
                  transform: 'scale(1.1)',
                }}
              />
              <GlobeCanvas />
              {/* Flight path label */}
              <div className="absolute -bottom-6 left-0 right-0 text-center">
                <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>
                  Hyderabad → Kansas City → Dallas
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>SCROLL</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, var(--cyan), transparent)' }} />
      </motion.div>
    </section>
  );
}
