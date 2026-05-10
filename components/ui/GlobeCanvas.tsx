'use client';
import { useEffect, useRef } from 'react';

const DOTS = 600;
const ARCS = [
  { from: [17.4, 78.5], to: [39.1, -94.6] },   // Hyderabad → Kansas City
  { from: [39.1, -94.6], to: [32.8, -96.8] },   // Kansas City → Dallas
  { from: [17.4, 78.5], to: [32.8, -96.8] },    // Hyderabad → Dallas
];

function latLngToXYZ(lat: number, lng: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return {
    x: -r * Math.sin(phi) * Math.cos(theta),
    y: r * Math.cos(phi),
    z: r * Math.sin(phi) * Math.sin(theta),
  };
}

function project(x: number, y: number, z: number, rot: number, cx: number, cy: number, r: number) {
  const cosR = Math.cos(rot);
  const sinR = Math.sin(rot);
  const rx = x * cosR - z * sinR;
  const rz = x * sinR + z * cosR;
  const scale = (r * 2.2) / (r * 2.2 + rz);
  return { px: cx + rx * scale, py: cy - y * scale, vis: rz > -r * 0.6 };
}

export default function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const r = Math.min(W, H) * 0.35;

    const dots: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < DOTS; i++) {
      const phi = Math.acos(1 - 2 * (i / DOTS));
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      dots.push({
        x: Math.sin(phi) * Math.cos(theta) * r,
        y: Math.cos(phi) * r,
        z: Math.sin(phi) * Math.sin(theta) * r,
      });
    }

    const arcPoints = ARCS.map(({ from, to }) => {
      const f = latLngToXYZ(from[0], from[1], r);
      const t = latLngToXYZ(to[0], to[1], r);
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const a = i / 40;
        const mx = f.x * (1 - a) + t.x * a;
        const my = f.y * (1 - a) + t.y * a;
        const mz = f.z * (1 - a) + t.z * a;
        const len = Math.sqrt(mx * mx + my * my + mz * mz);
        const elev = r * 1.18;
        pts.push({ x: (mx / len) * elev, y: (my / len) * elev, z: (mz / len) * elev });
      }
      return pts;
    });

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      rotRef.current += 0.003;
      const rot = rotRef.current;

      // Globe dots
      dots.forEach((d) => {
        const { px, py, vis } = project(d.x, d.y, d.z, rot, cx, cy, r);
        if (!vis) return;
        ctx.beginPath();
        ctx.arc(px, py, 1.1, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, 0.35)';
        ctx.fill();
      });

      // Flight arcs
      arcPoints.forEach((pts, ai) => {
        const colors = ['rgba(0,212,255,0.9)', 'rgba(245,158,11,0.9)', 'rgba(139,92,246,0.8)'];
        ctx.beginPath();
        let started = false;
        pts.forEach((p) => {
          const { px, py, vis } = project(p.x, p.y, p.z, rot, cx, cy, r);
          if (!vis) { started = false; return; }
          if (!started) { ctx.moveTo(px, py); started = true; }
          else ctx.lineTo(px, py);
        });
        ctx.strokeStyle = colors[ai];
        ctx.lineWidth = 1.5;
        ctx.shadowColor = colors[ai];
        ctx.shadowBlur = 6;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // City dots
      const cities = [
        { lat: 17.4, lng: 78.5, label: 'Hyderabad' },
        { lat: 39.1, lng: -94.6, label: 'Kansas City' },
        { lat: 32.8, lng: -96.8, label: 'Dallas ★' },
      ];
      cities.forEach(({ lat, lng, label }) => {
        const p = latLngToXYZ(lat, lng, r);
        const { px, py, vis } = project(p.x, p.y, p.z, rot, cx, cy, r);
        if (!vis) return;
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#f59e0b';
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.font = '10px monospace';
        ctx.fillStyle = '#f59e0b';
        ctx.fillText(label, px + 7, py + 4);
      });

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={420}
      height={420}
      className="opacity-90"
    />
  );
}
