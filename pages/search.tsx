import React from 'react'
import { Layout } from '@components/core'
import { useRouter } from 'next/router'

function SearchPage() {
  const { query } = useRouter()

  return (
    <Layout>
      {query.q}
      {/* <ArticlesCarousel title="Top stories" articles={articles} />
      <ArticlesList articles={articles} title="Recent" /> */}
      {/* <button onClick={() => setTheme('dark')}>Light Mode</button>
        <button onClick={() => setTheme('light')}>Light Mode</button> */}
    </Layout>
  )
}

export default SearchPage
