import Link from 'next/link'

import type {Blog} from 'contentlayer/generated'

export default function BlogPost({
  title,
  summary,
  slug,
}: Pick<Blog, 'title' | 'summary' | 'slug'>) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="my-10">
        <a>
          <h3 className="text-2xl font-extrabold tracking-tight leading-[1.1] sm:text-2xl lg:text-3xl xl:text-3xl mb-6">
            {title}
          </h3>
          <p className="text-gray-300">{summary}</p>
        </a>
      </div>
    </Link>
  )
}
