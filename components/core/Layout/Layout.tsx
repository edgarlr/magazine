import { Footer, Header, Nav } from '@components/core'
import OfflineBanner from '../OfflineBanner'

type Props = {
  children: React.ReactNode
  categories: TCategory[]
  pages: TPage[]
}

const Layout = ({ children, categories, pages }: Props) => {
  return (
    <>
      <Header />
      <Nav categories={categories} />
      <main className="min-h-screen px-4 pt-14 pb-20 flex flex-col">
        {children}
      </main>
      <OfflineBanner />
      <Footer categories={categories} pages={pages} />
    </>
  )
}

export default Layout
