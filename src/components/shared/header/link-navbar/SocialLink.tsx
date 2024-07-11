import { socialLink } from '@/components/contants/social-link'
import FlipLink from '@/components/ui/FlipLink'

const SocialLink = () => {
  return (
    <ul className='grid grid-cols-2 gap-1 sm:flex  items-center sm:gap-5 px-4 py-4 text-white relative z-10'>
      {socialLink?.map((social, index) => {
        return (
          <li
            className='border rounded-3xl px-3 py-2 bg-transparent'
            key={`${social.name}-${index}`}
          >
            <FlipLink
              href='#'
              className='font-medium  uppercase  sm:text-sm text-[18px] !text-white'
            >
              {social.name}
            </FlipLink>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLink
