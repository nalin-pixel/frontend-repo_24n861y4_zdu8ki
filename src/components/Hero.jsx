import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignette to improve text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm tracking-wide backdrop-blur-sm">
          <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />
          Welcome to my world
        </p>
        <h1 className="text-balance font-extrabold tracking-tight text-white">
          <span className="block text-4xl sm:text-6xl md:text-7xl">Pranav</span>
          <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-teal-300 to-sky-300 bg-clip-text text-2xl text-transparent sm:text-4xl md:text-5xl">
            Full‑Stack MERN Developer
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-white/80">
          I craft sleek, performant web experiences with modern JavaScript, elegant UI, and playful interactions.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-black shadow/20 shadow-emerald-500/10 transition hover:translate-y-[-2px] hover:shadow-lg"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            About Me
          </a>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
