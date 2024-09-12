import ButtonStyle from '@/components/shared/ButtonStyle'
import { SanityDocument } from 'next-sanity'
import Link from 'next/link'
import React from 'react'

const Description = ({ listScocial }: { listScocial: SanityDocument }) => {
  return (
    <div className='bg-description__card p-2 md:p-4 '>
      <p className='text-xs 2xl:text-sm text-white mb-2'>
        My name is Phong Phan (NexGenDev). I am a professional and enthusiastic
        programmer in my daily life. I am a quick learner with a self-learning
        attitude. I love to learn and explore new technologies and am passionate
        about problem-solving. I love almost all the stacks of web application
        development and love to make the web more open to the world. My core
        skill is based on JavaScript and I love to do most of the things using
        JavaScript.
      </p>
      <p className='text-xs 2xl:text-sm text-white'>
        I am available for any kind of job opportunity that suits my skills and
        interests. Whether it’s contributing to an innovative startup, working
        on groundbreaking projects, or collaborating with a team of like-minded
        professionals, I am eager to bring my expertise, enthusiasm, and
        problem-solving abilities to new challenges. Let’s build something
        amazing together!
      </p>
      <div className='flex items-center flex-wrap gap-2 my-3'>
        {listScocial?.map((social: SanityDocument) => {
          return (
            <Link
              href={social?.url}
              className='bg-black flex w-fit'
              key={social._id}
              target='_blank'
            >
              <ButtonStyle text={social?.title} className={'overide-style'} />
            </Link>
          )
        })}
      </div>
      <div className='box box_1'></div>
      <div className='box box_2'></div>
      <div className='box box_3'></div>
      <div className='box box_4'></div>
    </div>
  )
}

export default Description
