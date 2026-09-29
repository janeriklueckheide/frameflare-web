import { motion } from 'framer-motion'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const FOOTER_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/jel_editing/',
    external: true,
  },
  { label: 'Imprint', href: '/impressum/' },
  { label: 'Privacy Policy', href: '/datenschutz/' },
]

function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen w-full flex-col justify-between bg-graphite-secondary px-6 py-12 sm:px-12 lg:px-24"
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          variants={fadeUp}
          className="flex items-center gap-2"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
          <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-off-white/50">
            Open for new projects
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.1 }}
          variants={fadeUp}
          className="relative w-full max-w-3xl border border-off-white/15 px-6 py-10 sm:px-12 sm:py-14"
        >
          {/* corner marks, echoing the editing-software framing motif */}
          <span className="absolute -left-px -top-px h-4 w-4 border-l border-t border-off-white/60" />
          <span className="absolute -right-px -top-px h-4 w-4 border-r border-t border-off-white/60" />
          <span className="absolute -bottom-px -left-px h-4 w-4 border-b border-l border-off-white/60" />
          <span className="absolute -bottom-px -right-px h-4 w-4 border-b border-r border-off-white/60" />

          <span className="mb-4 block text-center font-sans text-[0.65rem] uppercase tracking-[0.25em] text-off-white/40">
            Contact
          </span>

          <a
            href="mailto:jan-erik.lueckheide@frameflare.works"
            className="group relative mx-auto block max-w-full w-fit text-center font-sans font-medium text-off-white"
            style={{ fontSize: 'clamp(0.875rem, 2.8vw, 1.75rem)' }}
          >
            jan-erik.lueckheide@frameflare.works
            <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-off-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </a>
        </motion.div>
      </div>

      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        variants={fadeUp}
        className="flex flex-col gap-6 border-t border-off-white/10 pt-8 font-sans text-xs uppercase tracking-[0.2em] text-off-white/60 sm:flex-row sm:items-center sm:justify-between"
      >
        <span>FRAME FLARE WORKS &copy; 2026</span>
        <nav className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="transition-colors duration-300 hover:text-off-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.footer>
    </section>
  )
}

export default Contact
