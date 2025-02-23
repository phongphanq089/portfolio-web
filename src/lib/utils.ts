import { urlFor } from '@/sanity/config'
import { type ClassValue, clsx } from 'clsx'
import { MotionStyle, MotionValue } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import SVGPathCommander from 'svg-path-commander'

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

export const extractHeadings = (content: any) => {
  return content
    .filter(
      (block: any) =>
        (block._type === 'block' && block.style === 'h3') ||
        block.style === 'h2'
    )
    .map((block: any) => ({
      text: block.children.map((child: any) => child.text).join(' '),
      id: block._key,
    }))
}

// Function to convert SVG path `d` to vertices
export function parsePathToVertices(path: string, sampleLength = 15) {
  // Convert path to absolute commands
  const commander = new SVGPathCommander(path)

  const points: { x: number; y: number }[] = []
  let lastPoint: { x: number; y: number } | null = null

  // Get total length of the path
  const totalLength = commander.getTotalLength()
  let length = 0

  // Sample points along the path
  while (length < totalLength) {
    const point = commander.getPointAtLength(length)

    // Only add point if it's different from the last one
    if (!lastPoint || point.x !== lastPoint.x || point.y !== lastPoint.y) {
      points.push({ x: point.x, y: point.y })
      lastPoint = point
    }

    length += sampleLength
  }

  // Ensure we get the last point
  const finalPoint = commander.getPointAtLength(totalLength)
  if (
    lastPoint &&
    (finalPoint.x !== lastPoint.x || finalPoint.y !== lastPoint.y)
  ) {
    points.push({ x: finalPoint.x, y: finalPoint.y })
  }

  return points
}

export function calculatePosition(
  value: number | string | undefined,
  containerSize: number,
  elementSize: number
): number {
  // Handle percentage strings (e.g. "50%")
  if (typeof value === 'string' && value.endsWith('%')) {
    const percentage = parseFloat(value) / 100
    return containerSize * percentage
  }

  // Handle direct pixel values
  if (typeof value === 'number') {
    return value
  }

  // If no value provided, center the element
  return (containerSize - elementSize) / 2
}
