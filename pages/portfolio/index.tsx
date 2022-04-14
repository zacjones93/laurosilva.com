import ProjectContainer from 'components/project-container'
import {allPortfolios} from 'contentlayer/generated'
import {InferGetStaticPropsType} from 'next'
import {pick} from 'lib/utils'

export default function Blog({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const sorted = projects.sort((a, b) => Number(b.year) - Number(a.year))

  return (
    <div>
      <article>
        <h1>Portolio</h1>
        <p>
          Lauro of type and scrambled it to make a type specimen book. It has
          survived not only five centuries.
        </p>
        <h3>Recent Projects</h3>
        {sorted.map(project => {
          return (
            <ProjectContainer
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
