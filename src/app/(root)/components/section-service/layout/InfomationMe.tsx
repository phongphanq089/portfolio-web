import React from 'react'
import DailyTech from './DailyTech'

const InfomationMe = () => {
  return (
    <div className='border-b border-neutral-700 '>
      <div className='flex items-center gap-4 text-sm 2xl:text-md text-white mb-8'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='fill-white translate-y-[-2px] h-4 w-4 2xl:w-6 2xl:h-6'
          viewBox='0 0 24 24'
        >
          <path d='M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z' />
        </svg>
        About Me
      </div>

      <div className='text-xs 2xl:text-[18px]'>
        <p className='mb-4'>
          My name is Phong Phan (NexGenDev). I am a professional and
          enthusiastic programmer in my daily life. I am a quick learner with a
          self-learning attitude. I love to learn and explore new technologies
          and am passionate about problem-solving. I love almost all the stacks
          of web application development and love to make the web more open to
          the world. My core skill is based on JavaScript and I love to do most
          of the things using JavaScript.
        </p>
        <p className='mb-4'>
          I am available for any kind of job opportunity that suits my skills
          and interests. Whether it’s contributing to an innovative startup,
          working on groundbreaking projects, or collaborating with a team of
          like-minded professionals, I am eager to bring my expertise,
          enthusiasm, and problem-solving abilities to new challenges. Let’s
          build something amazing together!
        </p>
      </div>

      <div className='flex items-center gap-3 mb-4'>
        <button className='btn-style_gradient'> 25 years</button>
        <button className='btn-style_gradient'> Web</button>
        <button className='btn-style_gradient'> Front-end</button>
        <button className='btn-style_gradient'> Back-end</button>
      </div>
    </div>
  )
}

export default InfomationMe
