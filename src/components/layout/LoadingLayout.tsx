'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

let interval: NodeJS.Timeout
const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 5, 100))
      }, 100)
    } else {
      clearInterval(interval)
      setTimeout(onComplete, 500)
    }

    return () => clearInterval(interval)
  }, [progress, onComplete])

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black text-white z-[999]'>
      <motion.div
        key='loading'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className='text-[7vw] font-bold top-5 right-5 absolute'
      >
        {progress}%
      </motion.div>

      <div className='ui-abstergo'>
        <div className='abstergo-loader'>
          <div />
          <div />
          <div />
        </div>
        <div className='ui-text'>
          Buy Phong Phan
          <div className='ui-dot' />
          <div className='ui-dot' />
          <div className='ui-dot' />
        </div>
      </div>
    </div>
  )
}

const LoadingLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isLoading && (
        <AnimatePresence>
          <LoadingScreen onComplete={handleLoadingComplete} />
        </AnimatePresence>
      )}
      {children}
    </motion.div>
  )
}

export default LoadingLayout
