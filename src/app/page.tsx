import LayoutWrapper from '@/components/layout/LayoutWrapper'
import BannerHero from '@/components/pages/home/banner-hero'
import ListProject from '@/components/pages/home/projects'
import CardAbout from '@/components/pages/home/card-about'
import SkillDeveloper from '@/components/pages/home/skill-developer'
import ImageParalaxSroll from '@/components/pages/home/ImageParalaxSroll'

export default function Home() {
  return (
    <LayoutWrapper>
      <BannerHero />
      <div className='bg-black py-8 z-20 relative rounded-2xl'>
        <CardAbout />
        <SkillDeveloper />
      </div>
      <ListProject />
      <ImageParalaxSroll />
    </LayoutWrapper>
  )
}
