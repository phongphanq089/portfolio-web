import { urlFor } from '@/sanity/config'
import { type ClassValue, clsx } from 'clsx'
import { MotionStyle, MotionValue } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const imageUrl = (url: string) => {
  const image = urlFor(url)
  const name = `${image.options.baseUrl}/${image.options.source}`
  return name
}

export const formatDate = (isoString: string) => {
  const date = new Date(isoString)

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

export function getFormattedTime() {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }

  const formatter = new Intl.DateTimeFormat('en-US', options)
  const time = formatter.format(new Date())

  return `Viet Nam, ${time}`
}

/**
 * Unfortunately animating CSS variables requires you to type the styles
 * as any in Framer Motion.
 * To prevent to do typecasting everywhere in the code, I created this small
 * wrapper function that does the casting for us, as well as still checks pretty
 * well that we either input a value motion value, or a string looking like a css
 * variable.
 * @see: https://www.framer.com/motion/component/#%23%23animating-css-variables
 */
type MotionStyleWithCssVar = {
  [K in keyof MotionStyle as K | `--${string}`]:
    | MotionStyle[K]
    | MotionValue<number>
    | MotionValue<string>
    | MotionValue<any>
}

export const stylesWithCssVar = (styles: MotionStyleWithCssVar) => styles as any

{
  /* <LayoutCursorWrapper
        cursorVariants={cursorVariants}
        renderContent={(handleMouseEnter, handleMouseLeave) => (
          <React.Fragment>
            <div
              className='p-8 bg-white rounded shadow m-4'
              onMouseEnter={() => handleMouseEnter('project', 'View')}
              onMouseLeave={handleMouseLeave}
            >
              <span className='text-lg font-medium'>
                Project: Discord Onboarding
              </span>
            </div>

            <div
              className='p-8 bg-white rounded shadow m-4'
              onMouseEnter={() => handleMouseEnter('contact', '👋')}
              onMouseLeave={handleMouseLeave}
            >
              <span className='text-lg font-medium'>Want to Chat?</span>
            </div>
          </React.Fragment>
        )}
      /> */
}
