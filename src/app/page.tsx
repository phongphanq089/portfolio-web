import LayoutWrapper from '@/components/layout/LayoutWrapper'
import BannerHero from '@/components/pages/home/banner-hero'
import ListProject from '@/components/pages/home/projects'
import CardAbout from '@/components/pages/home/card-about'
import SkillDeveloper from '@/components/pages/home/skill-developer'
import ImageParalaxSroll from '@/components/pages/home/ImageParalaxSroll'
import TextSrcollMotion from '@/components/shared/TextSrcollMotion'

export default function Home() {
  return (
    <LayoutWrapper>
      <BannerHero />
      <div className='bg-black py-8 z-20 relative rounded-2xl'>
        <CardAbout />
        <SkillDeveloper />
      </div>
      <div className='overflow-x-clip'>
        <TextSrcollMotion />
      </div>
      <ListProject />

      <ImageParalaxSroll />
    </LayoutWrapper>
  )
}
