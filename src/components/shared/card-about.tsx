/* eslint-disable @next/next/no-img-element */
import { bgLine, heroAbout1, iconBlock1 } from '@/assets'
import React from 'react'

const CardAbout = () => {
  return (
    <div className='container-xxl'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
        <div className='py-4 px-2 2xl:mt-7'>
          <div className='hidden lg:block max-w-[600px] mx-auto rounded-2xl overflow-hidden'>
            <img
              src={heroAbout1.src}
              alt='nextgendev'
              className='w-full object-cover h-full'
            />
          </div>
        </div>
        <div className='p-4 2xl:mt-5'>
          <div className='relative w-fit mb-2'>
            <h2 className='text-[35px] md:text-[70px] font-[900] leading-none text-white'>
              A LITTLE BIT
            </h2>
            <h2 className='text-[35px] md:text-[70px] font-[900] leading-none text-white'>
              ABOUT ME/
            </h2>
            <img
              src={bgLine?.src}
              alt='nextgendev'
              className='w-full h-auto object-cover '
            />
          </div>
          <p className='text-lg mb-3'>
            My name is Phong Phan (NexGenDev). I am a professional and
            enthusiastic programmer in my daily life. I am a quick learner with
            a self-learning attitude. I love to learn and explore new
            technologies and am passionate about problem-solving. I love almost
            all the stacks of web application development and love to make the
            web more open to the world. My core skill is based on JavaScript and
            I love to do most of the things using JavaScript.
          </p>
          <p className='text-lg mb-3'>
            I am available for any kind of job opportunity that suits my skills
            and interests. Whether it’s contributing to an innovative startup,
            working on groundbreaking projects, or collaborating with a team of
            like-minded professionals, I am eager to bring my expertise,
            enthusiasm, and problem-solving abilities to new challenges. Let’s
            build something amazing together!
          </p>
          <div className='max-w-[500px]'>
            <img
              src={iconBlock1.src}
              alt='nextgendev'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardAbout
