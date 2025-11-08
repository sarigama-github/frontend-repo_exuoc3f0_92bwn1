import React from 'react';
import { Code, Figma, Github } from 'lucide-react';

const SkillBadge = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100">
    {Icon && <Icon className="h-4 w-4 text-cyan-300" />}
    <span>{label}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
        <p className="mt-2 max-w-3xl text-slate-300">A selection of technologies and tools I use to design and build delightful, high-quality interfaces across web and mobile.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold">Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge label="C" icon={Code} />
              <SkillBadge label="Python" icon={Code} />
              <SkillBadge label="Java" icon={Code} />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold">Web Development</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge label="HTML" icon={Code} />
              <SkillBadge label="CSS" icon={Code} />
              <SkillBadge label="JavaScript" icon={Code} />
              <SkillBadge label="React (Beginner)" icon={Code} />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold">Android App Development</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge label="React Native" icon={Code} />
              <SkillBadge label="Flutter" icon={Code} />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold">UI/UX Design Tools</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge label="Figma" icon={Figma} />
              <SkillBadge label="Canva" icon={Figma} />
              <SkillBadge label="Wix" icon={Figma} />
              <SkillBadge label="Visily" icon={Figma} />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge label="VS Code" icon={Github} />
              <SkillBadge label="Code::Blocks" icon={Github} />
              <SkillBadge label="Flutter (Tooling)" icon={Github} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
