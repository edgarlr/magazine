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
    <div>
      <div>
        <h6 className="uppercase">{category}</h6>
        <h3 className="font-serif capitalize text-2xl">{title}</h3>
        <p>
          por: <span className="italic">{author}</span>
        </p>
        <span>{date}</span>
      </div>
      <div>
        <img src={image} alt={title} />
      </div>
    </div>
  )
}

export default ArticleCoverFeatured
