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
        <div className="grid content-center grid-cols-1 gap-4 my-10 md:grid-cols-12">
          <p className="col-span-2 text-2xl">{year}</p>
          <div className="col-span-10">
            <h3 className="text-2xl font-extrabold tracking-tight leading-[1.1] sm:text-2xl lg:text-3xl xl:text-3xl mb-6">
              {title}
            </h3>
            <p className="text-gray-300">{summary}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}
