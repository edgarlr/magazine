import { IconBookmark } from '@components/icons'
// import { useList } from '@lib/hooks/use-list'
import { useLocalStorage } from '@lib/hooks/use-local-storage'

type Props = {
  slug: string
}

const AddToListButton = ({ slug }: Props) => {
  const [list, setList] = useLocalStorage<string[]>('saved', [])

  const isOnList = list.includes(slug)

  const addToList = (slug: string) => {
    setList([...list, slug])
  }

  const removeFromList = (slug: string) => {
    setList(list.filter((article: string) => article !== slug))
  }

  const onButtonClick = () => {
    if (isOnList) {
      removeFromList(slug)
    } else {
      addToList(slug)
    }
  }

  return (
    <button className="p-2" onClick={onButtonClick}>
      <IconBookmark style={isOnList ? { fill: 'currentColor' } : {}} />
    </button>
  )
}

export default AddToListButton
