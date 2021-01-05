import Link from 'next/link'

const ExitPreviewButton = () => {
  return (
    <Link href="/api/exit-preview">
      <h6 className="fixed bottom-0 p-3 left-0 right-0 bg-pink text-primary z-20 text-center uppercase">
        Exit preview mode
      </h6>
    </Link>
  )
}

export default ExitPreviewButton
