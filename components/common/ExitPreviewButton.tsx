import Link from 'next/link'

const ExitPreviewButton = () => {
  return (
    <Link href="/api/exit-preview">
      <p className="fixed bottom-0 p-3 left-0 right-0 bg-pink text-primary z-20 text-center uppercase">
        Exit preview mode
      </p>
    </Link>
  )
}

export default ExitPreviewButton
