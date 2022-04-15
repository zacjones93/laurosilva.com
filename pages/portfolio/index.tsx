import ProjectCard from 'components/project-card'
import {allPortfolios} from 'contentlayer/generated'
import {InferGetStaticPropsType} from 'next'
import {pick} from 'lib/utils'

export default function Blog({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const sorted = projects.sort((a, b) => Number(b.year) - Number(a.year))

  return (
    <div className="w-full max-w-screen-md m-auto">
      <article>
        <h1 className="text-3xl font-extrabold tracking-tight leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl">
          Portolio
        </h1>
        <p className="my-8 text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry.
        </p>
        {sorted.map(project => {
          return (
            <ProjectCard
              title={project.name}
              year={project.year}
              summary={project.summary}
              slug={project.slug}
              key={project.slug}
            />
          )
        })}
      </article>
    </div>
  )
}

export function getStaticProps() {
  const projects = allPortfolios.map(project =>
    pick(project, ['slug', 'name', 'year', 'summary']),
  )

  return {props: {projects}}
}
