import '../styles/globals.scss'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { cn } from '@/lib/utils'
import { generateSeoMetadata } from '@/lib/seo'
import WrapperLayout from '@/providers/WrapperLayout'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

const font = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-heading2',
})

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('seo_meta')
  const translatedTitle = t('title')
  const translatedDescription = t('description')
  return generateSeoMetadata({
    title: translatedTitle,
    description: translatedDescription,
    openGraph: {
      title: translatedTitle,
      description: translatedDescription,
    },
    twitter: {
      title: translatedTitle,
      description: translatedDescription,
    },
  })
}

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
          'bg-dark overflow-x-hidden',
          font.variable,
          font.className
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <WrapperLayout>{children}</WrapperLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
