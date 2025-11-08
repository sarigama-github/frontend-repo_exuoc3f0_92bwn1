import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Naman Sinha. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
