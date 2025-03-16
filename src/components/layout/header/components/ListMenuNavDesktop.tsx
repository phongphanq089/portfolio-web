'use client'

import { cn } from '@/lib/utils'
import { MENU_SETTINGS } from '@/setting'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ListMenuNavDesktop = () => {
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1]
  const basePath = pathname.replace(`/${currentLocale}`, '') || '/'
  const t = useTranslations('Navbar')

  const variants = {
    active: { x: 0, scale: 1, backgroundColor: '#ff5733' },
    inactive: {
      x: 0,
      scale: 1,
      backgroundColor: '#000000 bg-[rgb(0,0,0,0.5)]',
    },
  }
  return (
    <div className='relative w-full h-full center max-xl:hidden'>
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
        {MENU_SETTINGS.map((item, index) => {
          const localizedPath = `/${currentLocale}${item.link === '/' ? '' : item.link}`
          const isActive = basePath === item.link
          return (
            <Link
              key={index}
              href={localizedPath}
              className='w-full h-full flex items-center justify-center whitespace-nowrap'
            >
              <motion.li
                variants={variants}
                className={cn(
                  'bg-black text-white px-7 h-full backdrop-blur items-center mx-0 transition-all duration-500 cursor-pointer justify-center flex capitalize font-bold',
                  isActive && 'bg-primary-color mx-6'
                )}
                initial='inactive'
                animate={isActive ? 'active' : 'inactive'}
              >
                {t(item.name)}
              </motion.li>
            </Link>
          )
        })}
      </motion.ul>
    </div>
  )
}

export default ListMenuNavDesktop
