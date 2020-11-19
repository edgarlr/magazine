import { Layout } from '@components/core'
import { ArticlesList } from '@components/articles'
import { articles } from '@lib/mocks/article-list'
import { IconList } from '@components/icons'
import Hero from '@components/core/Hero/Hero'

const CategoryPage = () => {
  return (
    <Layout>
      <Hero
        title="Category"
        description="Explora la historia vista desde un punto de vista objetivo y crítico a través de nuestros artículos"
      />
      <div className="flex justify-between">
        <p className="uppercase font-bold">Entradas</p>
        <button>
          <IconList />
        </button>
      </div>
      <ArticlesList articles={articles} />
    </Layout>
  )
}

export default CategoryPage
