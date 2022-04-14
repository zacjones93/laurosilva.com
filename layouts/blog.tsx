import Image from 'next/image'
import {format, parseISO} from 'date-fns'
import type {PropsWithChildren} from 'react'
import type {Blog} from 'contentlayer/generated'

export default function BlogLayout({
  children,
  post,
}: PropsWithChildren<{post: Blog}>) {
  return (
    <div>
      <article>
        <h1>{post.title}</h1>
        <div>
          <div>
            <Image alt="Lauro Silva" height={24} width={24} src="/avatar.png" />
            <p>
              {'Lauro Silva / '}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p>{post.readingTime.text}</p>
        </div>
        <section>{children}</section>
        <footer>
          <a
            href={discussUrl(post.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href={editUrl(post.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </footer>
      </article>
    </div>
  )
}

const editUrl = (slug: string) =>
  `https://github.com/laurosilvacom/laurosilva.com/edit/main/data/blog/${slug}.mdx`

const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://laurosilva.com/blog/${slug}`,
  )}`
