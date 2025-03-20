import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Áp dụng cho tất cả các bot
      allow: '/', // Cho phép crawl toàn bộ trang
      disallow: '/private/', // Không cho phép crawl thư mục /private
    },
    sitemap: 'https://example.com/sitemap.xml', // Liên kết đến sitemap
  }
}
