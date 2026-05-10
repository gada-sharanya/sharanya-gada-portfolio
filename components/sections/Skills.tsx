'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

export default function Skills() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono tracking-widest" style={{ color: 'var(--cyan)' }}>05 / SKILLS</span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <h2 className="section-title">Systems Online</h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>
            Click any panel to expand — all systems operational
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.button
              key={s.panel}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              onClick={() => setActive(active === i ? null : i)}
              className="text-left rounded-xl p-5 transition-all duration-200 cursor-pointer"
              style={{
                border: `1px solid ${active === i ? 'rgba(0,212,255,0.5)' : 'var(--border)'}`,
                background: active === i ? 'rgba(0,212,255,0.06)' : 'var(--panel)',
                boxShadow: active === i ? '0 0 20px rgba(0,212,255,0.1)' : 'none',
              }}
            >
              {/* Panel header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-xs font-mono tracking-wider font-bold" style={{ color: active === i ? 'var(--cyan)' : 'var(--muted)' }}>
                    {s.panel.toUpperCase()}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="online-dot" style={{ animationDelay: `${i * 0.3}s` }} />
                  <span className="text-xs font-mono" style={{ color: '#39ff14' }}>{s.status}</span>
                </div>
              </div>

              {/* Items — always show first 3, expand on click */}
              <div className="space-y-1">
                {(active === i ? s.items : s.items.slice(0, 3)).map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <span style={{ color: 'var(--cyan)', fontSize: 8 }}>▸</span>
                    <span className="text-xs" style={{ color: '#94a3b8' }}>{item}</span>
                  </div>
                ))}
                {active !== i && s.items.length > 3 && (
                  <div className="text-xs" style={{ color: 'var(--border)' }}>
                    +{s.items.length - 3} more...
                  </div>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* All-systems status bar */}
        <motion.div
          className="mt-12 rounded-xl p-4 flex items-center justify-between flex-wrap gap-4"
          style={{ border: '1px solid var(--border)', background: 'var(--panel)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <span className="online-dot" />
            <span className="text-sm font-mono" style={{ color: '#39ff14' }}>ALL SYSTEMS NOMINAL</span>
          </div>
          <div className="flex gap-6 flex-wrap">
            {['Java', 'Spring Boot', 'Kafka', 'AWS', 'Kubernetes', 'React'].map((t) => (
              <span key={t} className="text-xs font-mono" style={{ color: 'var(--muted)' }}>
                ● {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
