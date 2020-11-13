import { Layout } from '@components/core'
import { ArticlesList } from '@components/articles'
import { articles } from '@lib/mocks/article-list'
import { IconList } from '@components/icons'

const Category = () => {
  return (
    <Layout>
      <div className="pt-4 pb-16 text-center">
        <h1 className="font-serif text-4xl mb-2">Category</h1>
        <p className="text-s text-gray-400">
          Explora la historia vista desde un punto de vista objetivo y crítico a
          través de nuestros artículos
        </p>
      </div>
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

export default Category
