import { motion } from "motion/react";
import { ArrowRight, Terminal } from "lucide-react";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <HeroBackground />
      <div className="max-w-6xl mx-auto w-full z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-sm font-medium text-zinc-300 mb-8 border border-white/10">
            <Terminal size={14} />
            <span>Available for Contract Work</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-medium tracking-tight mb-10 leading-[1.05] max-w-5xl">
            <span className="block text-white">Experience liftoff</span>
            <span className="block text-zinc-400">with the next-gen web.</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
            >
              View Projects
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border border-zinc-700 text-white font-medium hover:bg-white/5 transition-colors"
            >
              get in touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
