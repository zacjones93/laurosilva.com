import Image from 'next/image'
import type {PropsWithChildren} from 'react'
import type {Portfolio} from 'contentlayer/generated'

export default function PorfolioLayout({
  children,
  project,
}: PropsWithChildren<{project: Portfolio}>) {
  return (
    <div className="w-full max-w-screen-md m-auto">
      <article>
        <h1 className="text-3xl font-extrabold tracking-tight leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl mb-6">
          {project.name}
        </h1>
        <div className="flex flex-row items-center justify-between w-full mb-6">
          <div className="flex items-center">
            <Image
              alt="Lauro Silva"
              className="rounded-full"
              height={24}
              width={24}
              src="/avatar.png"
            />
            <p className="ml-2 text-sm text-gray-300">
              {'Lauro Silva / '}
              {project.year}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-300 min-w-32 md:mt-0">
            {project.readingTime.text}
          </p>
        </div>

        <section className="w-full mt-5 prose prose-invert prose-dark sm:prose-lg prose-base max-w-none prose-a:text-blue-400 ">
          {children}
        </section>
      </article>
    </div>
  )
}
