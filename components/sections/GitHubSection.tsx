'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personal } from '@/data/portfolio';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
}

const LANG_COLORS: Record<string, string> = {
  Java: '#b07219',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
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
  const [repos, setRepos] = useState<Repo[]>([]);
  const [eventIdx, setEventIdx] = useState(0);
  const username = 'gada-sharanya';

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data.slice(0, 6));
      })
      .catch(() => {});
  }, []);

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

        {/* Event stream ticker */}
        <motion.div
          className="mb-10 rounded-xl p-4 overflow-hidden relative"
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
              github.com/{username} ↗
            </a>
          </div>
        </motion.div>

        {/* Repo cards */}
        {repos.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="block rounded-xl p-5 card-hover"
                style={{ border: '1px solid var(--border)', background: 'var(--panel)' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-sm font-mono font-bold truncate flex-1 mr-2" style={{ color: 'var(--cyan)' }}>
                    {repo.name}
                  </div>
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" style={{ color: 'var(--muted)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
                <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: 'var(--muted)' }}>
                  {repo.description || 'No description provided.'}
                </p>
                <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--muted)' }}>
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: LANG_COLORS[repo.language] || '#64748b' }}
                      />
                      {repo.language}
                    </div>
                  )}
                  <div className="flex items-center gap-1">⭐ {repo.stargazers_count}</div>
                  <div className="flex items-center gap-1">⑂ {repo.forks_count}</div>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="rounded-xl p-5 animate-pulse"
                style={{ border: '1px solid var(--border)', background: 'var(--panel)', height: 140 }}
              />
            ))}
          </div>
        )}

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
