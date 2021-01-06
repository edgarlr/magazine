import AddToListButton from './AddToListButton'
import ShareButton from '@components/common/ShareButton'

const ActionButtons = ({ article }: { article: TArticle }) => {
  return (
    <ul className="flex justify-end">
      <li>
        <AddToListButton article={article} />
      </li>
      <li>
        <ShareButton
          path={`/articles/${article.slug}`}
          title={article.title}
          message={'Check this article'}
        />
      </li>
    </ul>
  )
}

export default ActionButtons
