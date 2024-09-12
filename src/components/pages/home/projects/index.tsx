'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectItem from './ProjectItem'
import TextParalaxScroll from '../TextParalaxScroll'
import DescripTionMotion from '@/components/shared/DescripTionMotion'
import { urlFor } from '@/sanity/config'
import { SanityDocument } from 'next-sanity'

const ListProject = ({ lisProject }: { lisProject: SanityDocument }) => {
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
          <div className='mx-auto max-w-[1200px] mb-10 lg:mb-[150px] relative'>
            <div className='flex justify-center mb-2 xs:mb-5 sm:mb-10'>
              <div className='flex flex-col text-end leading-none text-[10px] sm:text-[14px] md:text-[18px] font-medium xs:translate-y-[45px]'>
                <span>SOME</span>
                <span>SELECTED</span>
              </div>
              <h2 className='text-[12vw] font-semibold leading-none mt-auto relative'>
                PROJECT.
              </h2>
              <div className='flex flex-col text-start leading-none text-[10px] sm:text-[14px] md:text-[18px] font-medium xs:translate-y-[45px]'>
                <span>WEB</span>
                <span>DEVELOPER</span>
              </div>
            </div>
            <DescripTionMotion
              text='Every project here is a labor of love, driven by my passion and dedication to creating impactful solutions. Each line of code reflects my enthusiasm for learning and my commitment to excellence.'
              className='text-center text-[18px] font-medium max-w-[1000px] mx-auto'
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
                {lisProject.map((project: SanityDocument, index: number) => {
                  return (
                    <ProjectItem
                      key={`${index}-${project.name}`}
                      image={urlFor(project.mainImage).url()}
                      name={project.title}
                      index={index}
                      urlPage={project.urlPage}
                      tags={project.tags}
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
