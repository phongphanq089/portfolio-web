// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://phongphan.xyz'
  const locales = ['en', 'vi']
  // const routes = ['', '/component-ui', '/blogs', '/resoures', '/video']

  const routes = ['', '/resoures']

  // Tạo danh sách các URL cho từng ngôn ngữ
  const sitemapEntries: MetadataRoute.Sitemap = []

  routes.forEach((route) => {
    locales.forEach((locale) => {
      const url = `${baseUrl}/${locale}${route}`.replace('//', '/')
      const alternates = locales.map((altLocale) => ({
        href: `${baseUrl}/${altLocale}${route}`.replace('//', '/'),
        hreflang: altLocale,
      }))

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: alternates.reduce(
          (acc, { href, hreflang }) => {
            acc[hreflang] = href
            return acc
          },
          {} as Record<string, string>
        ),
      })
    })
  })

  return sitemapEntries
}
