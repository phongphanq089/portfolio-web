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
