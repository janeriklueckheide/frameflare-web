import { motion } from 'framer-motion'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-off-white/10 bg-graphite/60 px-6 py-5 backdrop-blur-md sm:px-12 lg:px-24"
    >
      <a
        href="#hero"
        className="font-display text-sm uppercase tracking-[0.2em] text-off-white sm:text-base"
      >
        Frame Flare Works
      </a>

      <a
        href="#contact"
        className="font-sans text-xs uppercase tracking-[0.2em] text-off-white/80 transition-colors duration-300 hover:text-off-white sm:text-sm"
      >
        Contact
      </a>
    </motion.header>
  )
}

export default Header
