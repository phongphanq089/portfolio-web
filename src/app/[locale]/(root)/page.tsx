import BannerHero from './components/BannerHero'
import Service from './components/service/layout'

const HomePage = async () => {
  return (
    <div className='h-full'>
      <BannerHero />
      <Service />
      {/* <div className='h-screen'></div>
      <div className='h-screen'></div> */}
    </div>
  )
}

export default HomePage
