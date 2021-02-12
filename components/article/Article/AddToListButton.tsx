import Bookmark from '@components/icons/Bookmark'
import { Button } from '@components/ui/Button'
import { useList } from '@lib/hooks/use-list'

type Props = {
  article: TArticle
}

const AddToListButton = ({ article }: Props) => {
  const { list, addToList, removeFromList } = useList()
  const isOnList = list.some((item: TArticle) => item.slug === article.slug)

  const onButtonClick = async () => {
    if (!isOnList) {
      addToList(article)
    } else {
      removeFromList(article)
    }
  }

  return (
    <Button onClick={onButtonClick} ariaLabel="Add to list">
      <Bookmark style={isOnList ? { fill: 'currentColor' } : {}} />
    </Button>
  )
}

export default AddToListButton
