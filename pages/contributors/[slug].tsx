import { ArticlesList } from '@components/articles'
import { Layout } from '@components/core'
import { articles } from '@lib/mocks/article-list'
import { team } from '@lib/mocks/team'

const ContributorPage = () => {
  const contributor = team[0]
  return (
    <Layout>
      <div className="text-center py-4">
        <div className="relative w-24  h-24   mx-auto my-2">
          <img
            className="absolute h-full w-full object-cover rounded-full"
            src={contributor.urls.profilephoto}
            alt={contributor.name}
          />
        </div>
        <h3 className="font-serif text-2xl">{contributor.name}</h3>
        <p className="text-xs uppercase text-accents-3">
          {contributor.jobtitle}
        </p>
      </div>
      <h4 className="uppercase pt-4">all contributons</h4>
      <ArticlesList articles={articles} />
    </Layout>
  )
}

export default ContributorPage
