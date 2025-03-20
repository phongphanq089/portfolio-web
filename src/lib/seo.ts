import { Metadata } from 'next'

export const defaultSeoData: Metadata = {
  title: {
    template: '%s | Front-end Developer & Modern Web Architect',
    default:
      'Front-end Developer | Building Scalable Web Apps with React & Next.js',
  },
  description:
    'Building high-performance web applications using React, Next.js, and Headless CMS. Explore advanced techniques in modern front-end development.',
  openGraph: {
    title: 'Front-end Developer | Scalable Web Apps with React & Next.js',
    description:
      'Explore advanced front-end development with React, Next.js, and Headless CMS. Learn best practices, performance optimization, and modern web architecture.',
    url: 'https://phongphan.xyz',
    siteName: 'Phong Phan - Front-end Development Hub',
    images: [
      {
        url: 'https://res.cloudinary.com/dyp6oqixq/image/upload/v1717921488/project-dev/banner-hero_scrh3z.png',
        width: 1200,
        height: 630,
        alt: 'Phong Phan - Front-end Developer & Web Architect',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Front-end Developer | Building with React & Next.js',
    description:
      'Master modern front-end development with React, Next.js, and Headless CMS. Learn best practices and scalable web architecture.',
    creator: '@phongphanDev',
    images: [
      'https://res.cloudinary.com/dyp6oqixq/image/upload/v1717921488/project-dev/banner-hero_scrh3z.png',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords:
    'Front-end Developer, React, Next.js, Headless CMS, Web Development, JavaScript, TypeScript, Modern Web, Performance Optimization',
  alternates: {
    canonical: 'https://phongphan.xyz',
  },
}

export function generateSeoMetadata(
  dynamicData: Partial<Metadata> = {}
): Metadata {
  return {
    ...defaultSeoData,
    ...dynamicData,
    openGraph: {
      ...defaultSeoData.openGraph,
      ...dynamicData.openGraph,
    },
    twitter: {
      ...defaultSeoData.twitter,
      ...dynamicData.twitter,
    },
  }
}
