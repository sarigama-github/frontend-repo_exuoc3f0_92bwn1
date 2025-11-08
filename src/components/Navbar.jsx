import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-gray-950/70 bg-gray-950/90 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-white">Naman Sinha</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a
            href="https://drive.google.com/"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium shadow">
            Resume
          </a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/10 text-gray-300 hover:text-white">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
