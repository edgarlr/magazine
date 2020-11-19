import { ArticlesList } from '@components/articles'
import { Layout } from '@components/core'
import { fetchAPI } from '@lib/api'
import { articles } from '@lib/mocks/article-list'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

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
  return { props: { contributor } }
}

function ContributorPage({
  contributor,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className="text-center py-4">
        <div className="relative w-24  h-24   mx-auto my-2">
          {/* <img
            className="absolute h-full w-full object-cover rounded-full"
            src={contributor.urls.profilephoto}
            alt={contributor.name}
          /> */}
        </div>
        <h3 className="font-serif text-2xl">{contributor.name}</h3>
        <p className="text-xs uppercase text-accents-3">{contributor.role}</p>
      </div>
      <h4 className="uppercase pt-4">all contributons</h4>
      <ArticlesList articles={articles} />
    </Layout>
  )
}

export default ContributorPage
