import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import DotMatrixLoader from './DotMatrixLoader.jsx'
import HeroBlueprintMarks from './HeroBlueprintMarks.jsx'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]

// Below this playback rate the video is paused outright rather than played
// at a near-zero rate (browsers handle very small positive rates poorly).
const MIN_PLAYBACK_RATE = 0.05

// Playback speed multiplier reached once fully scrolled past the hero.
const MAX_PLAYBACK_RATE = 3.5

// The ramp-up finishes once the page has scrolled this fraction of the
// hero's height — i.e. roughly halfway through the section, not only once
// it's fully out of view.
const SCRUB_STOP_RATIO = 0.5

// How quickly the smoothed scrub value chases the raw scroll target each
// frame. Lower = silkier but laggier, higher = snappier but choppier.
const SMOOTHING = 0.12

// Ease-in-expo: barely anything happens for the first ~2/3 of progress,
// then it rockets up toward the end. Applied to the speed-up, this reads
// as "scrolling further/faster makes the video race ahead" rather than a
// linear ramp — the exponential feel that was requested.
function easeInExpo(t) {
  return t <= 0 ? 0 : 2 ** (10 * (t - 1))
}

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

  // Scroll-scrub the showreel: it plays at normal speed at the top of the
  // page, and the further it's scrolled up out of view, the faster it
  // plays — easing in exponentially, so the first two-thirds of the scroll
  // barely changes the speed and it then races ahead toward the end. A
  // smoothed value chases the raw scroll position every animation frame
  // (rather than jumping straight to it) for a silky transition. Scrolling
  // back down reverses it back to normal speed.
  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    let rafId
    let smoothProgress = 0

    const tick = () => {
      const distance = (section.offsetHeight || window.innerHeight) * SCRUB_STOP_RATIO
      const targetProgress = Math.min(Math.max(window.scrollY / distance, 0), 1)

      smoothProgress += (targetProgress - smoothProgress) * SMOOTHING
      if (Math.abs(targetProgress - smoothProgress) < 0.0005) {
        smoothProgress = targetProgress
      }

      const rate = 1 + (MAX_PLAYBACK_RATE - 1) * easeInExpo(smoothProgress)

      if (rate <= MIN_PLAYBACK_RATE) {
        if (!video.paused) video.pause()
      } else {
        video.playbackRate = rate
        if (video.paused) video.play().catch(() => {})
      }

      rafId = window.requestAnimationFrame(tick)
    }

    rafId = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(rafId)
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
        src="/content/showreel/0FF_SHOWREEL_v2_grainy_horizontal.mp4"
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
          className="max-w-3xl font-sans text-sm leading-relaxed text-off-white/80 sm:text-lg"
        >
          I transform existing footage into high-retention social content and cinematic brand assets.
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
