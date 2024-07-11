'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface PropTextType {
  text: string
  className?: string
}
const DescripTionMotion = ({ text, className }: PropTextType) => {
  return (
    <motion.p
      className={`text-[18px] md:text-[18px] 2xl:text-sm font-normal text-bg-dark mb-3 ${className}`}
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }}
    >
      {text}
    </motion.p>
  )
}

export default DescripTionMotion
