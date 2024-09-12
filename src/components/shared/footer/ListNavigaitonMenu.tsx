import { LinkPreview } from '@/components/ui/LinkPreview'
import { SanityDocument } from 'next-sanity'
import Link from 'next/link'

const ListNavigaitonMenu = ({ footer }: { footer: SanityDocument }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-12 gap-4 pb-3 relative z-10'>
      {footer?.map((navigate: SanityDocument, index: number) => {
        return (
          <div
            className={
              navigate.navigation
                ? 'md:col-span-4 xl:col-span-6'
                : 'md:col-span-4 xl:col-span-3'
            }
            key={`${index}-${navigate.heading}`}
          >
            <h3 className='w-full border-b border-[#9ca3af] mb-2 pb-1 font-bold text-[18px] xl:text-sm whitespace-nowrap'>
              {navigate.heading}
            </h3>
            <ul>
              {navigate.children?.map((menu: any, index: number) => {
                return (
                  <li key={`${index}-${menu.name}`}>
                    {menu.target ? (
                      <LinkPreview
                        url={menu.link}
                        imageSrc={menu.imageUrl}
                        isStatic
                        className='text-color-3 font-normal text-[18px]  md:text-xs xl:text-sm'
                      >
                        {menu.name}
                      </LinkPreview>
                    ) : (
                      <Link
                        href={menu.link}
                        className='text-color-3 font-normal text-[18px] md:text-xs xl:text-sm'
                      >
                        {menu.name}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default ListNavigaitonMenu
