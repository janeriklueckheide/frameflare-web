// Hand-authored geometric line-art, in the spirit of shapes.gallery's
// minimal SVG motifs — rendered as inline SVG (no external asset request)
// so it fits the "architectural blueprint" brand vibe: crop marks, a
// registration ring, and a corner frame, all at very low opacity over the
// showreel.
function HeroBlueprintMarks() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[6] h-full w-full text-off-white/25"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* corner crop marks */}
      <path
        d="M4 10 V4 H10"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.25"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M90 4 H96 V10"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.25"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M4 90 V96 H10"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.25"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M90 96 H96 V90"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.25"
        vectorEffect="non-scaling-stroke"
      />

      {/* registration ring, top-right */}
      <circle
        cx="88"
        cy="16"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M88 10 V22 M82 16 H94"
        stroke="currentColor"
        strokeWidth="0.15"
        vectorEffect="non-scaling-stroke"
      />

      {/* thin vertical rule, left third */}
      <line
        x1="33.333"
        y1="0"
        x2="33.333"
        y2="100"
        stroke="currentColor"
        strokeWidth="0.1"
        vectorEffect="non-scaling-stroke"
        opacity="0.5"
      />
    </svg>
  )
}

export default HeroBlueprintMarks
