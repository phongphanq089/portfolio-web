import { socialLink } from '@/components/contants/social-link'
import FlipLink from '@/components/ui/FlipLink'
import React from 'react'

const SocialLink = () => {
  return (
    <ul className='grid grid-cols-2 gap-1 md:flex items-center lg:gap-2 2xl:gap-5 text-white relative z-10'>
      {socialLink?.map((social, index) => {
        return (
          <li
            className='border rounded-3xl px-3 py-2 bg-black'
            key={`${social.name}-${index}`}
          >
            <FlipLink
              href='#'
              className='font-semibold  uppercase text-[18px] sm:text-sm lg:text-sm 2xl:text-md !text-white'
            >
              {social.name}
            </FlipLink>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLink
