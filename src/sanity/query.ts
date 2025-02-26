import { groq } from 'next-sanity'

/**
 * @CATEGORY
 */
export const categoryPostList = groq`*[_type == "category"] {
    _id,
    title,
    slug,
    meta_description,
    publishedAt,
    "postCount": count(*[_type == "post" && references(^._id)]),
  }`

export const getCategoryRelatedPostQuery = groq`*[_type == "post" && $slug in categories[]->slug. current] [$start..$start + $limit - 1]{
    _id,
    slug,
    _createdAt,
    title,
    body,
    meta_description,
    mainImage,
    "category": categories[]-> {title,slug},
    publishedAt,
}`

export const totalBlogList = groq`count(*[_type == "post" && $slug in categories[]->slug.current])`

/**
 * @POST details/posts
 */

export const postsQuery = groq`*[_type == "post"] | order(_createdAt desc) [$start..$start + $limit - 1]{
    _createdAt,
    _updatedAt,
  title,
  body,
  meta_description,
  mainImage,
  slug,
  "author": author -> {name,slug,image,designation,profiles,bio,about},
  "category": categories[]-> {title,slug},
  publishedAt,
}`

export const postQueryDetail = groq`*[_type == "post" && slug.current == $slug][0]{
  _createdAt,
  _updatedAt,
  publishedAt,
  title,
  body,
publishedAt,
  isSeries,
  tags,
  meta_description,
  mainImage,
  slug,
  "tags": tags[]-> {title,slug},
  "author": author -> {name,slug,image,designation,profiles,bio,about},
  "series":series -> {title,slug},
  "category": categories[]-> {title,slug},
  "numberOfCharacters": length(pt::text(body)),
  "estimatedWordCount": round(length(pt::text(body)) / 5),
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "mainImageWidth": mainImage.asset->metadata.dimensions.width,
    "mainImageHeight": mainImage.asset->metadata.dimensions.height,
      "relatedPosts": *[
    _type == "post" &&
    slug.current != $slug &&
    (
      count(categories[]->slug.current[ @ in ^.^.category[].slug.current ]) > 0 ||
      count(tags[]->slug.current[ @ in ^.^.tags[].slug.current ]) > 0
    )
  ] | order(_createdAt desc) [0..7] {
    title,
    slug,
    mainImage,
    publishedAt,
    "category": categories[]-> {title, slug}
  }
}`

/**
 * @DEVLELOPER
 */

export const categoriesDeveloper = groq`*[_type == "categoryDeveloper"] {
    _id,
    title,
    icon,
    slug,
    publishedAt,
    "postCount": count(*[_type == "developer" && references(^._id)]),
  }`

export const developerQueryCategory = groq`
  *[_type == "developer" && $slug in categoryDeveloper[]->slug.current]
  | order(_createdAt desc) [$start..$start + $limit - 1] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    mainImage,
    url,
    tags,
    "categoryDeveloper": categoryDeveloper[]-> {title},
    publishedAt,
  }
`

export const countQueryCategory = groq`count(*[_type == "developer" && $slug in categoryDeveloper[]->slug.current])`

/**
 * @PROJECT
 */

export const categoriesProject = groq`*[_type == "categoryProject"] {
    _id,
    title,
    icon,
    slug,
    publishedAt,
    "postCount": count(*[_type == "project" && references(^._id)]),
  }`

export const projectQueryCategory = groq`*[_type == "project" && $slug in categoryProject[]->slug.current]{
  _id,
  _createdAt,
  _updatedAt,
  title,
  mainImage,
  urlPage,
  urlGithub,
  tags,
  "categoryProject": categoryProject[]-> {title},
  publishedAt,
}`

/**
 * @FOOTER
 */

export const footerQuery = groq`*[_type == "footer"]  {
  heading,
  navigation,
  children[]{
    name,
    link,
    target,
    "imageUrl": image.asset->url
  }
}`

/**
 * @PORFOLIOPAGE
 */

export const portfolioHome = groq`*[_type == "portfolio"]  {
  _id,
  title,
  mainImage,
  backgroundImage,
  tags,
  urlPage
}`

/**
 * @PARALAXIMAGESCROLL
 */

export const paralaxImageScroll = groq`*[_type == "imageGallery"]  {
 _id,
 gallery,
 mainImage
}`

/**
 * @SOCIAL
 */

export const ListSocial = groq`*[_type == "social"]  {
 _id,
 title,
 icon,
 url
}`

/**
 * @VIDEO
 */

export const videoQuery = groq`*[_type == "video"]{
_id,
  title,
   "thumbnail": thumbnail.asset->url,
   "videoFileUrl": videoFile.asset->url,
    videoURL
}`
