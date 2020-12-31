import { IconBookmark } from '@components/icons'
import { useIndexedState } from '@lib/hooks/use-indexed-state'
// import { useList } from '@lib/hooks/use-list'
// import { useLocalStorage } from '@lib/hooks/use-local-storage'
import { set, del } from 'idb-keyval'

type Props = {
  article: TArticle
}

const AddToListButton = ({ article }: Props) => {
  // const [list, setList] = useLocalStorage<TArticle[]>('saved', [])
  const [list, setList] = useIndexedState<TArticle[]>('saved', [])

  const isOnList = list.some((item) => item.slug === article.slug)

  const addToList = async (article: TArticle) => {
    setList([...list, article])
    await set(article.slug, article)
  }

  const removeFromList = (article: TArticle) => {
    setList(list.filter((item: TArticle) => item.slug !== article.slug))
    del(article.slug)
  }

  const onButtonClick = () => {
    if (isOnList) {
      removeFromList(article)
    } else {
      addToList(article)
    }
  }

  return (
    <button className="p-2" onClick={onButtonClick}>
      <IconBookmark style={isOnList ? { fill: 'currentColor' } : {}} />
    </button>
  )
}

export default AddToListButton
