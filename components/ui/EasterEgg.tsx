'use client';
import { useEffect, useState } from 'react';

const SEQUENCE = 'KAFKAINIT';
const MESSAGES = [
  '> Initializing Kafka broker...',
  '> Topic: mission-control.events created',
  '> Producer connected [id: sharanya-gada-001]',
  '> Consumer group: portfolio-viewers joined',
  '> Offset committed: partition=0 offset=1337',
  '> Message delivered: {"type":"hire_me","confidence":0.99}',
  '> ✓ Pipeline healthy — 0 lag',
];

export default function EasterEgg() {
  const [buf, setBuf] = useState('');
  const [visible, setVisible] = useState(false);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setBuf((prev) => {
        const next = (prev + e.key.toUpperCase()).slice(-SEQUENCE.length);
        if (next === SEQUENCE) {
          setVisible(true);
          setLines([]);
          return '';
        }
        return next;
      });
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < MESSAGES.length) {
        setLines((prev) => [...prev, MESSAGES[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 w-96 panel-border rounded-lg p-4 font-mono text-xs"
      style={{ background: '#050a0e', borderColor: '#39ff14', boxShadow: '0 0 20px rgba(57,255,20,0.3)' }}
    >
      <div className="flex items-center justify-between mb-3">
        <span style={{ color: '#39ff14' }} className="font-bold tracking-wider">KAFKA CONSOLE — LIVE</span>
        <button
          onClick={() => setVisible(false)}
          className="text-gray-500 hover:text-white text-base leading-none"
        >
          ✕
        </button>
      </div>
      <div className="space-y-1">
        {lines.map((l, i) => (
          <div key={i} style={{ color: i === lines.length - 1 ? '#39ff14' : '#64748b' }}>
            {l}
          </div>
        ))}
        {lines.length < MESSAGES.length && (
          <span style={{ color: '#39ff14', animation: 'blink 0.8s step-end infinite' }}>█</span>
        )}
      </div>
    </div>
  );
}
