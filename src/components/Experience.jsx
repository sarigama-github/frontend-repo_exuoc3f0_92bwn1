import React from 'react';
import { Briefcase, Trophy } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-cyan-400" />
              <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">UI/UX Designer & Frontend Developer — Youth India Foundation</h3>
                  <p className="mt-1 text-sm text-slate-300">Helped design, refine, and ship website experiences with a focus on clarity and polish. Collaborated on UI/UX improvements and front-end implementation.</p>
                </div>
                <span className="shrink-0 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">May 2025 – July 2025</span>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <Trophy className="h-6 w-6 text-cyan-400" />
              <h2 className="text-3xl font-bold tracking-tight">Hackathon Experience</h2>
            </div>
            <ul className="space-y-4">
              {[
                'SIH 2025 – Cleared internal round; ranked Top 30 among 220 teams. Frontend Lead for a mental health counselling platform. Idea submitted to National Portal.',
                'Riidl Incuverse 2025 – Built a personal finance app that tracks savings and provides intelligent recommendations.',
                'Google Gen AI Hackathon – Enhanced the counselling platform with personalized AI-driven features.',
                'VW Mobilothon 5.0 – Real-time parking app that finds and books nearby spots. Team Lead. (Results awaited)',
                'Mumbai Hacks 2025 (Grand Finale upcoming) – Building an Agentic AI system to combat misinformation and promote credible news.',
              ].map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
