/* eslint-disable @next/next/no-img-element */
import { IconShapes_1 } from '@/components/ui/RenderIcon'
import React from 'react'
import ImageCard from './ImageCard'
import DescripTionMotion from '@/components/shared/DescripTionMotion'
import { iconPortfolio } from '@/assets'

const CardAbout = () => {
  return (
    <>
      <div className='container-2xl mb-8'>
        <div className='flex flex-col mb-5'>
          <div className='flex items-center gap-2'>
            <IconShapes_1 className='w-[30px] md:w-[70px] h-auto' />
            <h1 className='heading-section leading-none'>A LITTLE BIT</h1>
          </div>
          <h1 className='heading-section leading-none xl:ml-[200px]'>
            ABOUT ME
          </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div>
            <DescripTionMotion
              text='My name is Phong Phan (NexGenDev). I am a professional and enthusiastic
        programmer in my daily life. I am a quick learner with a self-learning
        attitude. I love to learn and explore new technologies and am passionate
        about problem-solving. I love almost all the stacks of web application
        development and love to make the web more open to the world. My core
        skill is based on JavaScript and I love to do most of the things using
        JavaScript.'
              className='text-white'
            />
            <DescripTionMotion
              text='I am available for any kind of job opportunity that suits my skills and
        interests. Whether it’s contributing to an innovative startup, working
        on groundbreaking projects, or collaborating with a team of like-minded
        professionals, I am eager to bring my expertise, enthusiasm, and
        problem-solving abilities to new challenges. Let’s build something
        amazing together!'
              className='text-white'
            />

            <div className='max-w-[250px]  sm:max-w-sm ml-auto'>
              <img
                src={iconPortfolio.src}
                alt='phong phan'
                className='w-full h-auto object-cover'
              />
            </div>
          </div>
          <ImageCard />
        </div>
      </div>
    </>
  )
}

export default CardAbout
