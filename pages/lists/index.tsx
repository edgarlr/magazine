import { ArticleCard } from '@components/article'
import { Layout } from '@components/common/Layout'
import Bookmark from '@components/icons/Bookmark'
import { useList } from '@lib/hooks/use-list'

const ListsPage = () => {
  const { list } = useList()
  return (
    <Layout>
      {list && list.length !== 0 ? (
        <section>
          <div className="py-2 flex justify-between items-center">
            <h6 className="uppercase">{list.length} Articles</h6>
          </div>
          {list.map((article) => (
            <ArticleCard article={article} key={article.slug} route="lists" />
          ))}
        </section>
      ) : (
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
      )}
    </Layout>
  )
}

export default ListsPage
