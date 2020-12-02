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
      <main className="min-h-screen px-4 pt-14 pb-20 flex flex-col">
        {children}
      </main>
      <Footer
        categories={categories}
        pages={pages}
        socialLinks={global.social_links}
      />
    </>
  )
}

export default Layout
