import CenterUnderline from '@/components/ui/underline-animation/CenterUnderline'
import ComesInGoesOutUnderline from '@/components/ui/underline-animation/ComesInGoesOutUnderline'
import GoesOutComesInUnderline from '@/components/ui/underline-animation/GoesOutComesInUnderline'
import Link from 'next/link'
import React from 'react'

const SocialLink = () => {
  return (
    <div className=' flex flex-col relative z-50 mt-3 md:mt-10 px-4 '>
      <div className='flex max-lg:flex-col flex-row items-start text-color-3 dark:text-white h-full uppercase space-x-8 text-sm sm:text-xl md:text-2xl lg:text-lg'>
        <div className='font-bold text-xl whitespace-nowrap'>SAY HI!</div>
        <div className='flex flex-col max-md:!ml-0'>
          <Link className='max-lg:h-[30px]' href='#'>
            <CenterUnderline
              label='LINKEDIN'
              className='max-lg:font-bold max-lg:text-sm'
            />
          </Link>
          <Link className='max-lg:h-[30px]' href='#'>
            <ComesInGoesOutUnderline
              label='GITHUB'
              direction='right'
              className='max-lg:font-bold max-lg:text-sm'
            />
          </Link>
          <Link className='max-lg:h-[30px]' href='#'>
            <ComesInGoesOutUnderline
              label='X (TWITTER)'
              direction='left'
              className='max-lg:font-bold max-lg:text-sm'
            />
          </Link>

          <div className='pt-5 3xl:pt-12'>
            <ul className='flex flex-col h-full'>
              <Link className='lowercase max-lg:h-[40px]' href='#'>
                <GoesOutComesInUnderline
                  label='phongphanq089@gmail.com'
                  direction='left'
                  className='max-lg:font-bold max-lg:text-sm'
                />
              </Link>
              <Link className='max-lg:h-[40px]' href='#'>
                <GoesOutComesInUnderline
                  label='+84706113210'
                  direction='right'
                  className='max-lg:font-bold max-lg:text-sm'
                />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialLink
