import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useScramble } from '../../hooks/useScramble'
import PixelCurtain from '../../components/PixelCurtain'

const WORDS = [
  'Welcome',
  'Full-Stack Development',
  'Problem Solving',
  'Creative Solutions',
  'Ready?',
]

export default function Landing() {
  const [transitioning, setTransitioning] = useState(false)
  const navigate = useNavigate()
  const text = useScramble(WORDS)

  function handleEnter() {
    if (transitioning) return
    setTransitioning(true)
  }

  function handleCurtainComplete() {
    navigate('/home')
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col items-center gap-16"
      >
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-light tracking-widest text-white text-center min-w-[12ch]">
          {text}
        </p>

        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          whileHover={{ opacity: 0.4 }}
          onClick={handleEnter}
          disabled={transitioning}
          className="text-white text-sm tracking-[0.3em] uppercase bg-transparent border-none outline-none cursor-pointer disabled:cursor-default"
        >
          Click here
        </motion.button>
      </motion.div>

      {transitioning && (
        <PixelCurtain onComplete={handleCurtainComplete} />
      )}
    </div>
  )
}
