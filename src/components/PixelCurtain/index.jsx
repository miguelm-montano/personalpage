import { useEffect, useRef } from 'react'

/**
 * Full-screen canvas curtain that fills with pixels and calls `onComplete`
 * when the last pixel is painted.
 *
 * @param {function} onComplete    - Called once the curtain is fully drawn
 * @param {number}   duration      - Total animation duration in seconds (default 0.50)
 * @param {number}   size          - Cell size in px (default 100)
 * @param {number}   angle         - Fill direction in degrees, 0° = right, 90° = down (default 90)
 * @param {number}   noise         - 0 = fully directional, 1 = fully random (default 0.40)
 * @param {string}   directionMode - 'normal' fills along the angle, 'reverse' fills against it
 * @param {string}   color         - Fill color (default '#ffffff')
 */
export default function PixelCurtain({
  onComplete,
  duration = 0.50,
  size = 100,
  angle = 90,
  noise = 0.40,
  directionMode = 'normal',
  color = '#ffffff',
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const w = window.innerWidth
    const h = window.innerHeight
    canvas.width = w
    canvas.height = h

    const ctx = canvas.getContext('2d')
    ctx.fillStyle = color

    const cols = Math.ceil(w / size)
    const rows = Math.ceil(h / size)

    // Direction vector from angle
    const rad = (angle * Math.PI) / 180
    const dx = Math.cos(rad)
    const dy = Math.sin(rad)

    // Build cells with a combined directional + noise score
    const cells = Array.from({ length: cols * rows }, (_, i) => {
      const col = i % cols
      const row = Math.floor(i / cols)

      // Normalized center of each cell [0, 1]
      const nx = (col + 0.5) / cols
      const ny = (row + 0.5) / rows

      // Project cell center onto the direction vector
      const dirScore = nx * dx + ny * dy

      const score = (1 - noise) * dirScore + noise * Math.random()

      return { x: col * size, y: row * size, score }
    })

    cells.sort((a, b) =>
      directionMode === 'reverse'
        ? b.score - a.score
        : a.score - b.score
    )

    let rafId
    let lastFilled = 0
    const durationMs = duration * 1000
    const start = performance.now()

    function frame(now) {
      const progress = Math.min((now - start) / durationMs, 1)
      const filled = Math.floor(progress * cells.length)

      for (let i = lastFilled; i < filled; i++) {
        ctx.fillRect(cells[i].x, cells[i].y, size, size)
      }
      lastFilled = filled

      if (progress < 1) {
        rafId = requestAnimationFrame(frame)
      } else {
        onComplete?.()
      }
    }

    rafId = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(rafId)
  }, [onComplete, duration, size, angle, noise, directionMode, color])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
    />
  )
}
