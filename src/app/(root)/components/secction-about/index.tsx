import React from 'react'
import CardDragHero from './CardDragHero'

const SectionAbout = () => {
  return (
    <section className='relative grid min-h-[150vh] w-full place-content-center overflow-hidden bg-dark'>
      <h2 className='text-[7vw] font-[900] absolute top-6 left-1/2 -translate-x-1/2 text-[#f3d8ba] whitespace-nowrap'>
        <span className='text-stroke'>ABOUT</span> ME .
      </h2>
      <h2 className='relative z-0 text-[10vw] font-black text-neutral-800'>
        PHONG PHAN<span className='text-primary-color'>.</span>
      </h2>
      <CardDragHero />
    </section>
  )
}

export default SectionAbout
