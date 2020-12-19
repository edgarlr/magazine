import { ArticlesList } from '@components/article'
import { useLocalStorage } from '@lib/hooks/use-local-storage'
import Link from 'next/link'

const ArchivePage = () => {
  const [list] = useLocalStorage<TArticle[]>('archive', [])
  return (
    <>
      <ul>
        <Link href="/lists">
          <li>Saved</li>
        </Link>
        <Link href="/lists/archive">
          <li className="underline">Archive</li>
        </Link>
      </ul>
      <ArticlesList title={`${list.length} Articles`} articles={list} />
    </>
  )
}

export default ArchivePage
