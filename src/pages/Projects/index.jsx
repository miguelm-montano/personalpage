const SELECTED = [
  { name: "Nodefold - API", techs: ["REST Api", "Laravel", "OAuth 2"] },
  { name: "Nodefold - Front", techs: ["React", "Tailwind CSS", "Docker"] },
];

const OPEN_SOURCE = [
  { name: "OpenEMR", techs: ["REST Api", "Laravel", "OAuth 2"] },
  { name: "Vue-Pokedex", techs: ["React", "Tailwind CSS", "Docker"] },
  { name: "USCM", techs: ["React", "Tailwind CSS", "Docker"] },
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
    <div className="h-full bg-[#FFB703] flex">
      {/* ── Left yellow strip — vertical email ── */}
      <div className="w-14 shrink-0 flex items-end justify-center pb-10">
        <span
          className="font-open-sans text-xs text-white tracking-widest whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          migmontm@gmail.com
        </span>
      </div>

      {/* ── White inner box ── */}
      <div className="projects-list flex-1 bg-white my-10 mr-18 px-46 py-12 overflow-y-auto flex flex-col justify-center">
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
    </div>
  );
}
