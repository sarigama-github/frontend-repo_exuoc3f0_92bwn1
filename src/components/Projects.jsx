import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'MindMate',
    desc: 'Mental health assistant and counselling platform with AI chatbot, resources and community groups.',
    link: 'https://hpsc.tiiny.site',
    stack: ['HTML', 'CSS', 'React', 'JavaScript'],
  },
  {
    title: 'AI Credit Score Manager',
    desc: 'AI-approved credit score from daily utility bill behavior with clean insights.',
    link: 'https://creditscore-main.onrender.com',
    stack: ['HTML', 'CSS', 'React', 'JavaScript'],
  },
  {
    title: 'Bus/Train Ticket Booking System',
    desc: 'Smart ticket and seat management with downloadable tickets and mock payments.',
    link: 'https://booksmmart.netlify.app',
    stack: ['HTML', 'CSS', 'React', 'JavaScript'],
  },
  {
    title: 'TruthLensAI',
    desc: 'Trustworthiness detection for news with credibility scores and verified sources.',
    link: 'https://truth-guard-ai-08a116dd.base44.app',
    stack: ['HTML', 'CSS', 'React', 'JavaScript'],
  },
  {
    title: 'Cricscard',
    desc: 'Live cricket and football scores with league tables and standings.',
    link: 'https://cricscard.netlify.app',
    stack: ['HTML', 'CSS', 'React', 'JavaScript'],
  },
  {
    title: 'Juswipe (Upcoming)',
    desc: 'Personalized news swiping app that learns from left/right swipes.',
    link: '#',
    stack: ['React Native', 'Flutter'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected Projects</h2>
            <p className="mt-2 text-slate-300">A few highlights of things I’ve built and shipped recently.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <ExternalLink className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </div>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200">{s}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
