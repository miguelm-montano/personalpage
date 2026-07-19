import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import GridBackground from '../../components/GridBackground'
import MenuIcon from '../../components/MenuIcon'
import MenuPanel from '../../components/MenuPanel'

const STATS = [
  { value: '3+',  label: 'Open Source Contributions' },
  { value: '30+', label: 'Unit Tests Contributed' },
  { value: 'AI',  label: 'Daily Workflow' },
]

function StatItem({ value, label }) {
  return (
    <div className="text-right">
      <p className="font-unbounded font-black text-4xl leading-none">{value}</p>
      <p className="font-open-sans text-sm text-neutral-500 mt-1">{label}</p>
    </div>
  )
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative h-screen bg-white overflow-hidden">

      <GridBackground />

      {/* ── layout — above canvas ── */}
      <div className="relative z-10 h-full grid grid-cols-2 grid-rows-2">

        {/* LEFT COLUMN — spans both rows, content centered */}
        <div className="row-span-2 flex flex-col justify-center px-16">
          <h1 className="font-unbounded font-black text-8xl uppercase leading-tight mb-5">
            Full Stack<br />Developer
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

        {/* TOP RIGHT — empty (button is absolutely positioned) */}
        <div />

        {/* BOTTOM RIGHT — stats */}
        <div className="flex flex-col items-end justify-end gap-8 px-16 pb-16">
          {STATS.map((stat) => (
            <StatItem key={stat.value} {...stat} />
          ))}
        </div>

      </div>

      {/* ── menu curtain ── */}
      <AnimatePresence>
        {isMenuOpen && <MenuPanel />}
      </AnimatePresence>

      {/* ── menu button — always above curtain ── */}
      <div className="absolute top-0 right-0 p-6 z-50">
        <MenuIcon
          color={isMenuOpen ? 'white' : 'black'}
          onToggle={setIsMenuOpen}
        />
      </div>

    </div>
  )
}
