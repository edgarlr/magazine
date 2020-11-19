type Props = {
  title: string
  description?: string
}

const Hero = ({ title, description }: Props) => {
  return (
    <div className="pt-4 pb-16 text-center">
      <h1 className="font-serif text-3xl mb-2">{title}</h1>
      {description && <p className="text-s text-gray-400">{description}</p>}
    </div>
  )
}

export default Hero
