import { ArticlesList } from '@components/articles'
import { Layout } from '@components/core'
import { articles } from '@lib/mocks/article-list'

const ListsPage = () => {
  return (
    <Layout>
      <ArticlesList articles={articles} />
    </Layout>
  )
}

export default ListsPage
