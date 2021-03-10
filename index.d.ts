type TNavigation = {
  categories: TCategory[]
  pages: TPage[]
}

type TToast = {
  id: number
  content: string
}

type TArticle = {
  id: number
  title: string
  slug: string
  author: TContributor
  content: string
  category: TCategory
  description: string
  published_at: Date | string
  created_at: Date | string
  updated_at: Date | string
  cover: TStrapiImage
}

type TCategory = {
  id: number
  title: string
  slug: string
  description: string
  published_at: Date | string
  created_at: Date | string
  updated_at: Date | string
  cover: TStrapiImage
}

type TContributor = {
  id: number
  name: string
  slug: string
  role: string
  published_at: Date | string
  created_at: Date | string
  updated_at: Date | string
  urls?: {
    id: number
    twitter?: string
    instagram?: string
    facebook?: string
    linkedin?: string
  }
  featured?: {
    id: number
    description: string
    profile_image: TStrapiImage
  }
}

type TGlobal = {
  id: number
  site_name: string
  description: string
  site_url: string
  published_at: Date
  created_at: Date
  updated_at: Date
  social_urls?: {
    id: number
    twitter?: string
    instagram?: string
    facebook?: string
    youtube?: string
    linkedin?: string
    contact_email?: string
  }
  cover: TStrapiImage
}

type TPage = {
  id: number
  title: string
  slug: string
  description: string
  content: string
  published_at: Date
  created_at: Date
  updated_at: Date
  cover?: TStrapiImage
}

// Strapi Types
type TStrapiImage = {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: {
    thumbnail?: TStrapiImageFormat
    large?: TStrapiImageFormat
    medium?: TStrapiImageFormat
    small?: TStrapiImageFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  created_at: Date | string
  updated_at: Date | string
}

type TStrapiImageFormat = {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  path: null
  url: string
}
