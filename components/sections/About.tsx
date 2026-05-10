'use client';
import { motion } from 'framer-motion';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
} from 'recharts';
import { personal, radarData } from '@/data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 relative" style={{ background: 'var(--surface)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono tracking-widest" style={{ color: 'var(--cyan)' }}>02 / ABOUT</span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <h2 className="section-title">The Engineer</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Bio */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#cbd5e1' }}>
              I&apos;m a software engineer who builds systems that scale. My career spans aviation (Southwest Airlines, TCS), government (State of Missouri), and consulting (Deloitte) — giving me a rare perspective on high-stakes distributed systems across industries.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
              My current focus is at the intersection of AI and infrastructure — building RAG pipelines, LLM integrations, and intelligent automation on AWS Bedrock. When I&apos;m not shipping production code, I&apos;m studying DSA patterns and system design at FAANG-level depth.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Education', value: 'MS Computer Science — UMKC (GPA 3.9/4)' },
                { label: 'Current Role', value: 'Software Developer @ Southwest Airlines' },
                { label: 'Location', value: 'Dallas, TX' },
                { label: 'Focus Areas', value: 'Distributed Systems · AI/ML · Cloud' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-lg p-4"
                  style={{ border: '1px solid var(--border)', background: 'var(--panel)' }}
                >
                  <div className="text-xs font-mono mb-1" style={{ color: 'var(--cyan)' }}>{label}</div>
                  <div className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Radar chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="rounded-xl p-6"
              style={{ border: '1px solid var(--border)', background: 'var(--panel)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="online-dot" />
                <span className="text-xs font-mono tracking-wider" style={{ color: 'var(--cyan)' }}>
                  SKILL RADAR — ACTIVE
                </span>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(0,212,255,0.15)" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: '#64748b', fontSize: 12, fontFamily: 'monospace' }}
                  />
                  <Radar
                    dataKey="value"
                    stroke="#00d4ff"
                    fill="#00d4ff"
                    fillOpacity={0.15}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {radarData.map((d) => (
                  <div key={d.subject} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--cyan)', opacity: d.value / 100 }} />
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>
                      {d.subject} <span style={{ color: 'var(--cyan)' }}>{d.value}%</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
