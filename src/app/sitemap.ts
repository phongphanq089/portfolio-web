// app/sitemap.ts
import { sanityClientFetch } from '@/sanity/lib/sanityClient'
import { MetadataRoute } from 'next'
import { groq } from 'next-sanity'

const blogsQuery = groq`*[_type == "post"]{ "slug": slug.current, "lastModified": _updatedAt }`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://phongphan.xyz'
  const locales = ['en', 'vi']

  const routes = ['', '/resoures', '/project', '/colection']

  let blogs: { slug: string; lastModified: string }[] = []
  try {
    blogs = await sanityClientFetch.fetch(blogsQuery)
  } catch (error) {
    console.error('Error fetching blog slugs for sitemap:', error)
  }
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
  blogs.forEach((blog) => {
    locales.forEach((locale) => {
      // Tạo URL với lang và slug
      const url = `${baseUrl}/${locale}/blogs/${blog.slug}`
      const alternates = locales.map((altLocale) => ({
        href: `${baseUrl}/${altLocale}/blogs/${blog.slug}`,
        hreflang: altLocale,
      }))

      sitemapEntries.push({
        url,
        lastModified: new Date(blog.lastModified), // Lấy thời gian cập nhật từ Sanity
        changeFrequency: 'weekly', // Blog thường cập nhật thường xuyên hơn
        priority: 0.9, // Ưu tiên cao hơn cho bài blog
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
