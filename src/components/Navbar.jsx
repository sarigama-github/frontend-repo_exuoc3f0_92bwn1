import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClick = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-gray-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" onClick={(e) => navClick(e, '#home')} className="font-semibold tracking-tight text-white">Naman Sinha</a>
        <div className="hidden items-center gap-6 text-sm text-gray-200 md:flex">
          <a href="#projects" onClick={(e) => navClick(e, '#projects')} className="hover:text-white">Projects</a>
          <a href="#experience" onClick={(e) => navClick(e, '#experience')} className="hover:text-white">Experience</a>
          <a href="#skills" onClick={(e) => navClick(e, '#skills')} className="hover:text-white">Skills</a>
          <a href="#contact" onClick={(e) => navClick(e, '#contact')} className="hover:text-white">Reach Out</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="mailto:get2naman@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200 hover:bg-white/10"><Mail size={14} /> Email</a>
          <a href="https://github.com/get2naman-bit" target="_blank" rel="noreferrer" className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200 hover:bg-white/10 sm:inline-flex items-center gap-2"><Github size={14} /> GitHub</a>
          <a href="https://linkedin.com/in/naman-sinha-986511248" target="_blank" rel="noreferrer" className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200 hover:bg-white/10 sm:inline-flex items-center gap-2"><Linkedin size={14} /> LinkedIn</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
