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

type TCategory = {
  title: string
  slug: string
}
