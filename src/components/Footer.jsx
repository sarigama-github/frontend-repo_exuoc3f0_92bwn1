import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-10 text-slate-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Naman Sinha. Crafted with care and a dash of playfulness.</p>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span>Open to internships & freelance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
