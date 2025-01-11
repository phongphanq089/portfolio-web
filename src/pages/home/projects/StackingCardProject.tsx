/* eslint-disable @next/next/no-img-element */
// thanks to oliver: https://www.youtube.com/@olivierlarose1
'use client'
import { ReactLenis } from 'lenis/react'
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion'
import { useRef } from 'react'
import HeadingSection from '@/components/shared/HeadingSection'
import ScratchToReveal from '@/components/ui/ScratchToReveal'
const projects = [
  {
    title: 'Matthias Leidinger',
    description:
      'Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.',
    src: 'https://cdn.prod.website-files.com/670974d50e0651ca64eec305/670c0c6666108a00ac42eb61_jose-p-ortiz--w0jStVTjc4-unsplash-min-p-2000.jpg',
    link: 'https://cdn.prod.website-files.com/670974d50e0651ca64eec305/670c0c6666108a00ac42eb61_jose-p-ortiz--w0jStVTjc4-unsplash-min-p-2000.jpg',
    color: '#5196fd',
  },
  {
    title: 'Zissou',
    description:
      'Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.',
    src: 'https://cdn.prod.website-files.com/670974d50e0651ca64eec305/670c0c737b2d0225cce39af2_jose-p-ortiz-fhoCfSRKV3w-unsplash-min-p-2000.jpg',
    link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
    color: '#13006c',
  },
  {
    title: 'Mathias Svold and Ulrik Hasemann',
    description:
      'The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.',
    src: 'https://cdn.prod.website-files.com/670974d50e0651ca64eec305/670c0c7f9383d712147273a7_jose-p-ortiz-_rtOYVggXk0-unsplash-min-p-2000.jpg',
    link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
    color: '#ed649e',
  },
  {
    title: 'Mark Rammers',
    description:
      'Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.',
    src: 'https://cdn.prod.website-files.com/670974d50e0651ca64eec305/670c0c899383d71214727960_jose-p-ortiz-empgFabDoHU-unsplash-min-p-2000.jpg',
    link: 'https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop',
    color: '#fd521a',
  },
]
export default function StackingCardProject(): JSX.Element {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })
  return (
    <ReactLenis root>
      <main className='bg-dark' ref={container}>
        <div className='container-3xl'>
          <HeadingSection
            text1='SELECTTED'
            text2='WORKS.'
            className='pb-9 sm:pb-[60px]'
          />
          <section className='text-white w-full bg-dark  '>
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05
              return (
                <Card
                  key={`p_${i}`}
                  i={i}
                  url={project?.link}
                  src={project?.src}
                  title={project?.title}
                  color={project?.color}
                  description={project?.description}
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
  description: string
  src: string
  url: string
  color: string
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}
export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null)

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      ref={container}
      className='sm:h-screen flex items-center justify-center sticky top-0 w-full pb-6'
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-2vh + ${i * 2}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[500px] sm:h-[95%] w-full rounded-md p-0 origin-top [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border overflow-hidden`}
      >
        <ScratchToReveal
          minScratchPercentage={70}
          cursorBackgroundColor='#a3e635'
          customCursorText='VIEW'
        >
          <span className='absolute bottom-4 right-4 font-bold text-[10vw]'>{`0${i + 1}`}</span>
          <div className='absolute top-8 left-4 sm:left-8 flex flex-col items-start gap-4'>
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
    </div>
  )
}
