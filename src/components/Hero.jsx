import React, { useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Play, Pause } from 'lucide-react';

export default function Hero() {
  const splineRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="pt-10 sm:pt-16 lg:pt-20">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Building delightful web experiences
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Naman Sinha
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Front‑end developer crafting elegant interfaces with React, TypeScript, and thoughtful motion. I love turning complex ideas into simple, beautiful products.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://drive.google.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium shadow hover:brightness-110">
              View Resume
            </a>
            <button
              onClick={() => setIsPlaying((p) => !p)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 text-gray-200 hover:text-white hover:border-white/20 bg-white/5">
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              {isPlaying ? 'Pause' : 'Play'} Animation
            </button>
          </div>
        </div>

        <div className="relative h-[380px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-gray-900 to-gray-950">
          {/* Spline Canvas */}
          <div className={`absolute inset-0 ${!isPlaying ? 'pointer-events-none' : ''}`}>
            <Spline
              ref={splineRef}
              scene="https://prod.spline.design/placeholder/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Non-blocking gradient glows */}
          <div className="pointer-events-none absolute -inset-20 bg-gradient-to-tr from-cyan-500/20 via-transparent to-fuchsia-500/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
