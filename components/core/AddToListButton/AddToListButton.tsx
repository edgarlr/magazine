import { IconBookmark } from '@components/icons'
import { useList } from '@lib/hooks/use-list'

type Props = {
  article: TArticle
}

const AddToListButton = ({ article }: Props) => {
  const { list, addToList, removeFromList } = useList()

  const isOnList = list.some((item: TArticle) => item.slug === article.slug)

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
