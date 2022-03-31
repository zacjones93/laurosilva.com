import Link from 'next/link'

type Props = {
  title: string
  summary: string
  slug: string
  year: string
}

export default function ProjectContainer({title, summary, slug, year}: Props) {
  return (
    <Link href={`/portfolio/${slug}`}>
      <a>
        <article>
          <h1>{year}</h1>
          <h4>{title}</h4>
          <p>{summary}</p>
        </article>
      </a>
    </Link>
  )
}
