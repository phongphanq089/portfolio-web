'use client'
import React from 'react'
import Layout from './layout/Layout'

const SectionService = () => {
  return (
    <section className='relative  min-h-[150vh] w-full  overflow-hidden bg-dark'>
      <div className='container-3xl'>
        <h2 className='text-[7vw] font-[900]  text-[#f3d8ba] whitespace-nowrap mb-8 xl:mb-0 px-5 xl:px-0 mt-4'>
          <span className='text-stroke'>ABOUT</span> ME .
        </h2>
      </div>
      <div className='container-3xl'>
        <Layout />
      </div>
    </section>
  )
}

export default SectionService
