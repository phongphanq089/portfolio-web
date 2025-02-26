import { type SchemaTypeDefinition } from 'sanity'
import categoryPost from './schemas/categories-post'
import post from './schemas/post'
import tags from './schemas/tags'
import blockEditor from './schemas/block-editor'
import video from './schemas/video'
import resource from './schemas/resource'
import categoriesResource from './schemas/categories-resource'
import portfolioPage from './schemas/portfolio-page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    portfolioPage,
    post,
    categoryPost,
    tags,
    blockEditor,
    video,
    resource,
    categoriesResource,
  ],
}
