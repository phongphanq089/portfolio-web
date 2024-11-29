import type { Metadata } from 'next'
import './globals.scss'
import { cn } from '@/utils/cn'
// import { seoData } from '../components/contants/seo-data'

// export const metadata: Metadata = {
//   metadataBase: new URL('https://phongphan.xyz'),
//   ...seoData,
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn('bg-light font-overusedgrotesk')}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
