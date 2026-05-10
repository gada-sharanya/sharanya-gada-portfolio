'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '@/data/portfolio';

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono tracking-widest" style={{ color: 'var(--cyan)' }}>03 / EXPERIENCE</span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <h2 className="section-title">Flight Log</h2>
          <p className="mt-2 text-sm font-mono" style={{ color: 'var(--muted)' }}>
            6 years · 4 companies · 3 countries of impact
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, var(--cyan), transparent)' }}
          />

          <div className="space-y-6">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Timeline dot (desktop) */}
                <div
                  className="absolute left-4 w-4 h-4 rounded-full border-2 hidden md:block mt-5"
                  style={{
                    borderColor: job.color,
                    background: open === i ? job.color : 'var(--background)',
                    boxShadow: open === i ? `0 0 10px ${job.color}` : 'none',
                    zIndex: 2,
                  }}
                />

                <div className="md:ml-16">
                  {/* Header card (always visible) */}
                  <button
                    className="w-full text-left rounded-xl p-5 transition-all duration-200 card-hover"
                    style={{
                      border: `1px solid ${open === i ? job.color + '60' : 'var(--border)'}`,
                      background: open === i ? `${job.color}08` : 'var(--panel)',
                    }}
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <h3 className="text-lg font-bold" style={{ color: 'var(--foreground)' }}>
                            {job.company}
                          </h3>
                          <span
                            className="text-xs font-mono px-2 py-0.5 rounded-full"
                            style={{
                              background: job.status === 'ACTIVE' ? 'rgba(57,255,20,0.15)' : 'rgba(100,116,139,0.2)',
                              color: job.status === 'ACTIVE' ? '#39ff14' : 'var(--muted)',
                              border: `1px solid ${job.status === 'ACTIVE' ? '#39ff1440' : 'transparent'}`,
                            }}
                          >
                            {job.status === 'ACTIVE' && <span className="mr-1">●</span>}{job.status}
                          </span>
                        </div>
                        <div className="text-sm font-medium" style={{ color: job.color }}>{job.role}</div>
                        <div className="flex gap-4 mt-1">
                          <span className="text-xs" style={{ color: 'var(--muted)' }}>{job.location}</span>
                          <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>{job.period}</span>
                        </div>
                      </div>
                      <div
                        className="text-xl transition-transform duration-200"
                        style={{
                          color: 'var(--muted)',
                          transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      >
                        ↓
                      </div>
                    </div>
                  </button>

                  {/* Expandable detail */}
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="mt-1 rounded-xl p-6"
                          style={{ border: `1px solid ${job.color}30`, borderTop: 'none', background: `${job.color}05` }}
                        >
                          <ul className="space-y-2 mb-5">
                            {job.highlights.map((h, hi) => (
                              <li key={hi} className="flex items-start gap-2 text-sm" style={{ color: '#cbd5e1' }}>
                                <span style={{ color: job.color, marginTop: 2, flexShrink: 0 }}>▸</span>
                                {h}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {job.tech.map((t) => (
                              <span
                                key={t}
                                className="text-xs font-mono px-2 py-1 rounded"
                                style={{ background: 'var(--panel)', border: '1px solid var(--border)', color: 'var(--muted)' }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
