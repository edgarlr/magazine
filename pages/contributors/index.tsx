import Contributor from '@components/contribuitors/Contributor'
import ContributorFeatured from '@components/contribuitors/ContributorFeatured'
import { Layout } from '@components/core'
import Hero from '@components/core/Hero/Hero'
import { fetchAPI } from '@lib/api'
import { partition } from '@lib/partition'
import { InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
  const contributors: TContributor[] = await fetchAPI('/contributors')
  const categories: TCategory[] = await fetchAPI('/categories')
  return { props: { contributors, categories } }
}

export function ContributorsPage({
  contributors,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // Create 2 differents arrays based on the condition
  const [featured, others] = partition<TContributor>(
    contributors,
    (i) => i.featured !== null
  )

  return (
    <Layout nav={categories}>
      <Hero title="Contributors" />
      <div>
        {featured.map((contributor) => (
          <ContributorFeatured
            contributor={contributor}
            key={contributor.slug}
          />
        ))}
      </div>
      <h4 className="uppercase pt-4">Other ontributors</h4>
      <div>
        {others.map((contributor) => (
          <Contributor contributor={contributor} key={contributor.slug} />
        ))}
      </div>
    </Layout>
  )
}

export default ContributorsPage
