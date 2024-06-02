/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { bgFooter, coderJson, cricleDouble } from '@/assets'
import AnimationLottie from '../ui/AnimationLottie'
import LogoDev from './LogoDev'
import ScrollTop from './ScrollTop'
import { Button } from '../ui/button'
import Link from 'next/link'
import SocialProfile from './SocialProfile'

const Footer = () => {
  return (
    <footer className='relative mt-52 bg-color-6 py-6 px-2 rounded-t-3xl'>
      <div className='container-xxl'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className=''>
            <div className=' bg-color-1 p-5 rounded-2xl mt-[-100px] h-fit mb-5'>
              <h2 className='text-xl text-color-6 font-[900]'>
                {`Let's work together`}
              </h2>
              <p className='text-xs text-color-6 leading-none mb-4'>
                {`If you have any questions or concerns, please don't hesitate to
                contact me. I am open to any work opportunities that align with
                my skills and interests.`}
              </p>
              <Button className='rounded-full bg-color-6 hover:bg-light hover:text-color-6 h-[60px]'>{`Let's Start`}</Button>
            </div>
            <div>
              <ul className='flex items-center gap-2 text-white mb-5 text-xs'>
                <li>
                  <Link href='/'>Profile</Link>
                </li>
                <li>
                  <Link href='/'>About</Link>
                </li>
                <li>
                  <Link href='/'>Skill</Link>
                </li>
                <li>
                  <Link href='/'>Contact</Link>
                </li>
              </ul>
              <SocialProfile />
              <div className='flex items-center gap-4 mt-5'>
                <div className='flex flex-col items-start gap-1 text-sm sm:text-md md:text-[24px] font-bold mb-3 lg:mb-0'>
                  <span className='leading-none dark:text-light text-white'>
                    ©2024
                  </span>
                  <span className='leading-none dark:text-light text-white'>
                    .PHONGPHAN
                  </span>
                </div>
                {/* <ScrollTop /> */}
              </div>
            </div>
          </div>
          <div className='p-3'>
            <div className='w-[90%] relative lg:right-[50px] lg:mt-[-200px]'>
              <img
                src={bgFooter.src}
                alt='nextgendev'
                className='w-full h-auto object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
