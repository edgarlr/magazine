type TArticle = {
  id: number
  title: string
  slug: string
  author: TContributor
  content: string
  category: TCategory
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
  cover: null
}

type TContributor = {
  id: number
  name: string
  slug: string
  role: string
  published_at: Date | string
  created_at: Date | string
  updated_at: Date | string
  urls: {
    id: number
    instagram: string | null
    twitter: string | null
  }
  featured: {
    id: number
    description: string
    profile_image: TStrapiImage
  } | null
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
