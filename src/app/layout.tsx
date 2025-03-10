import type { Metadata } from 'next'
import '../styles/globals.scss'
import { Nunito } from 'next/font/google'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { cn } from '@/lib/utils'
import { generateSeoMetadata } from '@/lib/seo'

const font = Nunito({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-heading2',
})

export const metadata = generateSeoMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'bg-light dark:bg-dark overflow-x-hidden',
          font.variable,
          font.className
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
