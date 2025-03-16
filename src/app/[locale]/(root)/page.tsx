import BannerHero from './components/BannerHero'
import Service from './components/service/layout'

const HomePage = async () => {
  return (
    <div className='h-full'>
      <BannerHero />
      <Service />
    </div>
  )
}

export default HomePage
