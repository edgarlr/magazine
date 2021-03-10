import Contributor from '@components/contributor/Contributor'
import ContributorFeatured from '@components/contributor/ContributorFeatured'
import { Layout } from '@components/common/Layout'
import Hero from '@components/common/Hero/Hero'
import { fetchAPI } from '@lib/api'
import { partition } from '@lib/partition'
import { InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
  const contributors: TContributor[] = await fetchAPI('/contributors')
  return { props: { contributors } }
}

export function ContributorsPage({
  contributors,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // Create 2 differents arrays based on the condition
  const [featured, others] = partition<TContributor>(
    contributors,
    (i) => !!i.featured
  )

  return (
    <Layout>
      <Hero title="Contributors" />
      <ul className="flex flex-col flex-wrap justify-between md:flex-row md:py-6">
        {featured.map((contributor) => (
          <ContributorFeatured
            contributor={contributor}
            key={contributor.slug}
          />
        ))}
      </ul>
      <h6 className="font-normal pt-4">more contributors</h6>
      <ul>
        {others.map((contributor) => (
          <Contributor contributor={contributor} key={contributor.slug} />
        ))}
      </ul>
    </Layout>
  )
}

export default ContributorsPage
