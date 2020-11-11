import { useTheme } from 'next-themes'
import { NextPage } from 'next'
import { Layout } from '@components/core'

const Home: NextPage = () => {
  const { setTheme } = useTheme()
  return (
    <Layout>
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          Next.js + Tailwind CSS
        </h1>
        <h2 className="text-5xl font-serif">Magazine</h2>
        <button onClick={() => setTheme('dark')}>Light Mode</button>
        <button onClick={() => setTheme('light')}>Light Mode</button>
      </div>
    </Layout>
  )
}

export default Home
