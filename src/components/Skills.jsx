import React from 'react';

const skills = {
  "Programming Languages": [
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  ],
  "Web Development": [
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  ],
  "Android & Mobile": [
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  ],
  "Design Tools": [
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
    { name: 'Wix', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wix/wix-original.svg' },
    { name: 'Visily', logo: 'https://img.icons8.com/?size=48&id=RYq0yXxZ3P2O&format=png' },
  ],
  "Tools & Platforms": [
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Code::Blocks', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  ],
};

const LogoBadge = ({ src, alt, label }) => (
  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
    <img src={src} alt={alt} className="h-6 w-6 object-contain" loading="lazy" />
    <span className="text-sm text-slate-100">{label}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          A selection of technologies and tools I use to design and build sleek, interactive products across web and mobile.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-semibold">{group}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <LogoBadge key={item.name} src={item.logo} alt={item.name} label={item.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
