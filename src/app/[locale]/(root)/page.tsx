import BannerHerov2 from './components/BannerHerov2'
import Service from './components/service/layout'

const HomePage = async () => {
  return (
    <div className='h-full'>
      <BannerHerov2 />
      <Service />
    </div>
  )
}

export default HomePage
