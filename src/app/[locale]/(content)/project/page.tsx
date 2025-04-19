import React from 'react'

import BlockIntroduceProject from './components/BlockIntroduceProject'
import { sanityClientFetch } from '@/sanity/lib/sanityClient'
import { portfolioHome } from '@/sanity/lib/query'
import { ListProjectType } from '@/types'
import ListProject from './components/ListProject'

const PageProject = async () => {
  let listProject
  try {
    listProject =
      await sanityClientFetch.fetch<ListProjectType[]>(portfolioHome)
  } catch (error) {
    console.error('Error fetching categories:', error)
  }

  return (
    <div className='relative z-10'>
      <BlockIntroduceProject />
      <ListProject listProject={listProject as ListProjectType[]} />
    </div>
  )
}

export default PageProject
