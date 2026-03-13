import { motion } from "motion/react";
import {
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
  SiNodedotjs,
  SiGraphql,
  SiPostgresql,
  SiThreedotjs,
  SiVercel,
  SiGithub,
  SiDocker,
  SiPrisma,
  SiTrpc,
  SiSupabase,
  SiStripe,
} from "react-icons/si";

const techStack = [
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiNextdotjs, color: "#000000" },
  { Icon: SiVite, color: "#646CFF" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: SiShadcnui, color: "#000000" },
  { Icon: SiFramer, color: "#0055FF" },
  { Icon: SiNodedotjs, color: "#339933" },
  { Icon: SiGraphql, color: "#E10098" },
  { Icon: SiPostgresql, color: "#4169E1" },
  { Icon: SiThreedotjs, color: "#000000" },
  { Icon: SiPrisma, color: "#2D3748" },
  { Icon: SiTrpc, color: "#2596B6" },
  { Icon: SiDocker, color: "#2496ED" },
  { Icon: SiGithub, color: "#181717" },
  { Icon: SiVercel, color: "#000000" },
  { Icon: SiSupabase, color: "#3ECF8E" },
  { Icon: SiStripe, color: "#008CDD" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-[100vw] mx-auto overflow-hidden">
        <div className="flex justify-center items-center gap-4 md:gap-6 min-w-max px-10 py-20">
          {techStack.map((tech, index) => {
            const { Icon, color } = tech;
            return (
              <motion.div
                key={index}
                animate={{ y: [-40, 40, -40] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-lg border border-black/5 shrink-0"
              >
                <Icon size={28} color={color} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
