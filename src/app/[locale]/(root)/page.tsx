import BannerHerov2 from './components/BannerHerov2'
import MyBlog from './components/MyBlog'
import Service from './components/service/layout'

const HomePage = async () => {
  return (
    <div className='h-full'>
      <BannerHerov2 />
      <Service />
      <MyBlog />
    </div>
  )
}

export default HomePage
