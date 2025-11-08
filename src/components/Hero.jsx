import React from 'react';
import Spline from '@splinetool/react-spline';
import { Download, Mail, Phone, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const handleDownload = () => {
    const content = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Naman Sinha - Resume</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body{font-family: Inter, Arial, sans-serif; padding: 32px; color: #0f172a;}
      h1{margin: 0 0 4px;}
      h2{margin: 24px 0 8px;}
      .muted{color:#475569}
      .badge{display:inline-block;padding:4px 8px;border:1px solid #cbd5e1;border-radius:8px;margin:4px 6px;}
      a{color:#2563eb;text-decoration:none}
    </style>
  </head>
  <body>
    <h1>Naman Sinha</h1>
    <div class="muted">UI/UX Designer & Frontend Developer</div>
    <h2>About</h2>
    <p>I’m an aspiring Frontend and Android App Developer passionate about turning creative ideas into sleek, interactive digital experiences. Curious by nature, I constantly explore new tools and technologies to push the boundaries of creativity and code. I enjoy designing intuitive interfaces and developing impactful products that solve real-world problems.</p>
    <h2>Contact</h2>
    <p>Email: <a href="mailto:get2naman@gmail.com">get2naman@gmail.com</a> · Phone: +91 8925474810 · GitHub: <a href="https://github.com/get2naman-bit">get2naman-bit</a> · LinkedIn: <a href="https://linkedin.com/in/naman-sinha-986511248">naman-sinha-986511248</a></p>
    <h2>Projects</h2>
    <ul>
      <li><strong>MindMate</strong> – Mental health assistant with AI chatbot and community. <a href="https://hpsc.tiiny.site">Link</a></li>
      <li><strong>AI Credit Score Manager</strong> – AI-approved score from utility bill patterns. <a href="https://creditscore-main.onrender.com">Link</a></li>
      <li><strong>Bus/Train Ticket Booking System</strong> – Smart ticketing with mock payments. <a href="https://booksmmart.netlify.app">Link</a></li>
      <li><strong>TruthLensAI</strong> – Fake news detection with credibility scores. <a href="https://truth-guard-ai-08a116dd.base44.app">Link</a></li>
      <li><strong>Cricscard</strong> – Live cricket & football scores with standings. <a href="https://cricscard.netlify.app">Link</a></li>
      <li><strong>Juswipe (Upcoming)</strong> – Personalized news swiping app.</li>
    </ul>
    <h2>Experience</h2>
    <p><strong>UI/UX Designer & Frontend Developer — Youth India Foundation</strong> (May 2025 – July 2025)</p>
    <ul>
      <li>Helped design, refine and ship website experiences.</li>
      <li>Collaborated on UI/UX improvements and front-end implementation.</li>
    </ul>
    <h2>Hackathons</h2>
    <ul>
      <li>SIH 2025 – Cleared internal round; Top 30/220. Frontend Lead for a mental health platform.</li>
      <li>Riidl Incuverse 2025 – Personal finance app with smart insights.</li>
      <li>Google Gen AI Hackathon – Personalized AI features for counselling platform.</li>
      <li>VW Mobilothon 5.0 – Real-time parking app, Team Lead. (Results awaited)</li>
      <li>Mumbai Hacks 2025 – Building Agentic AI against misinformation (Finale upcoming).</li>
    </ul>
    <h2>Skills</h2>
    <div>
      <div class="badge">C</div>
      <div class="badge">Python</div>
      <div class="badge">Java</div>
      <div class="badge">HTML</div>
      <div class="badge">CSS</div>
      <div class="badge">JavaScript</div>
      <div class="badge">React</div>
      <div class="badge">React Native</div>
      <div class="badge">Flutter</div>
      <div class="badge">Figma</div>
      <div class="badge">Canva</div>
      <div class="badge">Wix</div>
      <div class="badge">Visily</div>
      <div class="badge">VS Code</div>
      <div class="badge">Code::Blocks</div>
      <div class="badge">Flutter (Tooling)</div>
    </div>
  </body>
</html>`;

    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Naman_Sinha_Resume.html';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-widest text-cyan-300/90">Portfolio • Interactive • Modern</p>
          <h1 className="font-geist text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Hi, I’m Naman Sinha
          </h1>
          <p className="mt-3 text-lg text-slate-200">
            UI/UX Designer & Frontend Developer crafting playful, performant, and people-first digital products. I turn ideas into elegant, interactive experiences across web and mobile.
          </p>

        
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-200">
            <a href="mailto:get2naman@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur hover:bg-white/20">
              <Mail size={16} /> get2naman@gmail.com
            </a>
            <a href="tel:+918925474810" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur hover:bg-white/20">
              <Phone size={16} /> +91 8925474810
            </a>
            <a href="https://github.com/get2naman-bit" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur hover:bg-white/20">
              <Github size={16} /> GitHub
            </a>
            <a href="https://linkedin.com/in/naman-sinha-986511248" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur hover:bg-white/20">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-4">
            <button onClick={handleDownload} className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-400/30 transition hover:bg-cyan-300">
              <Download size={18} /> Download Resume
            </button>
            <a href="#projects" className="rounded-lg border border-white/20 px-5 py-3 font-medium text-white/90 transition hover:bg-white/10">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
