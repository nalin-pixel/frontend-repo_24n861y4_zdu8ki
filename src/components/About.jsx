import React from 'react';
import { Code2, Database, Rocket, Server, CircleCheck } from 'lucide-react';

const skills = [
  { icon: <Code2 className="h-5 w-5" />, title: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'Next.js', 'Framer Motion'] },
  { icon: <Server className="h-5 w-5" />, title: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'REST', 'Auth'] },
  { icon: <Database className="h-5 w-5" />, title: 'Database', items: ['MongoDB', 'Mongoose', 'Prisma', 'Caching', 'Aggregation'] },
  { icon: <Rocket className="h-5 w-5" />, title: 'Dev & Tools', items: ['Git', 'CI/CD', 'Docker', 'Testing', 'Analytics'] },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b0b0b] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-widest text-emerald-300">About</p>
          <h2 className="text-balance text-3xl font-bold sm:text-4xl md:text-5xl">Crafting delightful, high‑performance web apps.</h2>
          <p className="mt-4 max-w-3xl text-white/70">
            I’m Pranav — a full‑stack MERN developer who blends clean code with crisp design. I love building
            interactive interfaces, scalable APIs, and products that feel fast and fun.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-emerald-500/5 transition hover:translate-y-[-4px] hover:shadow-emerald-500/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-sky-400/20 text-emerald-300 ring-1 ring-white/10">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CircleCheck className="h-4 w-4 text-emerald-300" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
