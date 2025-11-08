import React from 'react';

const projects = [
  {
    title: 'Interactive Dashboard',
    desc: 'A performant, responsive admin dashboard with charts and real-time data.',
    tech: ['React', 'Vite', 'Tailwind'],
  },
  {
    title: '3D Product Showcase',
    desc: 'A Spline-powered landing page highlighting a new hardware product.',
    tech: ['React', 'Spline', 'Framer Motion'],
  },
  {
    title: 'Design System',
    desc: 'Reusable UI library and tokens applied across multiple apps.',
    tech: ['TypeScript', 'Storybook'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-14 sm:py-20">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Projects</h2>
        <p className="text-gray-400">Selected work that blends performance and design.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition">
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-gray-300 text-sm leading-relaxed">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 text-gray-200">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
