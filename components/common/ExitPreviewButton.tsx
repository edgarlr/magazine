import Link from 'next/link'

const ExitPreviewButton = () => {
  return (
    <Link href="/api/exit-preview">
      <p className="fixed bottom-4 text-sm rounded-lg p-3 left-6 right-6 bg-accent text-secondary font-bold z-20 text-center uppercase cursor-pointer transform scale-100 transition-transform hover:scale-105 lg:w-1/2 lg:mx-auto">
        Exit preview mode
      </p>
    </Link>
  )
}

export default ExitPreviewButton
