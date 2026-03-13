import { motion } from "motion/react";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent"></div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-white">
            Let's build <br />
            <span className="text-accent-gradient italic">together.</span>
          </h2>

          <p className="text-xl text-zinc-400 mb-16 max-w-2xl mx-auto">
            Currently accepting new contract opportunities. If you have a
            project that needs top-tier engineering and design, I'd love to hear
            about it.
          </p>

          <motion.a
            href="mailto:sandippathe9689@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-accent text-black font-bold text-lg hover:bg-white transition-colors shadow-[0_0_40px_rgba(0,255,204,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
          >
            <Mail size={20} />
            sandippathe9689@gmail.com
          </motion.a>

          <div className="mt-24 flex items-center justify-center gap-8">
            <SocialLink
              href="https://www.linkedin.com/in/sandippathe/"
              icon={<Linkedin />}
            />
            <SocialLink
              href="https://wa.me/918767394523"
              icon={<SiWhatsapp />}
            />
            <SocialLink
              href="https://github.com/sandip-pathe"
              icon={<Github />}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, color: "var(--color-accent)" }}
      className="text-zinc-500 transition-colors p-3 glass-panel rounded-full hover:border-accent"
    >
      {icon}
    </motion.a>
  );
}
