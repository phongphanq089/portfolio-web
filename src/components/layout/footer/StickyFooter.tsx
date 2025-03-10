'use client'

import React from 'react'
import dynamic from 'next/dynamic'

import Footer from './index'

const PixelTrailDemo = dynamic(() => import('./components/PixelTrailDemo'), {
  ssr: false,
})
const StickyFooter = () => {
  return (
    <div>
      <PixelTrailDemo />

      <Footer />
    </div>
  )
}

export default StickyFooter
