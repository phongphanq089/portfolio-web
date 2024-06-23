/* eslint-disable @next/next/no-img-element */
import { logoNexgendev } from '@/assets'
import Link from 'next/link'
import React from 'react'

const LogoDev = () => {
  return (
    <Link
      href={'/'}
      title='Next-generation Developer'
      className='max-w-[200px] md:max-w-[300px]'
    >
      <img
        src={logoNexgendev.src}
        alt='nexgendev'
        className='image-cover_auto'
      />
    </Link>
  )
}

export default LogoDev
