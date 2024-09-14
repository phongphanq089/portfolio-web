/* eslint-disable @next/next/no-img-element */
import { heroAbout1, iconPortfolio } from '@/assets'
import { NextImageResize } from '@/components/shared/ImageResize'
import HyperText from '@/components/ui/HyperText'
import { SanityDocument } from 'next-sanity'
import React from 'react'
import Description from './Description'
import HeroVideoDialog from '@/components/ui/VideoHeroDialog'

const CardAbout = ({ listScocial }: { listScocial: SanityDocument }) => {
  return (
    <div className='container-2xl mb-[100px]'>
      <div className='grid lg:grid-cols-12 gap-6'>
        <div className='lg:col-span-8'>
          <div className='flex flex-col sm:flex-row mb-5 sm:mb-10 gap-1 sm:gap-4'>
            <div className='flex flex-col w-[250px] md:w-[200px] xl:w-[250px]'>
              <div className='flex items-center gap-[5px] mb-1'>
                <div className='w-2 h-2 bg-white'></div>
                <h3 className='text-white font-semibold text-[14px] 2xl:text-[18px] whitespace-nowrap uppercase'>
                  {`Now or nerver`}
                </h3>
              </div>
              <HeroVideoDialog
                className='dark:hidden block'
                animationStyle='from-center'
                videoSrc='https://cdn.sanity.io/files/i6rvgdeu/production/b59e7bfa8f5d1068f2e47b07188180e36533dc34.mp4'
                thumbnailSrc='https://cdn.sanity.io/images/i6rvgdeu/production/3690c8363826acec9a023c92a52f7de393bb39f1-1280x720.jpg'
                thumbnailAlt='Hero Video'
              />
              <HeroVideoDialog
                className='hidden dark:block'
                animationStyle='from-center'
                videoSrc='https://cdn.sanity.io/files/i6rvgdeu/production/b59e7bfa8f5d1068f2e47b07188180e36533dc34.mp4'
                thumbnailSrc='https://cdn.sanity.io/images/i6rvgdeu/production/3690c8363826acec9a023c92a52f7de393bb39f1-1280x720.jpg'
                thumbnailAlt='Hero Video'
              />
            </div>
            <HyperText
              className='text-xl lg:text-[7vw] font-semibold text-white leading-none mt-auto'
              text='ABOUT ME.'
            />
          </div>

          <Description listScocial={listScocial as SanityDocument} />
        </div>
        <div className='lg:col-span-4'>
          <div className='mx-auto max-w-[400px] lg:max-w-full lg:w-full'>
            <NextImageResize
              src={heroAbout1.src}
              alt='phong phan'
              className='pt-[133%] rounded-md overflow-hidden'
            />
            <div className='max-w-[250px] 2xl:max-w-sm mt-4'>
              <img
                src={iconPortfolio.src}
                alt='phong phan'
                className='w-full h-auto object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardAbout
