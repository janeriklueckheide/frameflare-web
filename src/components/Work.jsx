import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]

// Dummy project data. `video` reuses the studio showreel as a stand-in until
// dedicated per-project clips are delivered. `scrub` offsets each timeline
// thumbnail to a different timestamp of the same source so the clips read
// as distinct stills rather than identical thumbnails.
const PROJECTS = [
  {
    id: 'hero-case',
    title: 'The Hero Case',
    type: 'Editorial & Brand',
    date: '09/26',
    video: '/content/showreel/0FF_SHOWREEL_v2_grainy_horizontal.mp4',
    scrub: 1.5,
  },
  {
    id: 'isar_spec',
    title: 'MISSION: Upward ',
    type: 'Spec Ad',
    date: '09/26',
    video: '/content/showreel/ISAR_Aeropsace_Spec_horizontal_lowqual.mp4',
    scrub: 1.5,
  },
  {
    id: 'structure-in-motion',
    title: 'Structure in Motion',
    type: 'Motion Architecture',
    date: '05/26',
    video: '/content/showreel/0FF_SHOWREEL_v2_grainy_horizontal.mp4',
    scrub: 9,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function TimelineClip({ project, index, isActive, onSelect }) {
  const videoRef = useRef(null)

  const handleLoadedMetadata = () => {
    const video = videoRef.current
    if (!video || !Number.isFinite(video.duration)) return
    video.currentTime = Math.min(project.scrub, Math.max(video.duration - 0.1, 0))
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      aria-current={isActive}
      className={`group relative w-[clamp(9rem,16vw,13rem)] flex-shrink-0 snap-start border-t-2 pt-3 text-left transition-colors duration-300 ${
        isActive ? 'border-off-white' : 'border-off-white/15 hover:border-off-white/50'
      }`}
    >
      <span className="mb-2 block font-sans text-[0.65rem] uppercase tracking-[0.25em] text-off-white/40">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative aspect-video w-full overflow-hidden bg-graphite-secondary">
        <video
          ref={videoRef}
          src={project.video}
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          onLoadedMetadata={handleLoadedMetadata}
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-80'
          }`}
        />
      </div>

      <span
        className={`mt-2 block truncate font-sans text-xs uppercase tracking-tight transition-colors duration-300 ${
          isActive ? 'text-off-white' : 'text-off-white/50 group-hover:text-off-white/80'
        }`}
      >
        {project.title}
      </span>
    </button>
  )
}

function Work() {
  const [activeIndex, setActiveIndex] = useState(0)
  const previewRef = useRef(null)
  const trackRef = useRef(null)
  const active = PROJECTS[activeIndex]

  useEffect(() => {
    const video = previewRef.current
    if (!video) return
    video.currentTime = 0
    video.play().catch(() => {})
  }, [activeIndex])

  const handleEnded = () => {
    setActiveIndex((current) => (current + 1) % PROJECTS.length)
  }

  const handleWheel = (event) => {
    const track = trackRef.current
    if (!track) return
    // Let a mostly-vertical wheel gesture drive the horizontal timeline
    // instead of the page, so the strip behaves like an editing timeline.
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
    event.preventDefault()
    track.scrollLeft += event.deltaY
  }

  return (
    <section id="work" className="w-full bg-graphite px-6 py-32 sm:px-12 lg:px-24">
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
        variants={fadeUp}
        className="mb-16 font-sans text-xs uppercase tracking-[0.2em] text-off-white/50"
      >
        Selected Work
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        variants={fadeUp}
        className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12"
      >
        {/* Metadata panel, styled like an edit project readout */}
        <div className="flex flex-col justify-between border-t border-off-white/15 pt-6 lg:col-span-4 lg:border-t-0 lg:border-r lg:border-off-white/15 lg:pr-12 lg:pt-0">
          <div className="space-y-8">
            <div>
              <span className="block font-sans text-[0.65rem] uppercase tracking-[0.25em] text-off-white/40">
                Project
              </span>
              <span className="mt-2 block font-sans text-2xl uppercase tracking-tight text-off-white sm:text-3xl">
                {active.title}
              </span>
            </div>

            <div className="flex gap-12">
              <div>
                <span className="block font-sans text-[0.65rem] uppercase tracking-[0.25em] text-off-white/40">
                  Date
                </span>
                <span className="mt-2 block font-sans text-sm text-off-white/80">
                  {active.date}
                </span>
              </div>
              <div>
                <span className="block font-sans text-[0.65rem] uppercase tracking-[0.25em] text-off-white/40">
                  Type
                </span>
                <span className="mt-2 block font-sans text-sm text-off-white/80">
                  {active.type}
                </span>
              </div>
            </div>
          </div>

          <span className="mt-12 block font-sans text-xs tracking-[0.2em] text-off-white/30 lg:mt-0">
            {String(activeIndex + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
          </span>
        </div>

        {/* Preview tile: medium-size, with editing-software-style overlays */}
        <div className="lg:col-span-8">
          <div className="relative aspect-video w-full overflow-hidden bg-graphite-secondary">
            <video
              ref={previewRef}
              key={active.id}
              src={active.video}
              muted
              playsInline
              autoPlay
              preload="auto"
              aria-hidden="true"
              onEnded={handleEnded}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="noise-overlay" />
            <div className="pointer-events-none absolute inset-0 border border-off-white/20" />

            <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
              <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-off-white/70">
                Rec
              </span>
            </div>

            <div className="pointer-events-none absolute bottom-4 left-4 font-sans text-[0.65rem] tracking-[0.1em] text-off-white/60">
              00:00:00:00 &middot; {active.type}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Horizontal, scrollable editing timeline */}
      <div className="mt-16 lg:mt-20">
        <div
          ref={trackRef}
          onWheel={handleWheel}
          className="timeline-track flex snap-x gap-6 overflow-x-auto pb-4"
        >
          {PROJECTS.map((project, index) => (
            <TimelineClip
              key={project.id}
              project={project}
              index={index}
              isActive={index === activeIndex}
              onSelect={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
