import { ArticlesList } from '@components/article'
import { useIndexedState } from '@lib/hooks/use-indexed-state'
import Link from 'next/link'

const ListsPage = () => {
  const [list] = useIndexedState<TArticle[]>('saved', [])
  return (
    <>
      <ul>
        <Link href="/lists">
          <li className="underline">Saved</li>
        </Link>
        <Link href="/lists/archive">
          <li>Archive</li>
        </Link>
      </ul>
      <ArticlesList title={`${list.length} Articles`} articles={list} />
    </>
  )
}

export default ListsPage
