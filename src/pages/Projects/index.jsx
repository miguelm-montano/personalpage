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

function ProjectItem({ name, techs, divider }) {
  return (
    <div className="project-item">
      <div className="block cursor-pointer">
        <h3
          className="project-title font-unbounded font-bold text-5xl mb-3"
          data-text={name}
        >
          {name}
        </h3>
        <p className="font-open-sans text-sm text-neutral-700 mb-5">
          {techs.join(" · ")}
        </p>
      </div>
      {divider && <div className="border-t border-[#FFB703] mb-5" />}
    </div>
  );
}

export default function Projects() {
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

      {/* ── Two-column content ── */}
      <div className="flex-1 flex items-center gap-10 px-16 py-12 mr-8">

        {/* Project list */}
        <div className="projects-list flex-1">
          <SectionLabel>selected projects</SectionLabel>
          {SELECTED.map((p, i) => (
            <ProjectItem key={p.name} {...p} divider={i < SELECTED.length - 1} />
          ))}

          <div className="mt-6 mb-2">
            <SectionLabel>open source projects</SectionLabel>
          </div>
          {OPEN_SOURCE.map((p, i) => (
            <ProjectItem
              key={p.name}
              {...p}
              divider={i < OPEN_SOURCE.length - 1}
            />
          ))}
        </div>

        {/* Preview panel — placeholder for now */}
        <div className="w-80 shrink-0" />

      </div>
    </div>
  );
}
