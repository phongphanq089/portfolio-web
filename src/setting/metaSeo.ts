import { og } from './config'

export const seoData = {
  title: {
    template: '%s | Web Developer and Designer ',
    default: 'Phong Phan - Web Developer and Designer',
  },
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/ico',
        url: '/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-chrome-192x192.png',
      },
    ],
  },

  description:
    'A Fullstack Developer helping startups all around the world gain their unfair advantage through innovative web development solutions.',
  applicationName: 'Phong Phan - Web Developer and Designer',
  authors: [
    {
      name: 'Phong Phan - Web Developer and Designer',
      url: 'https://phongphan.xyz',
    },
  ],
  creator: 'Phong Phan - Web Developer and Designer',
  publisher: 'Phong Phan - Web Developer and Designer',
  keywords: [
    'Front end developer',
    'Phong Phan',
    'Web Developer',
    'Fullstack Developer ',
  ],
  openGraph: {
    title: 'Phong Phan - Web Developer and Designer',
    description:
      'A Fullstack Developer helping startups all around the world gain their unfair advantage through innovative web development solutions.',
    url: 'https://phongphan.xyz',
    siteName: 'Phong Phan - Web Developer and Designer',
    images: [
      {
        url: 'https://res.cloudinary.com/dyp6oqixq/image/upload/v1717921488/project-dev/banner-hero_scrh3z.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_VN',
    type: 'website',
    twitter: {
      card: 'summary_large_image',
      title: og.title,
      description: og.description,
      images: [og.image],
    },
  },
}
