import { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Animated hamburger → X icon.
 *
 * Phase 1 (open):  top & bottom lines converge to center, middle fades out
 * Phase 2 (open):  lines spread into an X
 * Reverse on close.
 *
 * Uses an `idle` state to prevent playing the close animation on first render.
 */

const topVariants = {
  idle: {
    d: 'M25,35 L75,35',
  },
  open: {
    d: ['M25,35 L75,35', 'M25,50 L75,50', 'M30,30 L70,70'],
    transition: { duration: 0.45, times: [0, 0.45, 1], ease: 'easeInOut' },
  },
  closed: {
    d: ['M30,30 L70,70', 'M25,50 L75,50', 'M25,35 L75,35'],
    transition: { duration: 0.45, times: [0, 0.55, 1], ease: 'easeInOut' },
  },
}

const middleVariants = {
  idle:   { opacity: 1 },
  open:   { opacity: 0, transition: { duration: 0.12 } },
  closed: { opacity: 1, transition: { duration: 0.12, delay: 0.28 } },
}

const bottomVariants = {
  idle: {
    d: 'M25,65 L75,65',
  },
  open: {
    d: ['M25,65 L75,65', 'M25,50 L75,50', 'M30,70 L70,30'],
    transition: { duration: 0.45, times: [0, 0.45, 1], ease: 'easeInOut' },
  },
  closed: {
    d: ['M30,70 L70,30', 'M25,50 L75,50', 'M25,65 L75,65'],
    transition: { duration: 0.45, times: [0, 0.55, 1], ease: 'easeInOut' },
  },
}

const STROKE = { stroke: 'black', strokeWidth: '6', strokeLinecap: 'round', fill: 'none' }

export default function MenuIcon({ onToggle }) {
  const [state, setState] = useState('idle')
  const isOpen = state === 'open'

  function handleClick() {
    setState((prev) => (prev === 'open' ? 'closed' : 'open'))
    onToggle?.(!isOpen)
  }

  return (
    <button
      onClick={handleClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className="p-2 cursor-pointer bg-transparent border-none outline-none"
    >
      <svg width="32" height="32" viewBox="0 0 100 100">
        <motion.path variants={topVariants}    initial="idle" animate={state} {...STROKE} />
        <motion.path variants={middleVariants} initial="idle" animate={state} {...STROKE} d="M25,50 L75,50" />
        <motion.path variants={bottomVariants} initial="idle" animate={state} {...STROKE} />
      </svg>
    </button>
  )
}
