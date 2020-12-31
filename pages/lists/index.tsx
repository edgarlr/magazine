import { ArticlesList } from '@components/article'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getAllStoredContent } from '@lib/storage'
import { IconBookmark } from '@components/icons'

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
      <div className="text-center my-auto">
        <p>You haven&apos;t saved anything yet.</p>
        <p>
          Tap the{' '}
          <span>
            <IconBookmark className="inline-block" />
          </span>{' '}
          icon to save them for later.
        </p>
      </div>
    )
  }

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
