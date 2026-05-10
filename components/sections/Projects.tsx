'use client';
import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: 'var(--surface)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono tracking-widest" style={{ color: 'var(--cyan)' }}>04 / PROJECTS</span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <h2 className="section-title">Active Flights</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-xl overflow-hidden card-hover"
              style={{ border: '1px solid var(--border)', background: 'var(--panel)' }}
            >
              {/* Flight card header */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ borderBottom: `1px solid var(--border)`, background: `${p.color}10` }}
              >
                <div className="font-mono text-xs tracking-widest" style={{ color: p.color }}>
                  ✈ FLIGHT-{String(i + 1).padStart(3, '0')}
                </div>
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded-full"
                  style={{
                    background: p.status === 'LIVE' ? 'rgba(57,255,20,0.15)' : 'rgba(0,212,255,0.1)',
                    color: p.status === 'LIVE' ? '#39ff14' : 'var(--cyan)',
                    border: `1px solid ${p.status === 'LIVE' ? '#39ff1430' : 'rgba(0,212,255,0.3)'}`,
                  }}
                >
                  ● {p.status}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>{p.title}</h3>

                {/* Flight manifest */}
                <div className="space-y-3 mb-5">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg p-3" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)' }}>
                      <div className="text-xs font-mono mb-1" style={{ color: 'var(--muted)' }}>ORIGIN (Problem)</div>
                      <div className="text-xs" style={{ color: '#cbd5e1' }}>{p.origin}</div>
                    </div>
                    <div className="rounded-lg p-3" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)' }}>
                      <div className="text-xs font-mono mb-1" style={{ color: 'var(--muted)' }}>DESTINATION (Solution)</div>
                      <div className="text-xs" style={{ color: '#cbd5e1' }}>{p.destination}</div>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{p.description}</p>
                </div>

                {/* Tech payload */}
                <div className="mb-5">
                  <div className="text-xs font-mono mb-2" style={{ color: 'var(--muted)' }}>PAYLOAD (Tech Stack)</div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2 py-0.5 rounded"
                        style={{
                          background: `${p.color}12`,
                          border: `1px solid ${p.color}30`,
                          color: p.color,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>{p.date}</span>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono px-3 py-1.5 rounded transition-all duration-200"
                    style={{
                      border: `1px solid ${p.color}40`,
                      color: p.color,
                    }}
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
