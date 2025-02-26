export interface typeMenuItems {
  title: string
  link: string
  icon?: string
  imgSrc: string
  isNotfound: boolean
}

export interface projectType {
  name: string
  client: string
  description: string
  src: string
  year: number
}

export interface FooterMenuType {
  heading: string
  navigation?: boolean
  children: {
    name: string
    link: string
    target?: true
    image: string
  }[]
}

// ===== BLOG  ==== //
export interface BLogList {
  title: string
  body?: string[]
  meta_description: string
  mainImage: {
    _type: string
    alt: string
    asset: {
      _ref: string
    }
  }
  category: {
    title: string
    slug: object
  }[]
  publishedAt?: string
  _id?: string
  _createdAt?: string
  slug: {
    current: string
    _type: string
  }
}
