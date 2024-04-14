import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Footer from '@/components/shared/Footer'
import { Providers } from '@/components/layout/Provider'
import Header from '@/components/shared/Header'
import { cn } from '@/utils/cn'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NexGenDev | FrontEnd Developer',
  description: 'Next Generation Developer || Web Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn('bg-light dark:bg-dark', inter.className)}
        suppressHydrationWarning
      >
        <Providers
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Providers>
      </body>
    </html>
  )
}
