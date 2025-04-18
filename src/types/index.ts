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
  title: Record<string, string>
  body?: string[]
  meta_description: Record<string, string>
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

// ===== RESOURE  ==== //

export interface categoryResource {
  _id: string
  title: string
  slug: {
    current: string
    _type: 'slug'
  }
  icon: {
    asset: {
      _ref: string
    }
  }
}

export interface developerResource {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  mainImage: {
    alt: string
    asset: {
      _ref: string
    }
  }
  url: string
  tags?: string[]
  categoryDeveloper?: { title: string }[]
  publishedAt: string
}

export interface QuotesType {
  _id: string
  Description: Record<string, string>
  Image: {
    alt: string
    asset: {
      _ref: string
    }
  }
  bgColor: string
}

export interface ListProjectType {
  _id: string
  title: string
  mainImage: {
    alt: string
    asset: {
      _ref: string
    }
  }
  tags: string[]
  urlPage: string
  urlGithub: string
}
