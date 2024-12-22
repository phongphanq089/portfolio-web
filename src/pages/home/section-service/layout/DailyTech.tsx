/* eslint-disable @next/next/no-img-element */
import { listSKill } from '@/assets'
import { Marquee } from '@/components/ui/Marquee'
import MorphingText from '@/components/ui/useMorphingText'
import React from 'react'

const firstRow = listSKill.slice(0, listSKill.length / 2)
const secondRow = listSKill.slice(listSKill.length / 2)

const texts = [
  '🌐 Improve user experience by optimizing interface and performance. Apply modern UI/UX design principles to create the best user experience.',
  '🌐 Create custom websites according to customer requirements, from idea to implementation. Use modern technologies like React, Next.js, Tailwind CSS to create responsive and high-performance websites.',
  '🌐 Always keep up to date with the latest trends and technology. Self-study and apply quickly to real projects to ensure that my solutions are always cutting-edge and effective.',
  '🌐 React, Next.js, Node.js: Self-taught and can develop comprehensive web applications',
  '🌐 Framer Motion: Use to create smooth animations based on scroll events.',
  '🌐 Tailwind CSS: Efficiently apply utility classes to build interfaces quickly and intuitively.',
]

const DailyTech = () => {
  return (
    <div className='text-white p-4 mt-10'>
      <div className='flex items-center gap-4 text-md text-white mb-8'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          className='fill-white translate-y-[-2px]'
          viewBox='0 0 24 24'
        >
          <path d='M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z' />
        </svg>
        Technology Use
      </div>
      <div className='relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-dark'>
        <Marquee pauseOnHover className='[--duration:50s]'>
          {firstRow.map((skill, index) => {
            return <DailyTechItem item={skill.src} key={index} />
          })}
        </Marquee>
        <Marquee reverse pauseOnHover className='[--duration:50s]'>
          {secondRow.map((skill, index) => {
            return <DailyTechItem item={skill.src} key={index} />
          })}
        </Marquee>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-dark'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-dark'></div>
      </div>
      <div className='mt-6'>
        <MorphingText
          texts={texts}
          className='!text-xs 3xl:!text-sm'
          morphTime={2}
          cooldownTime={4}
        />
      </div>
    </div>
  )
}

export default DailyTech

const DailyTechItem = ({ item }: { item: string }) => {
  return (
    <div className='p-4 border-gray-50/[.1] bg-gray-50/[.10] overflow-hidden rounded-xl'>
      <img src={item} alt='phong phan' className='object-cover h-10 w-10' />
    </div>
  )
}
