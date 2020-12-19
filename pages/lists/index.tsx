import { ArticlesList } from '@components/article'
import { useLocalStorage } from '@lib/hooks/use-local-storage'
import Link from 'next/link'

const ListsPage = () => {
  const [list] = useLocalStorage<TArticle[]>('saved', [])
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
