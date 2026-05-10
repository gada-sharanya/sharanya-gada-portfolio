'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personal, pinnedRepos } from '@/data/portfolio';

const LANG_COLORS: Record<string, string> = {
  Java: '#b07219',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  AWS: '#f59e0b',
  Kotlin: '#A97BFF',
  Shell: '#89e051',
};

const KAFKA_EVENTS = [
  'commit pushed → tests triggered → pipeline running',
  'PR merged → deployment queued → smoke tests passing',
  'release tagged → docker build → kubernetes rollout',
  'hotfix committed → fast-track CI → 98% coverage',
  'feature branch → code review → approved → merged',
];

export default function GitHubSection() {
  const [eventIdx, setEventIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setEventIdx((i) => (i + 1) % KAFKA_EVENTS.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="github" className="py-24" style={{ background: 'var(--surface)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono tracking-widest" style={{ color: 'var(--cyan)' }}>06 / GITHUB</span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <h2 className="section-title">Live Signal</h2>
        </motion.div>

        {/* Pipeline ticker */}
        <motion.div
          className="mb-10 rounded-xl p-4 overflow-hidden"
          style={{ border: '1px solid rgba(57,255,20,0.3)', background: 'rgba(57,255,20,0.04)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="online-dot" />
              <span className="text-xs font-mono" style={{ color: '#39ff14' }}>PIPELINE</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <motion.p
                key={eventIdx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-mono whitespace-nowrap"
                style={{ color: '#94a3b8' }}
              >
                {`> ${KAFKA_EVENTS[eventIdx]}`}
              </motion.p>
            </div>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono flex-shrink-0"
              style={{ color: 'var(--cyan)' }}
            >
              github.com/gada-sharanya ↗
            </a>
          </div>
        </motion.div>

        {/* Curated pinned repo cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pinnedRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="block rounded-xl p-5 card-hover"
              style={{ border: '1px solid var(--border)', background: 'var(--panel)' }}
            >
              {/* Repo name + external link icon */}
              <div className="flex items-start justify-between mb-2">
                <div className="text-sm font-mono font-bold truncate flex-1 mr-2" style={{ color: 'var(--cyan)' }}>
                  {repo.name}
                </div>
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" style={{ color: 'var(--muted)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>

              {/* Tagline — amber, punchy */}
              <p className="text-xs font-semibold italic mb-3 leading-snug" style={{ color: '#f59e0b' }}>
                {repo.tagline}
              </p>

              {/* Divider */}
              <div className="mb-3" style={{ height: '1px', background: 'var(--border)' }} />

              {/* Technical description — slate */}
              <p className="text-xs leading-relaxed mb-4" style={{ color: '#94a3b8' }}>
                {repo.description}
              </p>

              {/* Footer: language + stars + forks */}
              <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--muted)' }}>
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: LANG_COLORS[repo.language] || '#64748b' }}
                  />
                  <span>{repo.language}</span>
                </div>
                <div>⭐ {repo.stars}</div>
                <div>⑂ {repo.forks}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg text-sm font-mono transition-all duration-200"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--cyan)',
              background: 'rgba(0,212,255,0.05)',
            }}
          >
            View all repositories on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
