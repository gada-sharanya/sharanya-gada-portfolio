'use client';
import { motion } from 'framer-motion';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono tracking-widest" style={{ color: 'var(--cyan)' }}>07 / CERTIFICATIONS</span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <h2 className="section-title">Clearances</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-xl p-6 card-hover overflow-hidden"
              style={{
                border: `1px solid ${cert.color}40`,
                background: `${cert.color}08`,
              }}
            >
              {/* Holographic shimmer overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `conic-gradient(from ${i * 120}deg at 50% 50%, ${cert.color}08, transparent 50%, ${cert.color}05, transparent)`,
                  borderRadius: 'inherit',
                }}
              />

              {/* Badge number */}
              <div
                className="absolute top-3 right-3 text-xs font-mono px-1.5 py-0.5 rounded"
                style={{ background: `${cert.color}20`, color: cert.color }}
              >
                #{String(i + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10">
                <div className="text-3xl mb-4">{cert.icon}</div>
                <div
                  className="text-xs font-mono tracking-widest mb-2"
                  style={{ color: cert.color }}
                >
                  {cert.abbr}
                </div>
                <h3 className="text-sm font-bold leading-tight mb-2" style={{ color: 'var(--foreground)' }}>
                  {cert.name}
                </h3>
                <div className="text-xs" style={{ color: 'var(--muted)' }}>{cert.issuer}</div>
                <div className="mt-4 pt-4" style={{ borderTop: `1px solid ${cert.color}20` }}>
                  <span className="text-xs font-mono" style={{ color: cert.color }}>
                    CLEARED {cert.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Next targets */}
        <motion.div
          className="mt-12 rounded-xl p-6"
          style={{ border: '1px solid var(--border)', background: 'var(--panel)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-xs font-mono mb-4" style={{ color: 'var(--cyan)' }}>
            ▸ NEXT IN QUEUE — 2026 ROADMAP
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'AWS Solutions Architect – Associate', color: '#f59e0b' },
              { label: 'AWS Solutions Architect – Professional', color: '#f59e0b' },
              { label: 'Certified Kubernetes Administrator', color: '#00d4ff' },
              { label: 'Oracle Java SE 17 Developer', color: '#8b5cf6' },
            ].map((c) => (
              <span
                key={c.label}
                className="text-xs font-mono px-3 py-1.5 rounded-full"
                style={{
                  border: `1px dashed ${c.color}50`,
                  color: `${c.color}80`,
                  background: `${c.color}08`,
                }}
              >
                ○ {c.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
