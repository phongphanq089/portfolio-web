'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TypeProps {
  text: string
  speed: number
  className: string
}

const TypingMachine = ({ text, speed = 70, className }: TypeProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeoutId)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed])

  return (
    <div className='flex items-center justify-center'>
      <motion.div
        className={`font-mono text-sm text-gray-800 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className='font-semiBold'
          >
            {char}
          </motion.span>
        ))}
        {!isComplete && (
          <motion.span
            className='animate-blink'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            |
          </motion.span>
        )}
      </motion.div>
    </div>
  )
}

export default TypingMachine
