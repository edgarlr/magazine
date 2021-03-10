type Props = {
  title: string
  description?: string
}

const Hero = ({ title, description }: Props) => {
  return (
    <div className="pb-5 text-center">
      <h1 className="serif text-2xl mb-2">{title}</h1>
      {description && <p className="text-s text-primary-60">{description}</p>}
    </div>
  )
}

export default Hero
