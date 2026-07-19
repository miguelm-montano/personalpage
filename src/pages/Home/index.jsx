import GridBackground from "../../components/GridBackground";

const STATS = [
  { value: "7+", label: "Lorem ipsum test text" },
  { value: "6+", label: "Lorem ipsum test text" },
  { value: "3+", label: "Lorem ipsum test text" },
];

function MenuIcon() {
  return (
    <button
      aria-label="Open menu"
      className="flex flex-col gap-[7px] p-2 cursor-pointer"
    >
      <span className="block w-7 h-[2px] bg-black" />
      <span className="block w-7 h-[2px] bg-black" />
    </button>
  );
}

function StatItem({ value, label }) {
  return (
    <div className="text-right">
      <p className="font-unbounded font-black text-4xl leading-none">{value}</p>
      <p className="font-open-sans text-sm text-neutral-500 mt-1">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative h-screen bg-white overflow-hidden">
      <GridBackground />

      {/* ── layout grid — above canvas ── */}
      <div className="relative z-10 h-full grid grid-cols-2 grid-rows-2">
        {/* LEFT COLUMN — spans both rows, content centered */}
        <div className="row-span-2 flex flex-col justify-center px-42">
          <h1 className="font-unbounded font-black text-8xl uppercase leading-tight mb-5">
            Full Stack
            <br />
            Developer
          </h1>
          <p className="font-open-sans text-base text-neutral-600 max-w-xs leading-relaxed mb-10">
            Hi! I'm Miguel. I'm a full-stack developer with a background in
            industrial design, specializing in problem-solving and creative
            solutions
          </p>
          <button className="font-unbounded font-light text-sm bg-black text-white rounded-full px-8 py-4 w-fit">
            Let's Talk!
          </button>
        </div>

        {/* TOP RIGHT — menu */}
        <div className="flex items-start justify-end p-8">
          <MenuIcon />
        </div>

        {/* BOTTOM RIGHT — stats */}
        <div className="flex flex-col items-end justify-end gap-8 px-16 pb-16">
          {STATS.map((stat) => (
            <StatItem key={stat.value} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
