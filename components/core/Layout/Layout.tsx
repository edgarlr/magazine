import { Footer, Header, Nav } from '@components/core'

type Props = {
  children: React.ReactNode
  global: TGlobal
  categories: TCategory[]
  pages: TPage[]
}

const Layout = ({ children, categories, global, pages }: Props) => {
  return (
    <>
      <Header />
      <Nav categories={categories} />
      <main className="flex flex-col px-4 pt-14">{children}</main>
      <Footer categories={categories} pages={pages} global={global} />
    </>
  )
}

export default Layout
