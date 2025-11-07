import React from 'react';
import { Mail, Github, Linkedin, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative w-full bg-[#0b0b0b] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/20 to-sky-400/20 text-emerald-300 ring-1 ring-white/10">
            <Sparkles className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-semibold">Let’s build something cool</h3>
          <p className="mt-2 max-w-xl text-white/70">
            I’m open to freelance, collaborations, and full‑time roles. Drop a line and let’s talk.
          </p>
          <a
            href="mailto:hello@pranav.dev"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-black transition hover:opacity-90"
          >
            <Mail className="h-4 w-4" /> hello@pranav.dev
          </a>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Pranav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
