const Contributor = ({ contributor }: { contributor: TContributor }) => {
  return (
    <div className="py-4 border-b border-accents-2">
      <h3 className="font-serif text-lg">{contributor.name}</h3>
      <p className="text-xs capitalize text-accents-3">
        {contributor.jobtitle}
      </p>
    </div>
  )
}

export default Contributor
