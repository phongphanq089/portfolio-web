/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { ArtisticCursorEffects } from '@/components/ui/cursor-ui/ArtisticCursorEffects'
import Lenis from 'lenis'
import React, { useEffect } from 'react'

const WrapperProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <React.Fragment>
      {children}{' '}
      <ArtisticCursorEffects
        variant={'magnetic'}
        color={'#ff3c00'}
        size={20}
        glowIntensity={1}
        trailLength={8}
        magneticStrength={0.5}
      />{' '}
    </React.Fragment>
  )
}

export default WrapperProvider
