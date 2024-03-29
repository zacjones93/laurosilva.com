import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files'

const computedFields: ComputedFields = {
  readingTime: {type: 'json', resolve: doc => readingTime(doc.body.raw)},
  wordCount: {
    type: 'number',
    resolve: doc => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: 'string',
    resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
}

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {type: 'string', required: true},
    publishedAt: {type: 'string', required: true},
    summary: {type: 'string', required: true},
  },
  computedFields,
}))

const Portfolio = defineDocumentType(() => ({
  name: 'Portfolio',
  filePathPattern: 'portfolio/*.mdx',
  contentType: 'mdx',
  fields: {
    name: {type: 'string', required: true},
    summary: {type: 'string', required: true},
    year: {type: 'string', required: true},
  },
  computedFields,
}))

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Portfolio],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrismPlus,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})

export default contentLayerConfig
