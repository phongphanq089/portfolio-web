'use client'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

import { useEffect, useState } from 'react'

const DarkModeToogle = () => {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      className='group relative inline-flex items-center bg-color-3 gap-2 overflow-hidden rounded-md border border-neutral-500/10  px-2 py-1 font-medium text-color-4 tracking-tight dark:bg-color-4 dark:text-color-3'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      type='button'
    >
      <span
        className={cn(
          'relative size-6 scale-75 rounded-full bg-gradient-to-tr'
        )}
      >
        <span
          className={cn(
            'absolute top-0 left-0 z-10 h-full w-full transform-gpu rounded-full bg-gradient-to-tr from-indigo-700 to-sky-500 transition-color duration-500',
            theme === 'dark' ? 'scale-100' : 'scale-90'
          )}
        />
        <span
          className={cn(
            'absolute top-0 left-0 z-10 h-full w-full transform-gpu rounded-full bg-gradient-to-tr from-rose-400 to-amber-300 transition-color duration-500 dark:from-rose-600 dark:to-amber-600',
            theme === 'light' ? 'opacity-100' : 'opacity-0'
          )}
        />
        <span
          className={cn(
            'absolute top-0 right-0 z-20 size-4 origin-top-right transform-gpu rounded-full bg-white transition-transform duration-500  dark:bg-color-4',
            theme === 'dark' ? 'scale-100' : 'scale-0'
          )}
        />
      </span>
      <span className='relative h-6 w-12'>
        <span
          className={cn(
            'absolute top-0 left-0 transition-all duration-1000',
            theme === 'light'
              ? '-translate-y-4 opacity-0 blur-lg hidden'
              : 'translate-y-0 opacity-100 blur-0'
          )}
        >
          Dark
        </span>
        <span
          className={cn(
            `absolute top-0 left-0 transition-all duration-1000`,
            theme === 'dark'
              ? 'translate-y-4 opacity-0 blur-lg hidden'
              : 'translate-y-0 opacity-100 blur-0'
          )}
        >
          Light
        </span>
      </span>
    </button>
  )
}

export default DarkModeToogle
