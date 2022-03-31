import PortfolioLayout from 'layouts/porfolio'
import components from 'components/mdx-components'
import {allPortfolios} from 'contentlayer/generated'
import {useMDXComponent} from 'next-contentlayer/hooks'
import type {Portfolio} from 'contentlayer/generated'

export default function Post({project}: {project: Portfolio}) {
  const Component = useMDXComponent(project.body.code)

  return (
    <PortfolioLayout project={project}>
      <Component components={{...components} as any} />
    </PortfolioLayout>
  )
}

export async function getStaticPaths() {
  return {
    paths: allPortfolios.map(p => ({params: {slug: p.slug}})),
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  const project = allPortfolios.find(project => project.slug === params.slug)

  return {props: {project}}
}
