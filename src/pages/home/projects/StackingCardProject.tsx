/* eslint-disable @next/next/no-img-element */
// thanks to oliver: https://www.youtube.com/@olivierlarose1
'use client'
import { ReactLenis } from 'lenis/react'
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion'
import { useRef } from 'react'
import ScratchToReveal from '@/components/ui/ScratchToReveal'
import TrueFocus from '@/components/ui/TrueFocus'
import { SanityDocument } from 'next-sanity'
import { urlFor } from '@/sanity/config'

export default function StackingCardProject({
  lisProject,
}: {
  lisProject: SanityDocument
}): JSX.Element {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })
  return (
    <ReactLenis root>
      <main className='bg-dark' ref={container}>
        <div className='container-3xl'>
          <div className='pt-20 pb-20 px-8 !text-[6vw]'>
            <TrueFocus
              sentence='SELECTTED WORKS'
              manualMode={false}
              blurAmount={5}
              borderColor='#a3e635'
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>
          <section className='text-white w-full bg-dark  '>
            {lisProject.map((project: SanityDocument, i: number) => {
              const targetScale = 1 - (lisProject.length - i) * 0.05
              return (
                <Card
                  key={`p_${i}`}
                  i={i}
                  url={project.urlPage}
                  src={urlFor(project.mainImage).url()}
                  title={project?.title}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              )
            })}
          </section>
        </div>
      </main>
    </ReactLenis>
  )
}
interface CardProps {
  i: number
  title: string
  src: string
  url: string
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}
export const Card: React.FC<CardProps> = ({
  i,
  title,
  src,
  url,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null)

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <a
      href={url}
      ref={container}
      target='_blank'
      className='sm:h-screen flex items-center justify-center sticky top-0 w-full pb-6'
    >
      <motion.div
        style={{
          top: `calc(-2vh + ${i * 10}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[500px] sm:h-[95%] w-full rounded-md p-0 origin-top  overflow-hidden`}
      >
        <ScratchToReveal
          minScratchPercentage={70}
          cursorBackgroundColor='#a3e635'
          customCursorText='VIEW'
          className='h-full w-full'
        >
          <span className='absolute bottom-4 right-4 font-bold text-[10vw]'>{`0${i + 1}`}</span>

          <div className='absolute top-8 left-4 sm:left-8 flex flex-col items-start gap-4 backdrop-blur-xl bg-gray/80 z-10 p-8 rounded-md'>
            <h3 className='text-md md:text-lg lg:text-[3vw] font-bold max-w-[350px]  sm:max-w-[500px] leading-none'>
              {title}
            </h3>
            <div className='flex items-center gap-2 flex-wrap'>
              <div className='bg-rgba-1 p-3 text-xs sm:text-sm rounded-md font-bold'>
                DEVELOPMENT
              </div>
              <div className='bg-rgba-1 p-3 text-xs sm:text-sm rounded-md font-bold'>
                2024
              </div>
              <div className='bg-rgba-1 p-3 text-xs sm:text-sm rounded-md font-bold'>
                DESIGN
              </div>
            </div>
          </div>

          <motion.div className={`w-full h-full`}>
            <img src={src} alt='image' className='object-cover h-full w-full' />
          </motion.div>
        </ScratchToReveal>
      </motion.div>
    </a>
  )
}
