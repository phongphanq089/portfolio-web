'use client'
import Lenis from '@studio-freight/lenis'
import React, { useEffect } from 'react'
import { listService } from '../contants/service-dev'
import CardParallax from './CardParallax'

const ServiceDev = () => {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })
  return (
    <div className='bg-color-6 rounded-3xl'>
      <div className='py-14'>
        <div className='container-xxl grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-5'>
          <span className='text-xl md:text-8xl xl:text-9xl text-white font-bold'>
            WHAT I DO.
          </span>
          <span className='text-sm sm:text-md text-white '>
            My obsession is to deliver a digital experience that not only serves
            a great purpose, but give your business an unfair advantage.
          </span>
        </div>
      </div>
      {listService?.map((service, index) => {
        return (
          <CardParallax
            key={`p_${index}`}
            index={index}
            title={service.title}
            description={service.description}
            service={service.service}
          />
        )
      })}
    </div>
  )
}

export default ServiceDev
