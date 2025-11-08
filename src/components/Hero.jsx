import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Pause, Play } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const RESUME_URL = 'https://drive.google.com/file/d/1WbnSUS8kpuVoXtuEG6fq1DKRsDhsuPsX/view?usp=sharing';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900 text-white">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <div>
            <p className="mb-3 text-sm uppercase tracking-widest text-cyan-300/90">UI/UX Designer • Frontend & Android Developer</p>
            <h1 className="font-geist text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Hi, I’m Naman Sinha
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Aspiring Frontend and Android developer crafting sleek, accessible interfaces and interactive apps. Always exploring fresh tools to turn ideas into polished, real‑world products.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-200">
              <a href="mailto:get2naman@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur hover:bg-white/10">
                <Mail size={16} /> get2naman@gmail.com
              </a>
              <a href="tel:+918925474810" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur hover:bg-white/10">
                <Phone size={16} /> +91 8925474810
              </a>
              <a href="https://github.com/get2naman-bit" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur hover:bg-white/10">
                <Github size={16} /> GitHub
              </a>
              <a href="https://linkedin.com/in/naman-sinha-986511248" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur hover:bg-white/10">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-gray-900 shadow-lg shadow-cyan-400/30 transition hover:bg-cyan-300"
              >
                <ExternalLink size={18} /> View Resume
              </a>
              <a href="#projects" className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 transition hover:bg-white/10">View Projects</a>
            </div>

            {/* Quick badges */}
            <div className="mt-8 flex flex-wrap gap-3 text-xs text-slate-200">
              {['Design Systems', 'Responsive UI', 'Accessibility', 'Performance', 'Prototyping'].map((b) => (
                <span key={b} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{b}</span>
              ))}
            </div>
          </div>

          {/* 3D Spline scene with play/pause control (no tilt) */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10 blur-2xl" />

            <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-white/10 bg-gray-900/60 shadow-xl md:h-[420px]">
              {/* Play/Pause button */}
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/40 px-3 py-1.5 text-sm text-white/90 backdrop-blur hover:bg-black/60"
                aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Play'}</span>
              </button>

              {isPlaying ? (
                <Spline
                  scene="https://prod.spline.design/fA4LwfT7IUUelEGO/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="text-center">
                    <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-cyan-400/20" />
                    <p className="text-sm text-white/70">Animation paused to save power</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
