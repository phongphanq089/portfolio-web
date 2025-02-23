'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
const ScrollTop = () => {
  const [isBottom, setIsBottom] = useState(false)

  useEffect(() => {
    const handleSroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      setIsBottom(scrollTop + clientHeight >= scrollHeight - 10)
    }

    window.addEventListener('scroll', handleSroll)

    return () => {
      window.removeEventListener('scroll', handleSroll)
    }
  }, [])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <motion.span
        onClick={scrollToTop}
        className='scroll-top fixed bottom-11 right-11'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isBottom ? 1 : 0, scale: isBottom ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M12 5l0 14' />
          <path d='M16 9l-4 -4' />
          <path d='M8 9l4 -4' />
        </svg>
      </motion.span>
    </>
  )
}

export default ScrollTop
