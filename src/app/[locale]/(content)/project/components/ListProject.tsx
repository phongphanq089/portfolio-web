'use client'
import { InteractiveHoverButton } from '@/components/ui/button/InteractiveHoverButton'
import { SafariCardMockDevice } from '@/components/ui/Card-ui/SafariCardMockDevice'
import { Cursor } from '@/hooks/CursorMotion'
import { urlFor } from '@/sanity/config'
import { ListProjectType } from '@/types'
import Link from 'next/link'
import React, { SVGProps } from 'react'

const ListProject = ({ listProject }: { listProject: ListProjectType[] }) => {
  return (
    <div className='px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10'>
        {listProject?.map((item) => {
          return (
            <div className='relative' key={item._id}>
              <Link href={item.urlPage} target='_blank'>
                <SafariCardMockDevice
                  url={item.title}
                  className='size-full'
                  imageSrc={urlFor(item.mainImage.asset._ref).url()}
                />
                <Cursor
                  attachToParent
                  variants={{
                    initial: { scale: 0.3, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    exit: { scale: 0.3, opacity: 0 },
                  }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 0.15,
                  }}
                  className='left-12 top-4'
                >
                  <div>
                    <MouseIcon className='h-6 w-6' />
                    <div className='ml-4 mt-1 rounded-[4px] bg-primary-color px-2 py-2 text-neutral-50'>
                      {item.title}
                    </div>
                  </div>
                </Cursor>
              </Link>
              <Link
                href={item.urlGithub || '#'}
                className='absolute bottom-3 right-3'
              >
                <InteractiveHoverButton>SOURECE CODE</InteractiveHoverButton>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListProject

const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={26}
      height={31}
      fill='none'
      {...props}
    >
      <g clipPath='url(#a)'>
        <path
          fill={'#ff3c00'}
          fillRule='evenodd'
          stroke={'#fff'}
          strokeLinecap='square'
          strokeWidth={2}
          d='M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z'
          clipRule='evenodd'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill={'#ff3c00'} d='M0 0h26v31H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
