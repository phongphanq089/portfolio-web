import '../styles/globals.scss'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { cn } from '@/lib/utils'
import { generateSeoMetadata } from '@/lib/seo'
import WrapperLayout from '@/providers/WrapperLayout'

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
