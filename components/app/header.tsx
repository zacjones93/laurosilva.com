import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="mx-auto mb-4 max-w-screen-2xl" aria-label="Top">
      <div className="flex items-center justify-between w-full py-6">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <span className="sr-only">Lauro Silva</span>
              <Image height="40px" width="40px" src="/logo.svg" alt="" />
            </a>
          </Link>
        </div>
        <div className="ml-10 space-x-4">
          {navigation.map(link => (
            <Link key={link.name} href={link.href}>
              <a className="text-sm font-medium text-white hover:text-indigo-50">
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

const navigation = [
  {name: 'Blog', href: '/blog'},
  {name: 'Portfolio', href: '/portfolio'},
]
