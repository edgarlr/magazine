import React from 'react'
import { useRouter } from 'next/router'

function SearchPage() {
  const { query } = useRouter()

  return (
    <>
      {query.q}
      {/* <ArticlesCarousel title="Top stories" articles={articles} />
      <ArticlesList articles={articles} title="Recent" /> */}
      {/* <button onClick={() => setTheme('dark')}>Light Mode</button>
        <button onClick={() => setTheme('light')}>Light Mode</button> */}
    </>
  )
}

export default SearchPage
