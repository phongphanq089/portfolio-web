import TextParalaxScroll from '@/components/shared/TextParalaxScroll'
import { sanityFetch } from '@/sanity/sanityFetch'
import { SanityDocument } from 'next-sanity'
import SectionWrapperSticky from './components/SectionWrapperSticky'
import { portfolioHome } from '@/sanity/query'
import FooterV2 from '@/components/shared/Footer/Index'
import PixelTrail from '@/components/shared/Footer/BackgroundCircles'
import PixelTrailDemo from '@/components/shared/Footer/PixelTrailDemo'

const HomePage = async () => {
  return (
    <div className='h-full '>
      <SectionWrapperSticky />

      <div>
        <PixelTrailDemo />

        <FooterV2 />
      </div>
    </div>
  )
}

export default HomePage
