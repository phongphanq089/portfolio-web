'use client'
import React from 'react'
import Layout from './layout/Layout'
import HeadingSection from '@/components/shared/HeadingSection'

const SectionService = () => {
  return (
    <section className='relative  min-h-[150vh] w-full  overflow-hidden bg-dark'>
      <div className='container-3xl'>
        <HeadingSection text1='ABOUT' text2='ME.' />
        <Layout />
      </div>
    </section>
  )
}

export default SectionService
