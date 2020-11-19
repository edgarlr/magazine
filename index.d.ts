type TArticleCover = {
  category: string
  slug: string
  title: string
  author: string
  date: string
  urls: {
    image: string
  }
}

type TCategory = {
  id: number
  title: string
  slug: string
  description: string
  published_at: Date
  created_at: Date
  updated_at: Date
  cover: null
}

type TContributor = {
  id: number
  name: string
  slug: string
  role: string
  published_at: Date
  created_at: Date
  updated_at: Date
  urls: [
    {
      __component: string
      id: number
      twitter: string
    }
  ]
  articles: []
}
