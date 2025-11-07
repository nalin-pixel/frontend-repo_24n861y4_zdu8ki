import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neon Commerce',
    description: 'A blazing fast, headless e‑commerce storefront powered by React and a custom Node API.',
    tags: ['React', 'Node', 'Stripe', 'Tailwind'],
    url: '#',
    repo: '#',
    gradient: 'from-emerald-400/20 via-teal-400/20 to-sky-400/20',
  },
  {
    title: 'Realtime Chat',
    description: 'A realtime chat application with rooms, presence, and message reactions.',
    tags: ['MongoDB', 'Express', 'Socket.io'],
    url: '#',
    repo: '#',
    gradient: 'from-purple-400/20 via-fuchsia-400/20 to-pink-400/20',
  },
  {
    title: 'Dev Portfolio',
    description: 'A modern, animated portfolio template with 3D, motion, and dark mode.',
    tags: ['Vite', 'Framer Motion', 'Spline'],
    url: '#',
    repo: '#',
    gradient: 'from-amber-400/20 via-orange-400/20 to-rose-400/20',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-widest text-emerald-300">Projects</p>
            <h2 className="text-balance text-3xl font-bold sm:text-4xl md:text-5xl">Selected Work</h2>
            <p className="mt-3 max-w-2xl text-white/70">A few things I’ve built recently. Each project focuses on performance, DX, and clean UX.</p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-white/10 sm:inline-block"
          >
            Let’s collaborate
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-xl shadow-emerald-500/5 transition hover:translate-y-[-4px] hover:shadow-emerald-500/10">
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/15 bg-black/40 px-2 py-1 text-xs text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative z-10 mt-5 flex items-center gap-3">
                <a href={p.url} className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-black transition hover:opacity-90">
                  Live <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white backdrop-blur-sm transition hover:bg-white/20">
                  Code <Github className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
