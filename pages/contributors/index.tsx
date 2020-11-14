import Contributor from '@components/contribuitors/Contributor'
import ContributorFeatured from '@components/contribuitors/ContributorFeatured'
import { Layout } from '@components/core'
import { otherTeam, team } from '@lib/mocks/team'

const ContributorsPage = () => {
  return (
    <Layout>
      <h1 className="font-serif text-2xl uppercase text-center pt-2 pb-6">
        Contributors
      </h1>
      <div>
        {team.map((contributor) => (
          <ContributorFeatured
            contributor={contributor}
            key={contributor.slug}
          />
        ))}
      </div>
      <h4 className="uppercase pt-4">Other contributors</h4>
      <div>
        {otherTeam.map((contributor) => (
          <Contributor contributor={contributor} key={contributor.slug} />
        ))}
      </div>
    </Layout>
  )
}

export default ContributorsPage
