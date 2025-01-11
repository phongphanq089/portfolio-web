/* eslint-disable @next/next/no-img-element */
'use client'
import React, { MutableRefObject, useRef } from 'react'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'

const TextParalaxScroll = () => {
  const container: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })
  return (
    <div className='overflow-hidden pb-4 '>
      <div ref={container}>
        <Slide direction={'left'} left={'-40%'} progress={scrollYProgress} />
        <Slide direction={'right'} left={'-25%'} progress={scrollYProgress} />
      </div>
    </div>
  )
}
const Slide = (props: {
  direction: string
  left: string
  progress: MotionValue<number>
}) => {
  const direction = props.direction == 'left' ? -1 : 1
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  )
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className='relative flex whitespace-nowrap '
    >
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
    </motion.div>
  )
}

const Phrase = () => {
  return (
    <div className={'px-2 lg:px-5 flex gap-3 lg:gap-2 items-center'}>
      <p className='text-md lg:text-[4vw] font-semibold leading-none text-white'>
        FRONTEND DEVELOPER
      </p>
      <div className='w-[100px] lg:w-[200px] h-[3px] bg-white'></div>
    </div>
  )
}
export default TextParalaxScroll
