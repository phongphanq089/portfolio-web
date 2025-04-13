import { InteractiveHoverButton } from '@/components/ui/button/InteractiveHoverButton'
import { EvervaultCard, Icon } from '@/components/ui/Card-ui/EvervaultCard'
import Link from 'next/link'

import React from 'react'

const listColection = [
  {
    title: 'Postcard',
    href: '/postcard',
  },
  {
    title: 'Quotes',
    href: '/quote',
  },
  {
    title: 'Postcard English',
    href: '/postcard-english',
  },
]

const PageCollection = () => {
  return (
    <div className='mt-[100px] sm:mt-[200px] mb-[100px] relative z-10'>
      <div className='container-3xl'>
        <div className='flex items-center justify-center flex-wrap gap-32'>
          {listColection.map((coleciton, index) => {
            return (
              <div
                className='border border-white/[0.2] flex flex-col items-start max-w-[340px] xs:max-w-sm mx-auto p-4 relative h-[30rem]'
                key={index}
              >
                <Icon className='absolute h-6 w-6 -top-3 -left-3  text-white' />
                <Icon className='absolute h-6 w-6 -bottom-3 -left-3  text-white' />
                <Icon className='absolute h-6 w-6 -top-3 -right-3  text-white' />
                <Icon className='absolute h-6 w-6 -bottom-3 -right-3  text-white' />

                <EvervaultCard text={coleciton.title} className='!text-white' />

                <Link href={coleciton.href}>
                  <InteractiveHoverButton>
                    {coleciton.title}
                  </InteractiveHoverButton>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PageCollection
