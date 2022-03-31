import Container from 'components/app-container'
import ProjectContainer from 'components/project-container'
import {allPortfolios} from 'contentlayer/generated'
import {InferGetStaticPropsType} from 'next'
import {pick} from 'lib/utils'

export default function Blog({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const sorted = projects.sort((a, b) => Number(b.year) - Number(a.year))

  return (
    <Container
      title="Portolio – Lauro Silva"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
    >
      <article>
        <h1>Portolio</h1>
        <p>
          Lauro reimagines build system techniques used by Facebook and Google
          to remove maintenance burden and overhead.
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
    </Container>
  )
}

export function getStaticProps() {
  const projects = allPortfolios.map(project =>
    pick(project, ['slug', 'name', 'year', 'summary']),
  )

  return {props: {projects}}
}
