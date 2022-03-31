import Link from 'next/link'

import type {Blog} from 'contentlayer/generated'

export default function BlogPost({
  title,
  summary,
  slug,
}: Pick<Blog, 'title' | 'summary' | 'slug'>) {
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <div>
          <h4>{title}</h4>
        </div>
        <p>{summary}</p>
      </a>
    </Link>
  )
}
