import { urlFor } from '@/sanity/config'
import Image from 'next/image'
import React from 'react'

const ImagePortable = ({ value }: { value: any }) => {
  if (!value?.asset?._ref) {
    return value
  }
  return (
    <div>
      <img
        alt={value.alt || 'Image'}
        loading='lazy'
        src={`${urlFor(value)}`}
        className='max-w-full h-auto mx-auto object-cover '
      />
    </div>
  )
}

export default ImagePortable
