import BlogCard from 'components/blog-card'
import {allBlogs} from 'contentlayer/generated'
import {InferGetStaticPropsType} from 'next'
import {pick} from 'lib/utils'
import {useState} from 'react'

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    )
    .filter(post =>
      post.title.toLowerCase().includes(searchValue.toLowerCase()),
    )

  return (
    <div className="w-full max-w-screen-md m-auto">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl">
          Blog
        </h1>
        <p className="my-8 text-gray-300">
          {`I've written ${posts.length} posts on this site.`} Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's.
        </p>
        <div>
          <input
            aria-label="Search posts"
            type="text"
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Search posts"
            className="block w-full px-4 py-2 text-gray-100 bg-gray-900 border border-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <p className="my-8 text-gray-300">
          {!filteredBlogPosts.length && <p>No posts found.</p>}
        </p>

        {filteredBlogPosts.map(post => (
          <BlogCard key={post.title} {...post} />
        ))}
      </div>
    </div>
  )
}

export function getStaticProps() {
  const posts = allBlogs.map(post =>
    pick(post, ['slug', 'title', 'summary', 'publishedAt']),
  )

  return {props: {posts}}
}
