import Head from 'next/head'
import {useRouter} from 'next/router'

export default function Container(props: any) {
  const {children, ...customMeta} = props
  const router = useRouter()
  const meta = {
    title: 'Lauro Silva',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard`,
    image: 'https://laurosilva.com/static/images/hero-image.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://laurosilva.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://laurosilva.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lauro Silva" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@laurosilvacom" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <main id="content">{children}</main>
    </div>
  )
}
