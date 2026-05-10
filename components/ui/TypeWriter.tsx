'use client';
import { useEffect, useState } from 'react';

interface Props {
  texts: string[];
  speed?: number;
  pause?: number;
}

export default function TypeWriter({ texts, speed = 60, pause = 2000 }: Props) {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % texts.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts, speed, pause]);

  return (
    <span className="text-[var(--cyan)]">
      {displayed}
      <span
        className="ml-0.5 inline-block w-0.5 h-6 bg-[var(--cyan)] align-middle"
        style={{ animation: 'blink 1s step-end infinite' }}
      />
    </span>
  );
}
