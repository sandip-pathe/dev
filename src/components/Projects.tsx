import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import BottomSheet from "./BottomSheet";

const projects = [
  {
    title: "Anaya Compliance",
    description:
      "A compliance management platform for financial institutions. Streamlines regulatory reporting and risk assessment with real-time data analytics and automated workflows.",
    image:
      "https://raw.githubusercontent.com/sandip-pathe/anaya-comp/refs/heads/main/public/Screenshot%202026-03-13%20180715.png",
    tags: ["Vite", "Three.js", "TailwindCSS", "TS"],
    link: "https://www.anaya.legal/",
    github: "https://github.com/sandip-pathe/anaya-comp",
    ratio: "1899x950",
  },
  {
    title: "Fetch",
    description:
      "A shared clipboard. Copy on your phone, it appears instantly on your laptop.",
    image:
      "https://raw.githubusercontent.com/sandip-pathe/anaya-comp/refs/heads/main/public/Screenshot%202026-03-13%20175653.png",
    tags: ["React", "Vite", "QR-scanner", "firebase"],
    link: "https://try-fetch.vercel.app/",
    github: "https://github.com/sandip-pathe/fetch",
    ratio: "1386x946",
  },
  {
    title: "CamJam",
    description: "Research CRM, collaboration platform for universities",
    image:
      "https://raw.githubusercontent.com/sandip-pathe/rr/refs/heads/main/public/Screenshot%202026-03-13%20193105.png",
    tags: ["TypeScript", "React", "Node.js", "WebSockets"],
    link: "https://rrwa-rho.vercel.app/",
    github: "https://github.com/sandip-pathe/rr",
    ratio: "1373x905",
  },
  {
    title: "Anaya-Scan",
    description: "Open-source DPDP Compliance Code scanner",
    image:
      "https://raw.githubusercontent.com/sandip-pathe/anaya-comp/refs/heads/main/public/Screenshot%202026-03-13%20194407.png",
    tags: ["Python", "TS", "CLI", "WebSockets"],
    link: "",
    github: "https://github.com/sandip-pathe/anaya-scan",
    ratio: "1599x951",
  },
];

export default function Projects() {
  const [sheetUrl, setSheetUrl] = useState<string | null>(null);
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  const openSheet = (url: string) => setSheetUrl(url);
  const closeSheet = () => setSheetUrl(null);

  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <BottomSheet
        open={!!sheetUrl}
        onClose={closeSheet}
        url={sheetUrl || ""}
      />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-20 text-center">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
              Selected Work
            </h2>
          </div>

          <div className="space-y-32">
            {/* Project 1: Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-10"
            >
              <div
                className="w-full rounded-4xl overflow-hidden glass-panel relative group border border-white/10 flex items-center justify-center"
                style={{
                  aspectRatio: featuredProject.ratio.replace("x", " / "),
                }}
              >
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="max-w-full max-h-full object-contain m-auto transition-transform duration-1000 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  style={{
                    aspectRatio: featuredProject.ratio.replace("x", " / "),
                  }}
                />
              </div>

              <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
                  {featuredProject.title}
                </h3>
                <p className="text-zinc-400 text-xl mb-8 leading-relaxed">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-8">
                  <button
                    onClick={() => openSheet(featuredProject.link)}
                    className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors font-medium"
                  >
                    Live Project <ExternalLink size={18} />
                  </button>
                  <a
                    href={featuredProject.github}
                    className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-medium"
                  >
                    Source Code <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Other Projects: Text Left, Image Right */}
            <div className="space-y-32 pt-16 border-t border-white/10">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
                >
                  <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
                    <h3 className="text-4xl font-black mb-6 text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-8">
                      <button
                        onClick={() => openSheet(project.link)}
                        className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors font-medium"
                      >
                        Live Project <ExternalLink size={18} />
                      </button>
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-medium"
                      >
                        Source <Github size={18} />
                      </a>
                    </div>
                  </div>

                  <div
                    className="lg:col-span-7 relative group order-1 lg:order-2 flex items-center justify-center"
                    style={{ aspectRatio: project.ratio.replace("x", " / ") }}
                  >
                    <div className="relative w-full h-full rounded-4xl overflow-hidden glass-panel border border-white/10 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-full object-contain m-auto transition-transform duration-1000 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        style={{
                          aspectRatio: project.ratio.replace("x", " / "),
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
