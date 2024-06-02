import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { cn } from '@/utils/cn'
import 'aos/dist/aos.css'
import { seoData } from '../components/contants/seo-data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  ...seoData,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn('bg-light', inter.className)}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
