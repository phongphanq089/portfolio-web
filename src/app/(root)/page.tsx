import TextParalaxScroll from '@/components/shared/TextParalaxScroll'
import { sanityFetch } from '@/sanity/sanityFetch'
import { SanityDocument } from 'next-sanity'
import SectionWrapperSticky from './components/SectionWrapperSticky'
import ImageParalaxSroll from './components/ImageParalaxSroll'
import { portfolioHome } from '@/sanity/query'
import SelectWork from './components/selected-work'
import Templates from './components/templates'

const HomePage = async () => {
  const lisProject = await sanityFetch<SanityDocument>({
    query: portfolioHome,
  })
  return (
    <div className='h-full '>
      <SectionWrapperSticky />

      <div className='bg-dark'>
        <SelectWork lisProject={lisProject as SanityDocument} />
      </div>
      <div className='py-10 bg-dark'>
        <TextParalaxScroll />
      </div>
      <Templates />
      {/* <ImageParalaxSroll /> */}
    </div>
  )
}

export default HomePage
