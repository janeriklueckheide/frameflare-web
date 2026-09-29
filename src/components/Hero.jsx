import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import DotMatrixLoader from './DotMatrixLoader.jsx'
import HeroBlueprintMarks from './HeroBlueprintMarks.jsx'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]

// Below this playback rate the video is paused outright rather than played
// at a near-zero rate (browsers handle very small positive rates poorly).
const MIN_PLAYBACK_RATE = 0.05

function Hero() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const [isVideoReady, setIsVideoReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    // Belt-and-suspenders: some browsers ignore the JSX `muted` attribute on
    // first paint and refuse autoplay unless muted is also set imperatively.
    video.muted = true
    video.play().catch(() => {})
  }, [])

  // Scroll-scrub the showreel: it plays at full speed at the top of the
  // page, gradually slows as the hero scrolls out of view, and comes to a
  // full stop (still frame) once the viewport has scrolled a full screen
  // height. Scrolling back up smoothly speeds it back up again.
  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    let ticking = false

    const update = () => {
      ticking = false
      const distance = section.offsetHeight || window.innerHeight
      const progress = Math.min(Math.max(window.scrollY / distance, 0), 1)
      const rate = 1 - progress

      if (rate <= MIN_PLAYBACK_RATE) {
        if (!video.paused) video.pause()
      } else {
        video.playbackRate = rate
        if (video.paused) video.play().catch(() => {})
      }
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-graphite"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/content/showreel/FF_SHOWREEL_v2_horizontal.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
        onLoadedData={() => setIsVideoReady(true)}
      />

      <HeroBlueprintMarks />
      <div className="absolute inset-0 z-[5] bg-black/40" />
      <div className="noise-overlay" />

      <AnimatePresence>
        {!isVideoReady && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          >
            <DotMatrixLoader label="Loading showreel" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.2 }}
          className="font-display font-black text-[13vw] uppercase leading-[0.9] tracking-tight text-off-white sm:text-[9vw] lg:text-[7rem]"
        >
          CUT WITH INTENT.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.5 }}
          className="font-sans text-xs uppercase tracking-[0.2em] text-off-white/70 sm:text-sm"
        >
          FRAMEFLARE WORKS | Edit &middot; Pace &middot; Motion
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.8 }}
          className="mt-4 inline-block rounded-none border border-off-white bg-transparent px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] text-off-white transition-colors duration-300 hover:bg-off-white hover:text-graphite"
        >
          START PROJECT
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
