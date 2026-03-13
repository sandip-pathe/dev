/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-accent selection:text-black">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between mix-blend-difference">
        <div className="text-xl font-bold tracking-tighter">
          DEV<span className="text-accent">.</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-mono text-zinc-400">
          <a href="#skills" className="hover:text-white transition-colors">
            /skills
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            /projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            /contact
          </a>
        </div>
      </nav>

      <Hero />
      <Skills />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-zinc-600 font-mono text-xs border-t border-white/5">
        &copy; {new Date().getFullYear()} / Built with React, Vite, Tailwind &
        Three.js
      </footer>
    </main>
  );
}
