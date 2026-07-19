import { motion } from 'framer-motion'

/**
 * Full-screen black curtain that slides in from right to left.
 * Rendered via AnimatePresence in Home — mount = open, unmount = close.
 */
export default function MenuPanel() {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-black"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    />
  )
}
