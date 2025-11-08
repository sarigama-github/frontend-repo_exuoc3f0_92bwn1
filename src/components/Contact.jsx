import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = data.get('email');
    const subject = data.get('subject');
    const message = data.get('message');

    const mailto = `mailto:get2naman@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
    setStatus('Opening your email client...');
  };

  return (
    <section id="contact" className="bg-gray-900 py-20 text-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <Mail className="h-6 w-6 text-cyan-300" />
          <h2 className="text-3xl font-bold tracking-tight">Reach Out</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-300">Have a project, idea, or just want to say hi? Send me a message and I’ll get back to you shortly.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>Email: <a className="text-cyan-300 hover:underline" href="mailto:get2naman@gmail.com">get2naman@gmail.com</a></li>
              <li>Phone: <a className="text-cyan-300 hover:underline" href="tel:+918925474810">+91 8925474810</a></li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-4">
              <input name="email" type="email" required placeholder="Your email" className="w-full rounded-lg border border-white/10 bg-gray-800/60 px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-cyan-400" />
              <input name="subject" type="text" required placeholder="Subject" className="w-full rounded-lg border border-white/10 bg-gray-800/60 px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-cyan-400" />
              <textarea name="message" rows="5" required placeholder="Message" className="w-full rounded-lg border border-white/10 bg-gray-800/60 px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-cyan-400"></textarea>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-gray-900 shadow-lg shadow-cyan-400/30 transition hover:bg-cyan-300">
                <Mail size={18} /> Send Message
              </button>
              {status && <p className="text-sm text-gray-400">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
