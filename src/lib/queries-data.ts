import { groq } from 'next-sanity'

/**
 * @CATEGORY
 */
export const getCategoriesQuery = groq`*[_type == "category"] {
    _id,
    title,
    slug,
    meta_description,
    publishedAt,
    "postCount": count(*[_type == "post" && references(^._id)]),
  }`

export const getCategoryRelatedPostQuery = groq`*[_type == "post" && $slug in categories[]->slug.     current]{
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

/**
 * @POST details/posts
 */

export const postsQuery = groq`*[_type == "post"] | order(_createdAt desc){
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
    "mainImageHeight": mainImage.asset->metadata.dimensions.height
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

export const developerQueryCategory = groq`*[_type == "developer" && $slug in categoryDeveloper[]->slug.current]{
  _id,
  _createdAt,
  _updatedAt,
  title,
  mainImage,
  url,
  tags,
  "categoryDeveloper": categoryDeveloper[]-> {title},
  publishedAt,
}`

export const countQuery = groq`count(*[_type == "developer" && $slug in categoryDeveloper[]->slug.current])`

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
