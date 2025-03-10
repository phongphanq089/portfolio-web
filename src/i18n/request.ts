import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import { client } from '@/sanity/lib/sanityClient'

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  const query = `*[_type == "post"] {
    title,
    meta_description,
    body_en,
    body_vi
  }`
  const posts = await client.fetch(query)

  // Biến dữ liệu Sanity thành định dạng messages
  const sanityMessages = posts.reduce((acc: any, post: any) => {
    acc[post.title.en] = {
      title: post.title[locale],
      meta_description: post.meta_description[locale] || null,
      body: locale === 'en' ? post.body_en : post.body_vi,
    }

    return acc
  }, {})

  return {
    locale,
    messages: {
      ...(await import(`../contents/locales/${locale}.json`)).default,
      Posts: sanityMessages,
    },
  }
})
