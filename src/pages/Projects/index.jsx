import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PreviewCard from "../../components/PreviewCard";
import nodefoldApiImg from "../../assets/nodefold-api.webp";
import nodefoldFrontImg from "../../assets/nodefold-front.webp";
import openEmrImg from "../../assets/open-emr.webp";
import linkForgeImg from "../../assets/link-forge.webp";
import vuePokedexImg from "../../assets/vue-pokedex.webp";
import uscmImg from "../../assets/uscm.webp";

const SELECTED = [
  {
    name: "Nodefold - API",
    techs: ["REST Api", "Laravel", "OAuth 2"],
    description:
      "RESTful API for managing design assets organized in folders. All protected endpoints require a Bearer token obtained via POST /api/v1/login.",
    url: "https://nodefold-api.onrender.com/docs",
    github: "https://github.com/miguelm-montano/nodefold-api",
    image: nodefoldApiImg,
  },
  {
    name: "Nodefold - Front",
    techs: ["React", "Tailwind CSS", "Docker"],
    description:
      "Frontend application for the Nodefold platform. Built with React and Tailwind CSS, containerized with Docker for consistent deployments.",
    url: "https://nodefold.vercel.app",
    github: "https://github.com/miguelm-montano/nodefold-front",
    image: nodefoldFrontImg,
  },
];

const OPEN_SOURCE = [
  {
    name: "OpenEMR",
    techs: ["PHP 8.2+", "PHPStan", "REST API Testing"],
    description:
      "Contributions to OpenEMR, an open-source electronic health records and medical practice management solution.",
    url: "https://www.open-emr.org",
    github: "https://github.com/openemr/openemr/pull/12419",
    image: openEmrImg,
  },
  {
    name: "LinkForge",
    techs: ["PHP", "Laravel", "PHPUnit"],
    description:
      "A Laravel-based link management system with comprehensive test coverage using PHPUnit.",
    url: "https://linkforge.store",
    github: "https://github.com/sanmaxdev/linkforge/pull/22",
    image: linkForgeImg,
  },
  {
    name: "Vue-Pokedex",
    techs: ["Vue 3", "Pinia", "TypeScript"],
    description:
      "A modern Pokédex built with Vue 3, Pinia for state management, and TypeScript for type safety.",
    url: "https://github.com/JohannesL2/vue-pokedex",
    github:
      "https://github.com/JohannesL2/vue-pokedex/pull/12#event-27299836335",
    image: vuePokedexImg,
  },
  {
    name: "USCM",
    techs: ["PHP", "JavaScript", "HTML"],
    description:
      "User and content management system built with PHP and vanilla JavaScript.",
    url: "https://www.uscm.se/skynet/",
    github: "https://github.com/USCM-RPG/USCM/pull/72",
    image: uscmImg,
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
    <div className="project-item">
      <h3
        className="project-title font-unbounded font-bold text-5xl mb-3 cursor-default"
        data-text={project.name}
        onMouseEnter={(e) => onHover(project, e.currentTarget.offsetTop)}
        onMouseLeave={onLeave}
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
  const containerRef = useRef(null);
  const hideTimeout = useRef(null);

  function cancelHide() {
    clearTimeout(hideTimeout.current);
  }

  function scheduleHide() {
    cancelHide();
    hideTimeout.current = setTimeout(() => setActiveProject(null), 300);
  }

  function handleHover(project, top) {
    cancelHide();
    const containerHeight = containerRef.current?.clientHeight ?? 600;
    const CARD_HEIGHT = 650;
    const clampedTop = Math.min(top, containerHeight - CARD_HEIGHT);
    setActiveProject({ project, top: Math.max(0, clampedTop) });
  }

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
      <div
        ref={containerRef}
        className="relative flex-1 flex items-center px-46 py-12"
      >
        {/* Project list — full width */}
        <div className="projects-list w-full">
          <SectionLabel>selected projects</SectionLabel>
          {SELECTED.map((p, i) => (
            <ProjectItem
              key={p.name}
              project={p}
              divider={i < SELECTED.length - 1}
              onHover={handleHover}
              onLeave={scheduleHide}
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
              onHover={handleHover}
              onLeave={scheduleHide}
            />
          ))}
        </div>

        {/* Preview panel — tracks vertical position of hovered project */}
        <AnimatePresence mode="wait">
          {activeProject && (
            <motion.div
              key={activeProject.project.name}
              className="absolute left-[50%] w-[34rem] z-10"
              style={{ top: activeProject.top }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={cancelHide}
              onMouseLeave={scheduleHide}
            >
              <PreviewCard project={activeProject.project} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
