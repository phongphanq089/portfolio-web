'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Proptype {
  index: number
  image: string
  name: string
}

const ProjectItem = ({ image, name, index }: Proptype) => {
  return (
    <div className='w-full mb-10 last:mb-0 project-item relative cursor-pointer'>
      <Link href={'https://portfolio-nexgendev.vercel.app/'} target='_blank'>
        <Image
          src={`/image/${image}`}
          alt='image'
          width={1000}
          height={500}
          className=' object-cover w-full h-auto rounded-2xl'
        />
      </Link>
      <div className='flex items-center flex-wrap justify-between gap-1 py-2'>
        <h3 className='text-sm font-bold'>{name}</h3>
        <div className='flex items-center  gap-1'>
          <div className='p-1 rounded-xl border-2 border-color-3'>DESIGNER</div>
          <div className='p-1 rounded-xl border-2 border-color-3'>
            DVELOPMENT
          </div>
          <Link
            href={'https://github.com/phongphanq089'}
            title='https://github.com/phongphanq089'
          >
            <div className='p-1 rounded-xl border-2 border-black bg-black text-light font-bold '>
              GITHUB
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
