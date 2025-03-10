import CenterUnderline from '@/components/ui/underline-animation/CenterUnderline'
import ComesInGoesOutUnderline from '@/components/ui/underline-animation/ComesInGoesOutUnderline'
import GoesOutComesInUnderline from '@/components/ui/underline-animation/GoesOutComesInUnderline'
import { SOCIALINK } from '@/setting'
import Link from 'next/link'
import React from 'react'

const SocialLink = () => {
  return (
    <div className=' flex flex-col relative z-50 mt-5 md:mt-10 px-4 '>
      <div className='flex max-lg:flex-col flex-row items-start text-white h-full uppercase space-x-8 text-sm sm:text-xl md:text-2xl lg:text-lg'>
        <div className='font-bold text-md sm:text-xl whitespace-nowrap'>
          SAY HI!
        </div>
        <div className='flex flex-col max-md:!ml-0'>
          <Link
            className='max-lg:h-[30px]'
            href={SOCIALINK.linkedin.link}
            target='_blank'
          >
            <CenterUnderline
              label={SOCIALINK.linkedin.name}
              className='max-lg:font-bold max-sm:text-xs max-lg:text-sm'
            />
          </Link>
          <Link
            className='max-lg:h-[30px]'
            href={SOCIALINK.twiter.link}
            target='_blank'
          >
            <ComesInGoesOutUnderline
              label={SOCIALINK.twiter.name}
              direction='right'
              className='max-lg:font-bold max-sm:text-xs max-lg:text-sm'
            />
          </Link>
          <Link
            className='max-lg:h-[30px]'
            href={SOCIALINK.github.link}
            target='_blank'
          >
            <ComesInGoesOutUnderline
              label={SOCIALINK.github.name}
              direction='left'
              className='max-lg:font-bold max-sm:text-xs max-lg:text-sm'
            />
          </Link>

          <div className='pt-5 3xl:pt-12'>
            <ul className='flex flex-col h-full'>
              <Link
                className='lowercase max-lg:h-[40px]'
                href='mailto:phongphanq089@gmail.com'
              >
                <GoesOutComesInUnderline
                  label='phongphanq089@gmail.com'
                  direction='left'
                  className='max-lg:font-bold max-sm:text-xs max-lg:text-sm'
                />
              </Link>
              <Link className='max-lg:h-[40px]' href='tel:0706113210'>
                <GoesOutComesInUnderline
                  label='+84706113210'
                  direction='right'
                  className='max-lg:font-bold max-sm:text-xs max-lg:text-sm'
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
