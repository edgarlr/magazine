import Contributor from '@components/contribuitors/Contributor'
import ContributorFeatured from '@components/contribuitors/ContributorFeatured'
import { Layout } from '@components/core'
import Hero from '@components/core/Hero/Hero'
import { fetchAPI } from '@lib/api'

export async function getStaticProps() {
  const featured: TContributor[] = await fetchAPI('/contributors?featured=true')
  const contributors: TContributor[] = await fetchAPI(
    '/contributors?featured=false'
  )
  return {
    props: {
      featured,
      contributors,
    },
  }
}

type Props = {
  featured: TContributor[]
  contributors: TContributor[]
}

const ContributorsPage = ({ featured, contributors }: Props) => {
  return (
    <Layout>
      <Hero title="Contributors" />
      <div>
        {featured.map((contributor) => (
          <ContributorFeatured
            contributor={contributor}
            key={contributor.slug}
          />
        ))}
      </div>
      <h4 className="uppercase pt-4">Other contributors</h4>
      <div>
        {contributors.map((contributor) => (
          <Contributor contributor={contributor} key={contributor.slug} />
        ))}
      </div>
    </Layout>
  )
}

export default ContributorsPage
