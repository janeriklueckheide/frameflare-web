import { motion } from 'framer-motion'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]

const SERVICES = [
  {
    index: '01',
    label: 'Kinetic Social',
    description:
      'Retention-engineered edits for Reels and TikTok. Precise pacing and focused sound design keep viewers watching.',
  },
  {
    index: '02',
    label: 'Editorial & Brand',
    description:
      'Cinematic post-production for brand films and commercials. High-end storytelling, with not one frame too many.',
  },
  {
    index: '03',
    label: 'The Upgrade',
    description:
      "Already have footage, but it isn't performing? I re-edit your raw footage into content that stops the scroll.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative w-full bg-graphite px-6 py-32 sm:px-12 lg:px-24"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          variants={fadeUp}
          className="font-sans text-xs uppercase tracking-[0.2em] text-off-white/50 lg:col-span-3"
        >
          Independent Edit & Motion Studio
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.1 }}
          variants={fadeUp}
          className="font-sans text-2xl leading-snug text-off-white sm:text-3xl lg:col-span-8 lg:col-start-5 lg:text-4xl"
        >
          Smooth isn't always better. Sometimes an edit needs friction to stay
          in the mind. I combine technical craft with visual dramaturgy. No
          templates. Not one frame too many.
        </motion.p>
      </div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.15 }}
        variants={fadeUp}
        className="mt-10 font-sans text-sm leading-relaxed text-off-white/60 lg:ml-[41.666667%] lg:max-w-2xl"
      >
        FRAME FLARE WORKS is my independent edit &amp; motion studio. I work
        directly on every project, from the first cut to the final frame.
      </motion.p>

      <div className="mt-24 lg:mt-32">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: i * 0.1 }}
            variants={fadeUp}
            className="group flex flex-col gap-3 border-b border-off-white/20 py-6 transition-colors duration-500 hover:border-off-white/70 sm:py-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12"
          >
            <span className="font-sans text-lg text-off-white transition-colors duration-500 group-hover:text-off-white sm:text-2xl lg:text-3xl">
              {service.index} / {service.label}
            </span>
            <p className="max-w-xl font-sans text-sm leading-relaxed text-off-white/60 sm:text-base lg:text-right">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Manifesto
