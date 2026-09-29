import { motion } from 'framer-motion'

// Self-built "dot matrix" preloader, in the spirit of dotmatrix.zzzshawn.cloud
// (rendered locally with CSS/SVG only — no runtime dependency on a third
// party site — so it never breaks the build and ships with zero extra
// network requests).
const COLUMNS = 9
const ROWS = 6
const DOTS = Array.from({ length: COLUMNS * ROWS }, (_, i) => i)

function DotMatrixLoader({ label = 'Loading' }) {
  return (
    <div
      className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-6 bg-graphite"
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div
        className="grid gap-2 sm:gap-3"
        style={{ gridTemplateColumns: `repeat(${COLUMNS}, minmax(0, 1fr))` }}
      >
        {DOTS.map((i) => {
          const col = i % COLUMNS
          const row = Math.floor(i / COLUMNS)
          const delay = (col + row) * 0.06
          return (
            <motion.span
              key={i}
              className="block h-1.5 w-1.5 rounded-full bg-off-white sm:h-2 sm:w-2"
              initial={{ opacity: 0.15, scale: 0.6 }}
              animate={{ opacity: [0.15, 1, 0.15], scale: [0.6, 1, 0.6] }}
              transition={{
                duration: 1.4,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )
        })}
      </div>

      <span className="font-sans text-xs uppercase tracking-[0.3em] text-off-white/50">
        {label}
      </span>
    </div>
  )
}

export default DotMatrixLoader
