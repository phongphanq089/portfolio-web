import React from 'react'
import FramerMagnetic from '../ui/FramerMagnetic'
import IconSvg from './IconSvg'
import { facebook, instagram, tiktok, twitter } from '@/assets'

const SocialProfile = () => {
  return (
    <div className='flex items-center gap-4 sm:gap-5'>
      <FramerMagnetic>
        <IconSvg src={facebook.src} />
      </FramerMagnetic>
      <FramerMagnetic>
        <IconSvg src={twitter.src} />
      </FramerMagnetic>
      <FramerMagnetic>
        <IconSvg src={instagram.src} />
      </FramerMagnetic>
      <FramerMagnetic>
        <IconSvg src={tiktok.src} />
      </FramerMagnetic>
    </div>
  )
}

export default SocialProfile
