import React from 'react';
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
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900 text-white">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <div>
            <p className="mb-3 text-sm uppercase tracking-widest text-cyan-300/90">UI UX Designer • Frontend Developer</p>
            <h1 className="font-geist text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Hi, I’m Naman Sinha
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              I craft calm, accessible and fast experiences for the web and mobile. Focused on clear structure, fine details and a polished, modern look.
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
              <button onClick={handleDownload} className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-gray-900 shadow-lg shadow-cyan-400/30 transition hover:bg-cyan-300">
                <Download size={18} /> Download Resume
              </button>
              <a href="#projects" className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 transition hover:bg-white/10">View Projects</a>
            </div>

            {/* Quick badges */}
            <div className="mt-8 flex flex-wrap gap-3 text-xs text-slate-200">
              {['Design Systems', 'Responsive UI', 'Accessibility', 'Performance', 'Prototyping'].map((b) => (
                <span key={b} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{b}</span>
              ))}
            </div>
          </div>

          {/* Showcase card */}
          <div className="">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 backdrop-blur">
              <div className="rounded-xl border border-white/10 bg-gray-900/60 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-3 w-3 rounded-full bg-red-400/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-300/70" />
                  <div className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 rounded bg-white/10" />
                  <div className="h-4 w-1/2 rounded bg-white/10" />
                  <div className="h-32 rounded-lg bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/10" />
                  <div className="flex gap-2">
                    <div className="h-3 w-24 rounded bg-white/10" />
                    <div className="h-3 w-16 rounded bg-white/10" />
                    <div className="h-3 w-20 rounded bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-sm text-slate-300">Polished, glassy UI preview • Grey theme • Subtle gradients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
