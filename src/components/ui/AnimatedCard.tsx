'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Variants } from 'framer-motion'

const AnimatedCard = ({
  children,
  delay,
  variants,
  className,
}: {
  children: React.ReactNode
  delay?: number
  variants?: Variants
  className?: string
}) => {
  const ref = useRef(null)

  const inviews = useInView(ref, { amount: 0.5, once: true })

  return (
    <motion.div
      className={className}
      ref={ref}
      animate={inviews ? 'visible' : 'hidden'}
      variants={
        variants
          ? variants
          : {
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }
      }
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard
