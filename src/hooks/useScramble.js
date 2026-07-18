import { useState, useEffect, useRef } from 'react'

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`░▒▓█▀▄■□▪▫●○◆◇◈◊※†‡'

/**
 * Cycles through an array of words with a scramble-reveal animation.
 * Each character is replaced with a random glyph until resolved left-to-right.
 *
 * @param {string[]} words - Words to cycle through
 * @param {object}   opts
 * @param {number}   opts.frames       - rAF frames per word reveal (default 50)
 * @param {number}   opts.pauseMs      - ms to hold a resolved word before cycling (default 1800)
 * @returns {string} The current displayed string
 */
export function useScramble(words, { frames = 50, pauseMs = 1800 } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)
  const rafRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    const word = words[index]
    let frame = 0

    function tick() {
      frame++
      const resolved = Math.floor((frame / frames) * word.length)

      let result = ''
      for (let i = 0; i < word.length; i++) {
        result +=
          i < resolved
            ? word[i]
            : CHARS[Math.floor(Math.random() * CHARS.length)]
      }
      setDisplayed(result)

      if (frame < frames) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setDisplayed(word)
        timerRef.current = setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length)
        }, pauseMs)
      }
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      clearTimeout(timerRef.current)
    }
  }, [index, words, frames, pauseMs])

  return displayed
}
