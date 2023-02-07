import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li><Link href="/article-1">published</Link></li>
        <li><Link href="/article-2">draft</Link></li>
      </ul>
    </main>
  )
}
