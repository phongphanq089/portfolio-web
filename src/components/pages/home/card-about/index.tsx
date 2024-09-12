/* eslint-disable @next/next/no-img-element */
import { heroAbout1, iconPortfolio } from '@/assets'
import { NextImageResize } from '@/components/shared/ImageResize'
import HyperText from '@/components/ui/HyperText'
import { SanityDocument } from 'next-sanity'
import React from 'react'
import Description from './Description'

const CardAbout = ({ listScocial }: { listScocial: SanityDocument }) => {
  return (
    <div className='container-2xl mb-[100px]'>
      <div className='grid lg:grid-cols-12 gap-6'>
        <div className='lg:col-span-8'>
          <div className='flex flex-col sm:flex-row mb-5 sm:mb-10 gap-1 sm:gap-4'>
            <div className='flex flex-col w-[130px] 2xl:w-[200px]'>
              <div className='flex items-center gap-[5px] mb-1'>
                <div className='w-2 h-2 bg-white'></div>
                <h3 className='text-white font-semibold text-[14px] 2xl:text-[18px] whitespace-nowrap uppercase'>
                  {`I'm Phong Phan`}
                </h3>
              </div>
              <img
                src='https://clarissemichard.com/1.e3e58c57.gif'
                alt='phongphan'
                className='object-cover w-full h-auto rounded-md'
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
