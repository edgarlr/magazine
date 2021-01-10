import { SITE_URL } from '@lib/constants'
import { fetchAPI } from '@lib/api'
import { NextPageContext } from 'next'

type Props = {
  categories: TCategory[]
  articles: TArticle[]
  pages: TPage[]
  contributors: TContributor[]
}

const createSitemap = ({
  articles,
  categories,
  contributors,
  pages,
}: Props) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <url>
      <loc>${SITE_URL}</loc>
    </url>

    ${categories
      .map(({ slug }) => {
        return `
                <url>
                    <loc>${`${SITE_URL}/${slug}`}</loc>
                </url>
            `
      })
      .join('')}
    ${articles
      .map(({ slug }) => {
        return `
                <url>
                    <loc>${`${SITE_URL}/articles/${slug}`}</loc>
                    <changefreq>daily</changefreq>
                </url>
            `
      })
      .join('')}
    ${pages
      .map(({ slug }) => {
        return `
                <url>
                    <loc>${`${SITE_URL}/pages/${slug}`}</loc>
                </url>
            `
      })
      .join('')}

    <url>
      <loc>${`${SITE_URL}/contributors`}</loc>
    </url>

    ${contributors
      .map(({ slug }) => {
        return `
                <url>
                    <loc>${`${SITE_URL}/contributors/${slug}`}</loc>
                </url>
            `
      })
      .join('')}
    </urlset>
    `

export async function getServerSideProps({ res }: NextPageContext) {
  const [categories, articles, pages, contributors]: [
    TCategory[],
    TArticle[],
    TPage[],
    TContributor[]
  ] = await Promise.all([
    fetchAPI('/categories'),
    fetchAPI('/articles'),
    fetchAPI('/pages'),
    fetchAPI('/contributors'),
  ])
  res?.setHeader('Content-Type', 'text/xml')
  res?.write(createSitemap({ categories, articles, pages, contributors }))
  res?.end()
  return {
    props: {}, // will be passed to the page component as props
  }
}

// Nullish component
export default () => null
