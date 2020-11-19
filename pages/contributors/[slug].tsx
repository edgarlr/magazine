// import { ArticlesList } from '@components/articles'
import { Layout } from '@components/core'
import { fetchAPI, getMediaURL } from '@lib/api'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

export async function getStaticPaths() {
  // If you don't have to many contributors you can uncomment this code and pre-build each page instead
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
  if (!contributor) return { props: {} }
  return { props: { contributor } }
}

function ContributorPage({
  contributor,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (!isFallback && !contributor?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const isFeatured = contributor?.featured !== null

  const thumbnailUrl = getMediaURL(
    contributor?.featured?.profile_image.formats.thumbnail?.url
  )

  return (
    <Layout>
      <div className="text-center py-4">
        {isFeatured && (
          <div className="relative w-24  h-24   mx-auto my-2">
            <img
              className="absolute h-full w-full object-cover rounded-full"
              src={thumbnailUrl}
              alt="profile"
            />
          </div>
        )}
        <h3 className="font-serif text-2xl">{contributor?.name}</h3>
        <p className="text-xs uppercase text-accents-3">{contributor?.role}</p>
        {contributor?.urls.twitter && (
          <a href={`https://twitter.com/${contributor?.urls.twitter}`}>
            @{contributor?.urls.twitter}
          </a>
        )}
      </div>
      {isFeatured && (
        <p className="text-center py-2">{contributor?.featured?.description}</p>
      )}
      <h4 className="uppercase pt-4">all contributons</h4>
      {/* <ArticlesList articles={articles} /> */}
    </Layout>
  )
}

export default ContributorPage