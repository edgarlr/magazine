import { ArticleCard } from '@components/article'
import { useState, useEffect } from 'react'
import { getAllStoredContent } from '@lib/storage'
import { Layout } from '@components/common/Layout'
import Bookmark from '@components/icons/Bookmark'

const ListsPage = () => {
  const [list, setList] = useState<TArticle[]>([])

  useEffect(() => {
    const getStoredArticles = async () => {
      const storedArticles = await getAllStoredContent()
      setList(storedArticles)
    }
    getStoredArticles()
  }, [])

  if (!list || list.length === 0) {
    return (
      <Layout>
        <div className="text-center my-auto">
          <p>You haven&apos;t saved anything yet.</p>
          <p>
            Tap the{' '}
            <span>
              <Bookmark className="inline-block" />
            </span>{' '}
            icon to save them for later.
          </p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <section>
        <div className="py-2 flex justify-between items-center">
          <h6 className="uppercase">{list.length} Articles</h6>
        </div>
        {list.map((article) => (
          <ArticleCard article={article} key={article.slug} route="lists" />
        ))}
      </section>
    </Layout>
  )
}

export default ListsPage
