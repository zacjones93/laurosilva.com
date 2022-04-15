import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="m-auto text-center max-w-7xl sm:min-h-[60vh] relative w-full flex flex-col items-center justify-center sm:py-32 py-24 px-5">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          Lauro is building{' '}
          <span className="inline-block leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500 ">
            badass high-quality
          </span>{' '}
          learning products with friends
        </h1>
      </div>
    </div>
  )
}
