import { urlFor } from '@/sanity/config'
import { type ClassValue, clsx } from 'clsx'
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
