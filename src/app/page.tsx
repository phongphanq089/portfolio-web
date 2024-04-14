import LayoutWrapper from '@/components/layout/LayoutWrapper'
import SkillDev from '@/components/pages/home/SkillDev'
import SkillMarquee from '@/components/pages/home/SkillMarquee'
import BannerHero from '@/components/pages/home/BannerHero'
import ListProject from '@/components/pages/home/ListProject'
import ListBlog from '@/components/pages/home/ListBlog'

export default function Home() {
  return (
    <LayoutWrapper>
      {/* ================= */}
      <BannerHero />
      {/* ================= */}
      <SkillDev />
      {/* ================= */}
      <SkillMarquee />
      {/* ================= */}
      <ListProject />
      {/* ================= */}
    </LayoutWrapper>
  )
}
