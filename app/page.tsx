import { dirname, join } from "path";
import glob from "fast-glob";

import Link from "next/link";

const __dirname = dirname(new URL(import.meta.url).pathname)

async function getPosts() {
  const posts = await glob(join(__dirname, '**/page*'))

  const slugs = posts
    .filter(absolutePath => process.env.NODE_ENV !== 'production' || !absolutePath.includes('(drafts)'))
    .map(absolutePath => absolutePath.replace(`${__dirname}/`, '')) // root path
    .map(relativePath => relativePath.replace(/page.*$/, '')) // page file
    .map(slug => slug.replace(/\(.*\)\//, '')) // route group
    .filter(Boolean)

  return slugs
}


export default async function Home() {
  const posts = await getPosts()
  console.log({ posts })

  return (
    <main>
      <ul>
        {posts.map(slug => (
          <li key={slug}><Link href={slug}>{slug}</Link></li>
        ))}
      </ul>
    </main>
  )
}
