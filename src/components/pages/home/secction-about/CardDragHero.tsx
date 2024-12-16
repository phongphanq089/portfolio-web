/* eslint-disable @next/next/no-img-element */
import { heroAbout1 } from '@/assets'
import DragCards from '@/components/ui/DragCards'
import { socialLink } from '@/contents/data'
import Link from 'next/link'
import React, { useRef } from 'react'

const CardDragHero = () => {
  const containerRef = useRef(null)
  return (
    <div className='absolute inset-0 z-10' ref={containerRef}>
      <DragCards
        containerRef={containerRef}
        rotate='6deg'
        top='20%'
        left='10%'
        className='w-[600px] min-h-[400px]'
        title='About me'
      >
        <div className='p-4 2xl:text-sm'>
          <p>
            My name is Phong Phan (NexGenDev). I am a professional and
            enthusiastic programmer in my daily life. I am a quick learner with
            a self-learning attitude. I love to learn and explore new
            technologies and am passionate about problem-solving. I love almost
            all the stacks of web application development and love to make the
            web more open to the world. My core skill is based on JavaScript and
            I love to do most of the things using JavaScript.
          </p>
          <p>
            I am available for any kind of job opportunity that suits my skills
            and interests. Whether it’s contributing to an innovative startup,
            working on groundbreaking projects, or collaborating with a team of
            like-minded professionals, I am eager to bring my expertise,
            enthusiasm, and problem-solving abilities to new challenges. Let’s
            build something amazing together!
          </p>
        </div>
      </DragCards>

      <DragCards
        containerRef={containerRef}
        rotate='12deg'
        top='45%'
        left='60%'
        className='w-[400px] h-fit'
        title='Hobbies'
      >
        <div className='p-4 text-sm'>
          <h2> ⚽ Play soccer</h2>
          <h2>📖 Reading</h2>
          <h2>📻 Music</h2>
          <h2>🎮 Gamming</h2>
          <h2>💪 Gym</h2>
        </div>
      </DragCards>

      <DragCards
        containerRef={containerRef}
        top='20%'
        left='50%'
        className='w-[400px] min-h-[300px]'
        title='Phong Phan'
      >
        <div className='p-4'>
          <div className='wrapImgResize imgSquare'>
            <img
              src={
                'https://i-p.rmcdn.net/6680737dae957b0053a46105/4868815/image-c6c1102b-b9dc-4306-88da-9367784a3a45.png?w=896&e=webp&nll=true'
              }
              alt='phongphan'
            />
          </div>
        </div>
      </DragCards>

      <DragCards
        containerRef={containerRef}
        top='40%'
        left='40%'
        className='w-[400px] min-h-[300px]'
        title='Phong Phan'
      >
        <div className='p-4'>
          <div className='wrapImgResize imgSquare'>
            <img src={heroAbout1.src} alt='phongphan' />
          </div>
        </div>
      </DragCards>
      <DragCards
        containerRef={containerRef}
        rotate='8deg'
        top='50%'
        left='30%'
        className='w-[400px] min-h-[300px]'
        title='My online'
      >
        <div className='p-4'>
          {socialLink.map((item, index) => {
            return (
              <div key={index}>
                <Link
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-style mb-2'
                >
                  {item.name}
                </Link>
              </div>
            )
          })}
        </div>
      </DragCards>
      <DragCards
        containerRef={containerRef}
        rotate='12deg'
        top='45%'
        left='70%'
        className='w-[600px] h-fit'
        title='Hobbies'
      >
        <div className='p-4 text-sm'>
          <div className='wrapImgResize img16And9'>
            <img
              src={
                'https://i-p.rmcdn.net/6680737dae957b0053a46105/4868815/image-2d0370f4-c1d9-4bbe-9b5f-bab983eea412.png?w=1502&e=webp&nll=true&cX=0&cY=1&cW=1920&cH=1079'
              }
              alt='phongphan'
            />
          </div>
        </div>
      </DragCards>
    </div>
  )
}

export default CardDragHero
