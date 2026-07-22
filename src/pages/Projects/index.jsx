import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PreviewCard from "../../components/PreviewCard";

const SELECTED = [
  {
    name: "Nodefold - API",
    techs: ["REST Api", "Laravel", "OAuth 2"],
    description: "RESTful API for managing design assets organized in folders. All protected endpoints require a Bearer token obtained via POST /api/v1/login.",
    url: "#",
    github: "#",
  },
  {
    name: "Nodefold - Front",
    techs: ["React", "Tailwind CSS", "Docker"],
    description: "Frontend application for the Nodefold platform. Built with React and Tailwind CSS, containerized with Docker for consistent deployments.",
    url: "#",
    github: "#",
  },
];

const OPEN_SOURCE = [
  {
    name: "OpenEMR",
    techs: ["PHP 8.2+", "PHPStan", "REST API Testing"],
    description: "Contributions to OpenEMR, an open-source electronic health records and medical practice management solution.",
    url: "#",
    github: "#",
  },
  {
    name: "LinkForge",
    techs: ["PHP", "Laravel", "PHPUnit"],
    description: "A Laravel-based link management system with comprehensive test coverage using PHPUnit.",
    url: "#",
    github: "#",
  },
  {
    name: "Vue-Pokedex",
    techs: ["Vue 3", "Pinia", "TypeScript"],
    description: "A modern Pokédex built with Vue 3, Pinia for state management, and TypeScript for type safety.",
    url: "#",
    github: "#",
  },
  {
    name: "USCM",
    techs: ["PHP", "JavaScript", "HTML"],
    description: "User and content management system built with PHP and vanilla JavaScript.",
    url: "#",
    github: "#",
  },
];

function SectionLabel({ children }) {
  return (
    <p className="font-open-sans font-bold text-sm text-black mb-4">
      {children}
    </p>
  );
}

function ProjectItem({ project, divider, onHover, onLeave }) {
  return (
    <div
      className="project-item"
      onMouseEnter={() => onHover(project)}
      onMouseLeave={onLeave}
    >
      <h3
        className="project-title font-unbounded font-bold text-5xl mb-3 cursor-default"
        data-text={project.name}
      >
        {project.name}
      </h3>
      <p className="font-open-sans text-sm text-neutral-700 mb-5">
        {project.techs.join(" · ")}
      </p>
      {divider && <div className="border-t border-[#FFB703] mb-5" />}
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="h-full bg-white flex">
      {/* ── Left strip — vertical email ── */}
      <div className="w-14 shrink-0 flex items-end justify-center pb-10">
        <span
          className="font-open-sans text-xs text-neutral-400 tracking-widest whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          migmontm@gmail.com
        </span>
      </div>

      {/* ── Content ── */}
      <div className="relative flex-1 flex items-center px-46 py-12">

        {/* Project list — full width */}
        <div className="projects-list w-full">
          <SectionLabel>selected projects</SectionLabel>
          {SELECTED.map((p, i) => (
            <ProjectItem
              key={p.name}
              project={p}
              divider={i < SELECTED.length - 1}
              onHover={setActiveProject}
              onLeave={() => setActiveProject(null)}
            />
          ))}

          <div className="mt-6 mb-2">
            <SectionLabel>open source projects</SectionLabel>
          </div>
          {OPEN_SOURCE.map((p, i) => (
            <ProjectItem
              key={p.name}
              project={p}
              divider={i < OPEN_SOURCE.length - 1}
              onHover={setActiveProject}
              onLeave={() => setActiveProject(null)}
            />
          ))}
        </div>

        {/* Preview panel — absolute, overlays the list on the right */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 w-80 z-10">
          <AnimatePresence mode="wait">
            {activeProject && (
              <motion.div
                key={activeProject.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <PreviewCard project={activeProject} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
