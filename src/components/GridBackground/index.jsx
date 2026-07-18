import { useEffect, useRef } from 'react'

export default function GridBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let width  = (canvas.width  = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let rafId

    const mouse      = { x: -9999, y: -9999 }
    const squareSize = 80
    const grid       = []

    function initGrid() {
      grid.length = 0
      for (let x = 0; x < width; x += squareSize) {
        for (let y = 0; y < height; y += squareSize) {
          grid.push({ x, y, alpha: 0, fading: false, lastTouched: 0 })
        }
      }
    }

    function getCellAt(x, y) {
      return grid.find(
        (cell) =>
          x >= cell.x && x < cell.x + squareSize &&
          y >= cell.y && y < cell.y + squareSize
      )
    }

    function handleResize() {
      width  = canvas.width  = window.innerWidth
      height = canvas.height = window.innerHeight
      initGrid()
    }

    function handleMouseMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
      const cell = getCellAt(mouse.x, mouse.y)
      if (cell && cell.alpha === 0) {
        cell.alpha       = 1
        cell.lastTouched = Date.now()
        cell.fading      = false
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      const now = Date.now()

      for (let i = 0; i < grid.length; i++) {
        const cell = grid[i]

        if (cell.alpha > 0 && !cell.fading && now - cell.lastTouched > 500) {
          cell.fading = true
        }

        if (cell.fading) {
          cell.alpha -= 0.02
          if (cell.alpha <= 0) {
            cell.alpha  = 0
            cell.fading = false
          }
        }

        if (cell.alpha > 0) {
          const cx = cell.x + squareSize / 2
          const cy = cell.y + squareSize / 2

          const gradient = ctx.createRadialGradient(cx, cy, 5, cx, cy, squareSize)
          gradient.addColorStop(0, `rgba(0, 0, 0, ${cell.alpha})`)
          gradient.addColorStop(1, `rgba(0, 0, 0, 0)`)

          ctx.strokeStyle = gradient
          ctx.lineWidth   = 1.3
          ctx.strokeRect(cell.x + 0.5, cell.y + 0.5, squareSize - 1, squareSize - 1)
        }
      }

      rafId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize',    handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    initGrid()
    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize',    handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
