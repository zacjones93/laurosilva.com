import Image from 'next/image'
import type {PropsWithChildren} from 'react'
import type {Portfolio} from 'contentlayer/generated'

export default function PorfolioLayout({
  children,
  project,
}: PropsWithChildren<{project: Portfolio}>) {
  return (
    <div>
      <article>
        <h1>{project.name}</h1>
        <div>
          <div>
            <Image alt="Lauro Silva" height={24} width={24} src="/avatar.png" />
            <p>
              {'Lauro Silva / '}
              {project.year}
            </p>
          </div>
          <p>{project.readingTime.text}</p>
        </div>
        <section>{children}</section>
      </article>
    </div>
  )
}
