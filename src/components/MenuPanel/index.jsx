import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Home',          to: '/home' },
  { label: 'About me',      to: '/about' },
  { label: 'Projects',      to: '/projects' },
  { label: 'Experience',    to: '/experience' },
  { label: 'Get in touch!', to: '/contact' },
]

const curtainVariants = {
  initial: { x: '100%' },
  animate: { x: 0,      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  exit:    { x: '100%', transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
}

const navVariants = {
  animate: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
}

const itemVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function MenuPanel({ onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-black flex items-center"
      variants={curtainVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.nav
        className="flex flex-col gap-6 px-28"
        variants={navVariants}
        initial="initial"
        animate="animate"
      >
        {NAV_ITEMS.map(({ label, to }) => (
          <motion.div key={to} variants={itemVariants}>
            <Link
              to={to}
              onClick={onClose}
              className="font-unbounded font-black text-5xl text-white uppercase tracking-tight hover:opacity-50 transition-opacity duration-200"
            >
              {label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </motion.div>
  )
}
