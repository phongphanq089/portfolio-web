import type { Metadata } from 'next'
import '../styles/globals.scss'
import { Nunito, Inder, Roboto } from 'next/font/google'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { NextIntlClientProvider } from 'next-intl'
import { cn } from '@/lib/utils'
import { generateSeoMetadata } from '@/lib/seo'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { getMessages } from 'next-intl/server'

const font = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-heading2',
})

export const metadata = generateSeoMetadata()

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <html lang={locale} suppressHydrationWarning>
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
