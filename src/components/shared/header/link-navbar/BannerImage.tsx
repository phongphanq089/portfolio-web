import Image from 'next/image'
import React from 'react'

const BannerImage = ({ className }: { className: string }) => {
  return (
    <div className={`${className}`}>
      <Image
        src='/image/bg-menu-navbar-1.svg'
        alt='phongphan'
        width={600}
        height={600}
        className='w-full h-auto object-cover mx-auto'
      />
    </div>
  )
}

export default BannerImage
