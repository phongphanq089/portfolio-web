'use client'
import { urlFor } from '@/sanity/config'
import { useScroll, useTransform, motion } from 'framer-motion'
import { SanityDocument } from 'next-sanity'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const ImageParalaxSroll = ({
  listParalaxImageScroll,
}: {
  listParalaxImageScroll: SanityDocument
}) => {
  const gallery = useRef(null)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  })
  const { height } = dimension
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', resize)
    resize()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section>
      <div ref={gallery} className='gallery'>
        <Column
          images={[
            urlFor(listParalaxImageScroll[0].mainImage).url(),
            urlFor(listParalaxImageScroll[1].mainImage).url(),
            urlFor(listParalaxImageScroll[2].mainImage).url(),
          ]}
          y={y}
        />
        <Column
          images={[
            urlFor(listParalaxImageScroll[3].mainImage).url(),
            urlFor(listParalaxImageScroll[4].mainImage).url(),
            urlFor(listParalaxImageScroll[11].mainImage).url(),
          ]}
          y={y2}
        />
        <Column
          images={[
            urlFor(listParalaxImageScroll[6].mainImage).url(),
            urlFor(listParalaxImageScroll[7].mainImage).url(),
            urlFor(listParalaxImageScroll[8].mainImage).url(),
          ]}
          y={y3}
        />
        <Column
          images={[
            urlFor(listParalaxImageScroll[9].mainImage).url(),
            urlFor(listParalaxImageScroll[10].mainImage).url(),
            urlFor(listParalaxImageScroll[11].mainImage).url(),
          ]}
          y={y4}
        />
      </div>
    </section>
  )
}

const Column = ({ images, y }: { images: string[]; y: any }) => {
  return (
    <motion.div className='column' style={{ y }}>
      {images.map((src: string, i: any) => {
        return (
          <div key={i} className='imageContainer'>
            <Image src={src} alt='image' fill />
          </div>
        )
      })}
    </motion.div>
  )
}

export default ImageParalaxSroll
