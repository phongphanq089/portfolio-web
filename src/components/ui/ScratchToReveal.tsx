import { cn } from '@/lib/utils'
import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimation } from 'motion/react'

interface ScratchToRevealProps {
  children: React.ReactNode
  width?: number
  height?: number
  minScratchPercentage?: number
  className?: string
  onComplete?: () => void
  gradientColors?: [string, string, string]
  customCursorText?: string
  cursorBackgroundColor?: string
  cursorFontFamily?: string
}

const ScratchToReveal: React.FC<ScratchToRevealProps> = ({
  width,
  height,
  minScratchPercentage = 50,
  onComplete,
  children,
  className,
  gradientColors = ['#A97CF8', '#F38CB8', '#FDCC92'],
  customCursorText = 'View',
  cursorBackgroundColor = 'rgba(255, 255, 255, 0.7)',
  cursorFontFamily = 'Arial',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isScratching, setIsScratching] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const controls = useAnimation()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx) {
      ctx.fillStyle = '#ccc'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      )
      gradient.addColorStop(0, gradientColors[0])
      gradient.addColorStop(0.5, gradientColors[1])
      gradient.addColorStop(1, gradientColors[2])
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
  }, [gradientColors])

  const getCursorSvg = () => {
    return `data:image/svg+xml;base64,${btoa(
      `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'>
        <circle cx='32' cy='32' r='30' fill='${cursorBackgroundColor}'/>
        <text x='32' y='37' text-anchor='middle' font-size='15' font-family='${cursorFontFamily}' fill='#000' font-weight="bold">
          ${customCursorText}
        </text>
      </svg>`
    )}`
  }

  const handleMouseDown = () => setIsScratching(true)
  const handleTouchStart = () => setIsScratching(true)

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx) {
      const rect = canvas.getBoundingClientRect()
      const x = clientX - rect.left + 16
      const y = clientY - rect.top + 16
      ctx.globalCompositeOperation = 'destination-out'
      ctx.beginPath()
      ctx.arc(x, y, 30, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  const startAnimation = async () => {
    await controls.start({
      scale: [1, 1.5, 1],
      rotate: [0, 10, -10, 10, -10, 0],
      transition: { duration: 0.5 },
    })

    if (onComplete) {
      onComplete()
    }
  }

  const checkCompletion = () => {
    if (isComplete) return

    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const pixels = imageData.data
      const totalPixels = pixels.length / 4
      let clearPixels = 0

      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) clearPixels++
      }

      const percentage = (clearPixels / totalPixels) * 100

      if (percentage >= minScratchPercentage) {
        setIsComplete(true)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        startAnimation()
      }
    }
  }

  return (
    <motion.div
      className={cn('relative select-none ', className)}
      style={{
        width,
        height,
        cursor: `url("${getCursorSvg()}") 32 32, auto`,
      }}
      animate={controls}
    >
      {children}
    </motion.div>
  )
}

export default ScratchToReveal
