import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>laurosilva.com</h1>
      <Link href="/blog">
        <a>blog</a>
      </Link>
      <br></br>
      <Link href="/portfolio">
        <a>portfolio</a>
      </Link>
      <Image
        alt="Lauro Silva"
        height={4480}
        width={6720}
        layout="responsive"
        src="/hero-image.png"
      />
    </div>
  )
}
