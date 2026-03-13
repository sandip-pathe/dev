import { motion } from "motion/react";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
      {/* Base Grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 80%)",
        }}
      />

      {/* Moving Light Beams */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "200%", opacity: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 0 }}
        className="absolute left-[20%] w-px h-[30vh] bg-linear-to-b from-transparent via-cyan-400 to-transparent blur-[1px]"
      />
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "200%", opacity: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute left-[60%] w-px h-[40vh] bg-linear-to-b from-transparent via-indigo-400 to-transparent blur-[1px]"
      />
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "200%", opacity: [0, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
        className="absolute top-[30%] h-px w-[40vw] bg-linear-to-r from-transparent via-emerald-400 to-transparent blur-[1px]"
      />
      <motion.div
        initial={{ x: "200%", opacity: 0 }}
        animate={{ x: "-100%", opacity: [0, 1, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 3 }}
        className="absolute top-[70%] h-px w-[30vw] bg-linear-to-r from-transparent via-purple-400 to-transparent blur-[1px]"
      />

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-white/2 rounded-full blur-[80px]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
    </div>
  );
}
