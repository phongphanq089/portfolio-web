'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { SanityDocument } from 'next-sanity'
import { usePathname, useRouter } from 'next/navigation'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { useEffect, useRef } from 'react'

const TabsLiquid = ({
  category,
  isPageBlog,
}: {
  category: SanityDocument
  isPageBlog?: boolean
}) => {
  const router = useRouter()

  const pathname = usePathname()

  const activeTabRef = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    }
  }, [pathname])

  return (
    <ScrollArea className='w-full whitespace-nowrap pb-4'>
      <div className='relative w-full h-full center overflow-hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          className='absolute'
        >
          <defs>
            <filter id='goo'>
              <feGaussianBlur
                in='SourceGraphic'
                stdDeviation='12'
                result='blur'
              />
              <feColorMatrix
                in='blur'
                mode='matrix'
                values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10'
                result='goo'
              />
              <feComposite in='SourceGraphic' in2='goo' operator='atop' />
            </filter>
          </defs>
        </svg>
        <motion.ul
          style={{
            filter: 'url(#goo)',
          }}
          layout
          className='h-14 flex'
        >
          {category.map((item: any, index: number) => (
            <motion.li
              key={item._id + index}
              ref={
                pathname ===
                `${isPageBlog ? '/blogs' : '/resoures'}/${item.slug.current}`
                  ? activeTabRef
                  : null
              }
              onClick={() =>
                router.push(
                  `${isPageBlog ? '/blogs' : '/resoures'}/${item.slug.current}`
                )
              }
              className={cn(
                'bg-color-3 text-white px-7 h-full items-center mx-0 transition-all duration-500 cursor-pointer justify-center flex capitalize font-bold',
                pathname ===
                  `${isPageBlog ? '/blogs' : '/resoures'}/${
                    item.slug.current
                  }` && 'bg-primary-color mx-6'
              )}
            >
              {item.title}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  )
}

export default TabsLiquid
