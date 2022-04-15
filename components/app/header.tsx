export default function Navigation() {
  return (
    <nav className="mx-auto mb-4 max-w-screen-2xl" aria-label="Top">
      <div className="flex items-center justify-between w-full py-6">
        <div className="flex items-center">
          <a href="/">
            <span className="sr-only">Lauro Silva</span>
            <img className="w-auto h-10" src="/logo.svg" alt="" />
          </a>
        </div>
        <div className="ml-10 space-x-4">
          {navigation.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
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
