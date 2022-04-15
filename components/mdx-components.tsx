import Image from 'next/image'
import Link from 'next/link'

const CustomLink = (props: any) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function Callout(props) {
  return (
    <div className="flex p-4 bg-gray-800 rounded-lg">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  )
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} {...props} />
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
}

export default MDXComponents
