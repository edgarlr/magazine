import { IconBookmark, IconThreeDots } from '@components/icons'
import dateFormatter from '@lib/dateFormatter'

type Props = {
  title: string
  author: string
  category: string
  date: string
  image: string
}

const ArticleCover = ({ title, author, category, date, image }: Props) => {
  return (
    <div className="pt-6 pb-4 border-b border-gray-600 relative text-gray-500">
      <div>
        <img src={image} alt={title} className="with-full" />
      </div>
      <div className="pt-4">
        <h6 className="uppercase text-xs font-bold text-purple-400">
          {category}
        </h6>
        <h3 className="font-serif capitalize text-2xl text-white">{title}</h3>
        <p className="font-serif text-sm text-white">
          By <span className="italic">{author}</span>
        </p>
        <span className="text-xs">{dateFormatter(date)}</span>
      </div>
      <div className="absolute bottom-0 right-0 pb-3">
        <button className="p-2">
          <IconBookmark />
        </button>
        <button className="p-2">
          <IconThreeDots />
        </button>
      </div>
    </div>
  )
}

export default ArticleCover
