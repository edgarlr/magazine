import { IconBookmark, IconDownload } from '@components/icons'
import dateFormatter from '@lib/dateFormatter'
import s from './ArticleCoverFeatured.module.css'

type Props = {
  title: string
  author: string
  category: string
  date: string
  image: string
}

const ArticleCoverFeatured = ({
  title,
  author,
  category,
  date,
  image,
}: Props) => {
  return (
    <div className="flex items-center h-56 relative text-gray-500  min-w-full mr-20">
      <div className="pt-4">
        <h6 className="uppercase text-sm font-bold text-purple-400">
          {category}
        </h6>
        <h3 className={s.title}>{title}</h3>
        <p className="font-serif text-s text-white">
          By <span className="italic">{author}</span>
        </p>
        <span className="text-sm">{dateFormatter(date)}</span>
      </div>
      <div className="absolute bottom-0 bg-primary left-1/2 transform -translate-x-1/2 ">
        <button className="pl-4">
          <IconBookmark />
        </button>
        <button className="p-4">
          <IconDownload />
        </button>
      </div>
      <div className="relative w-2/3 pb-2/5 transform translate-x-1/3">
        <img
          src={image}
          alt={title}
          className="absolute h-full w-full object-cover"
        />
      </div>
    </div>
  )
}

export default ArticleCoverFeatured
