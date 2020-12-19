// import { ArticlesList } from '@components/article'
import { useLocalStorage } from '@lib/hooks/use-local-storage'

const ListsPage = () => {
  const [list] = useLocalStorage<string[]>('saved', [])
  return (
    <>
      {/* <ArticlesList articles={list} /> */}
      {list.map((slug) => (
        <p key={slug}>{slug}</p>
      ))}
    </>
  )
}

export default ListsPage
