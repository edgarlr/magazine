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

type TContributorFeatured = {
  name: string
  jobtitle: string
  slug: string
  urls: {
    profilephoto: string
  }
}

type TContributor = {
  name: string
  jobtitle: string
  slug: string
}
