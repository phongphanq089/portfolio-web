/* eslint-disable @next/next/no-img-element */
import { urlFor } from '@/sanity/config'
import React from 'react'

const WrapperImage = ({ value }: { value: any }) => {
  if (!value?.asset?._ref) {
    return value
  }
  return (
    <div className='mb-4'>
      <img
        alt={value.alt || 'Image'}
        loading='lazy'
        src={`${urlFor(value)}`}
        className='max-w-full h-auto mx-auto object-cover rounded-xl '
      />
    </div>
  )
}

export default WrapperImage
