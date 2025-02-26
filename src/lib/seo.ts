import { Metadata } from 'next'

export const defaultSeoData: Metadata = {
  title: {
    template: '%s | Front-end Developer Phong Phan',
    default: 'Phong Phan - Front-end Developer',
  },
  description:
    'Phong Phan - Front-end Developer specializing in modern web interfaces with Next.js, React, and UI/UX design. Explore my portfolio and personal blog!',
  openGraph: {
    title: 'Phong Phan - Front-end Developer',
    description:
      'Portfolio and blog of Phong Phan, a Front-end Developer skilled in Next.js, React',
    url: 'https://phongphan.xyz',
    siteName: 'Phong Phan Portfolio',
    images: [
      {
        url: 'https://res.cloudinary.com/dyp6oqixq/image/upload/v1717921488/project-dev/banner-hero_scrh3z.png',
        width: 1200,
        height: 630,
        alt: 'Phong Phan - Front-end Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phong Phan - Front-end Developer',
    description:
      'Discover the portfolio and blog of Phong Phan, a Front-end Developer with expertise in Next.js and React.',
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
    'Front-end Developer, Phong Phan, Next.js, React, UI/UX, Web Design, Portfolio',
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
