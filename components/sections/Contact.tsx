'use client';
import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { personal } from '@/data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const subject = `Flight Plan from ${form.name}${form.company ? ` · ${form.company}` : ''}`;
    const body = `Name: ${form.name}\nCompany / Role: ${form.company}\n\n${form.message}`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('sent');
  };

  return (
    <section id="contact" className="py-24" style={{ background: 'var(--surface)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono tracking-widest" style={{ color: 'var(--cyan)' }}>08 / CONTACT</span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <h2 className="section-title">File a Flight Plan</h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>
            Ready to collaborate? Send a transmission and I&apos;ll respond within 24h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {status === 'sent' ? (
              <div
                className="rounded-xl p-8 text-center"
                style={{ border: '1px solid rgba(57,255,20,0.4)', background: 'rgba(57,255,20,0.06)' }}
              >
                <div className="text-4xl mb-4">✓</div>
                <div className="text-lg font-bold mb-2" style={{ color: '#39ff14' }}>Flight Plan Filed!</div>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Message received. I&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name', label: 'CALLSIGN (Your Name)', placeholder: 'John Doe', type: 'text' },
                  { id: 'company', label: 'ORIGIN (Company / Role)', placeholder: 'Google · Senior Recruiter', type: 'text' },
                ].map(({ id, label, placeholder, type }) => (
                  <div key={id}>
                    <label className="block text-xs font-mono mb-2" style={{ color: 'var(--cyan)' }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      required
                      value={form[id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{
                        background: 'var(--panel)',
                        border: '1px solid var(--border)',
                        color: 'var(--foreground)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(0,212,255,0.6)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-mono mb-2" style={{ color: 'var(--cyan)' }}>
                    FLIGHT DETAILS (Message)
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the opportunity, project, or what you're building..."
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      background: 'var(--panel)',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(0,212,255,0.6)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 disabled:opacity-60"
                  style={{
                    background: 'var(--cyan)',
                    color: '#000',
                    boxShadow: '0 0 20px rgba(0,212,255,0.3)',
                  }}
                >
                  {status === 'sending' ? 'Transmitting...' : 'Transmit Message →'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Direct links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { label: 'EMAIL', value: personal.email, href: `mailto:${personal.email}`, icon: '✉' },
              { label: 'LINKEDIN', value: 'linkedin.com/in/gsharanya', href: personal.linkedin, icon: '🔗' },
              { label: 'GITHUB', value: 'github.com/gada-sharanya', href: personal.github, icon: '⚙' },
              { label: 'LOCATION', value: 'Dallas, TX · Open to Remote', href: null, icon: '📍' },
            ].map((link) => (
              <div
                key={link.label}
                className="rounded-xl p-5"
                style={{ border: '1px solid var(--border)', background: 'var(--panel)' }}
              >
                <div className="text-xs font-mono mb-1" style={{ color: 'var(--muted)' }}>{link.label}</div>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-[var(--cyan)]"
                    style={{ color: 'var(--foreground)' }}
                  >
                    <span>{link.icon}</span>
                    {link.value}
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--foreground)' }}>
                    <span>{link.icon}</span>
                    {link.value}
                  </div>
                )}
              </div>
            ))}

            {/* Easter egg hint */}
            <div
              className="rounded-xl p-4"
              style={{ border: '1px dashed rgba(0,212,255,0.2)', background: 'rgba(0,212,255,0.03)' }}
            >
              <p className="text-xs font-mono" style={{ color: 'var(--muted)' }}>
                💡 Pro tip: type <span style={{ color: 'var(--cyan)' }}>KAFKAINIT</span> anywhere on this site...
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 text-center" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="text-xs font-mono" style={{ color: 'var(--muted)' }}>
          Built with Next.js · Tailwind · Framer Motion · Three.js · Deployed on Vercel
        </p>
        <p className="text-xs mt-1" style={{ color: 'var(--border)' }}>
          © 2026 Sharanya Gada · All systems nominal
        </p>
      </div>
    </section>
  );
}
