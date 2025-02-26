'use client'
import { GoogleGeminiEffect } from '@/components/ui/card-animation/GoogleGeminiEffect'
import { useScroll, useTransform } from 'motion/react'

import React from 'react'

const Templates = () => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2])
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2])
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2])
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2])
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2])
  return (
    <div
      className='h-[400vh] bg-dark w-full dark:border dark:border-white/[0.1] relative overflow-clip pt-[100px]'
      ref={ref}
    >
      <GoogleGeminiEffect
        description='Aceternity UI – Modern components with smooth animations, elevating the user experience.'
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  )
}

export default Templates
