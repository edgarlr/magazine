import { ArticlesList } from '@components/article'
import { fetchAPI, getMediaURL } from '@lib/api'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ExternalLink from '@components/ui/Link/ExternalLink'
import Image from 'next/image'
import { Layout } from '@components/common/Layout'
import Custom404 from 'pages/404'
import Twitter from '@components/icons/Twitter'

export async function getStaticPaths() {
  // If you don't have too many contributors you can uncomment
  // this code and pre-build each page instead.

  // const slugs: TContributor[] = await fetchAPI('/contributors')
  // return {
  //   paths: slugs.map((contributor) => `/contributors/${contributor.slug}`),
  //   fallback: false,
  // }

  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const contributor: TContributor = (
    await fetchAPI(`/contributors?slug=${params?.slug}`)
  )[0]

  const articles: TArticle[] = await fetchAPI(
    `/articles?author.slug=${params?.slug}`
  )

  // No props will trigger a 404
  if (!contributor) return { props: {} }
  return { props: { contributor, articles } }
}

function ContributorPage({
  contributor,
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (!isFallback && !contributor) {
    return <Custom404 />
  }

  // if featuared is diferent than undefined it will be true
  const isFeatured = !!contributor?.featured

  const thumbnailUrl = getMediaURL(
    contributor?.featured?.profile_image.formats.thumbnail?.url
  )

  return (
    <Layout>
      <section className="text-center py-4">
        {isFeatured && (
          <figure className="relative w-24 h-24 mx-auto my-6">
            <Image
              src={thumbnailUrl}
              className="rounded-full"
              alt={`${contributor?.name} profile`}
              layout="fill"
            />
          </figure>
        )}
        <h3 className="serif mt-0">{contributor?.name}</h3>
        <p className="text-sm font-serif uppercase  mb-2">
          {contributor?.role}
        </p>
        {contributor?.urls?.twitter && (
          <ExternalLink
            to={`https://twitter.com/${contributor?.urls.twitter}`}
            ariaLabel="Contributor's twitter"
            className="flex w-max mx-auto items-center opacity-60 hover:opacity-100"
          >
            <span className="mr-2">
              <Twitter width="18" height="18" />
            </span>
            {contributor?.urls.twitter}
          </ExternalLink>
        )}
        {isFeatured && (
          <p className="text-center py-2 leading-tight mt-8 lg:w-4/6 lg:mx-auto">
            {contributor?.featured?.description}
          </p>
        )}
      </section>
      <ArticlesList articles={articles || []} title="all contributons" />
    </Layout>
  )
}

export default ContributorPage
