const fs = require('fs')
const globby = require('globby')

function addPage(page) {
  const path = page.replace('pages', '').replace('.tsx', '')
  const route = path === '/index' ? '' : path

  return `
  <url>
    <loc>${`https://magazine-starter.vercel.app${route}`}</loc>
  </url>
  `
}

async function generateSitemap() {
  // All pages ignoring Next.js especific files and API routes
  const pages = await globby(['pages/**/*.tsx', '!pages/_*.tsx', '!pages/api'])

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">     
  ${pages.map(addPage).join('')}
  </urlset>
  `

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()
