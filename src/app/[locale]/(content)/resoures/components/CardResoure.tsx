import NextImageResize from '@/components/ui/NextImageResize'
import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface PropsCardResoure {
  srcImage: string
  title: string
  link: string
  alt?: string
}

const CardResoure = ({ srcImage, title, link, alt }: PropsCardResoure) => {
  return (
    <Link
      href={link || '#'}
      className={` relative pb-4  inline-block overflow-hidden`}
      target='_blank'
    >
      <div className='w-full rounded-md h-full overflow-hidden'>
        <NextImageResize
          classNameContainer='hover:scale-100 scale-105 transition-all duration-300'
          src={srcImage}
          alt={alt}
        />
      </div>
      <div className='absolute bottom-2 text-black w-full p-4 flex justify-between items-center'>
        <h3 className='text-xs bg-primary-color text-white rounded-xl p-2 px-4'>
          {title || 'Title Card'}
        </h3>

        <button className='group relative inline-flex h-9 w-9 items-center justify-center  overflow-hidden rounded-full bg-primary-color  font-medium text-neutral-200 border-2 transition-all duration-300 hover:w-24'>
          <div className='inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100'>
            Visit
          </div>
          <div className='absolute right-1'>
            <MoveUpRight size={24} />
          </div>
        </button>
      </div>
    </Link>
  )
}

export default CardResoure
