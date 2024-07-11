'use client'
import { projects } from '@/components/contants/data-poduct-portfolio'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectItem from './ProjectItem'
import TextParalaxScroll from '../TextParalaxScroll'
import DescripTionMotion from '@/components/shared/DescripTionMotion'

const ListProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleScroll = () => {
    const projectElements = document.querySelectorAll('.project-item')
    let newIndex = 0

    projectElements.forEach((element, index) => {
      const rect = element.getBoundingClientRect()
      if (rect.top <= window.innerHeight / 2) {
        newIndex = index
      }
    })

    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <section className='py-10'>
        <div className='container-2xl'>
          <h2 className='heading-section text-color-3'>MY PROJECTS</h2>
          <div className='ml-auto max-w-2xl xl:max-w-4xl flex flex-col sm:flex-row gap-2 md:gap-6 sm:mb-5'>
            <div className='whitespace-nowrap'>
              <span className='text-[18px] font-bold relative sm:top-1'>{`( PROJECTS )`}</span>
            </div>
            <DescripTionMotion
              text='Every project here is a labor of love, driven by my passion and dedication to creating impactful solutions. Each line of code reflects my enthusiasm for learning and my commitment to excellence.'
              className='text-justify font-semibold'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-12'>
            <div className='hidden md:block md:col-span-3 xl:col-span-5'>
              <div className='flex flex-col sticky top-4 lg:top-0 z-20'>
                {renderIndex(currentIndex + 1)}
              </div>
            </div>
            <div className='md:col-span-9 xl:col-span-7 relative '>
              <div className='grid grid-cols-1 gap-2 '>
                {projects.map((project, index) => {
                  return (
                    <ProjectItem
                      key={`${index}-${project.name}`}
                      image={project.src}
                      name={project.name}
                      index={index}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <TextParalaxScroll />
    </>
  )
}

const renderIndex = (index: number) => {
  return (
    <div className='flex items-center text-[10vw] lg:text-[20vw] text-color-3 font-bold leading-none overflow-hidden'>
      <span>0</span>
      <motion.span
        key={index}
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {`${index}.`}
      </motion.span>
    </div>
  )
}

export default ListProject
