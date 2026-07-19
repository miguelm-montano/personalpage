import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridBackground from "../../components/GridBackground";
import MenuIcon from "../../components/MenuIcon";
import MenuPanel from "../../components/MenuPanel";
import About from "../About";
import Projects from "../Projects";
import Experience from "../Experience";
import Contact from "../Contact";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "3+", label: "Open Source Contributions" },
  { value: "30+", label: "Unit Tests Contributed" },
  { value: "AI", label: "Daily Workflow" },
];

const SECTIONS = [
  { id: "about",      bg: "#09B3C3", Component: About      },
  { id: "projects",   bg: "#ffffff", Component: Projects   },
  { id: "experience", bg: "#ffffff", Component: Experience },
  { id: "contact",    bg: "#ffffff", Component: Contact    },
];

function StatItem({ value, label }) {
  return (
    <div className="text-right">
      <p className="font-unbounded font-black text-4xl leading-none">{value}</p>
      <p className="font-open-sans text-sm text-neutral-500 mt-1">{label}</p>
    </div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const panels = gsap.utils.toArray(".scroll-panel");

    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      {/* ── Panel 1: Home — untouched ── */}
      <div
        className="scroll-panel relative h-screen bg-white"
        style={{ zIndex: 1 }}
      >
        {/* <GridBackground />*/}

        <div className="relative z-10 h-full grid grid-cols-2 grid-rows-2">
          <div className="row-span-2 flex flex-col justify-center px-28">
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

          <div />

          <div className="flex flex-col items-end justify-end gap-8 px-16 pb-16">
            {STATS.map((stat) => (
              <StatItem key={stat.value} {...stat} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Panels 2-5: sections that slide up over Home ── */}
      {SECTIONS.map(({ id, bg, Component }, i) => (
        <div
          key={id}
          className="scroll-panel relative h-screen"
          style={{ background: bg, zIndex: 2 + i }}
        >
          <Component />
        </div>
      ))}

      {/* ── Menu curtain ── */}
      <AnimatePresence>
        {isMenuOpen && <MenuPanel onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>

      {/* ── Menu button — fixed, always above every panel ── */}
      <div className="fixed top-0 right-0 p-6 z-[200]">
        <MenuIcon
          color={isMenuOpen ? "white" : "black"}
          onToggle={setIsMenuOpen}
        />
      </div>
    </>
  );
}
