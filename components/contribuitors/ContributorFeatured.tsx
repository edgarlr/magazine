const ContributorFeatured = ({
  contributor,
}: {
  contributor: TContributorFeatured
}) => {
  return (
    <div className="flex py-2">
      <div className="relative w-16 h-16">
        <img
          className="absolute h-full w-full object-cover rounded-full"
          src={contributor.urls.profilephoto}
          alt={contributor.name}
        />
      </div>
      <div className="ml-5">
        <h3 className="font-serif text-2xl">{contributor.name}</h3>
        <p className="text-xs uppercase text-accents-3">
          {contributor.jobtitle}
        </p>
      </div>
    </div>
  )
}

export default ContributorFeatured
