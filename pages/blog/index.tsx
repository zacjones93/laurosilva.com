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
    <div>
      <div>
        <h1>Blog</h1>
        <p>{`I've written ${posts.length} posts on this site.`}</p>
        <div>
          <input
            aria-label="Search posts"
            type="text"
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Search posts"
          />
        </div>

        <h3>All Posts</h3>

        {!filteredBlogPosts.length && <p>No posts found.</p>}

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
