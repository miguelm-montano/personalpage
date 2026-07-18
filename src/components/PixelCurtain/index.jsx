import { useEffect, useRef } from 'react'

const CELL_SIZE = 48 // px — adjust for denser/coarser grid

/**
 * Full-screen canvas overlay that fills with white pixels in a random order,
 * then calls `onComplete` once the last pixel is painted.
 *
 * Implemented on <canvas> (not DOM divs) for smooth performance regardless
 * of viewport size.
 */
export default function PixelCurtain({ onComplete, durationMs = 650, color = '#ffffff' }) {
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

    const cols = Math.ceil(w / CELL_SIZE)
    const rows = Math.ceil(h / CELL_SIZE)
    const total = cols * rows

    // Build cell coordinates then shuffle (Fisher-Yates)
    const cells = Array.from({ length: total }, (_, i) => ({
      x: (i % cols) * CELL_SIZE,
      y: Math.floor(i / cols) * CELL_SIZE,
    }))

    for (let i = cells.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[cells[i], cells[j]] = [cells[j], cells[i]]
    }

    let rafId
    let lastFilled = 0
    const start = performance.now()

    function frame(now) {
      const progress = Math.min((now - start) / durationMs, 1)
      const filled = Math.floor(progress * total)

      // Only paint newly revealed cells each frame
      for (let i = lastFilled; i < filled; i++) {
        ctx.fillRect(cells[i].x, cells[i].y, CELL_SIZE, CELL_SIZE)
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
  }, [onComplete, durationMs, color])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
    />
  )
}
