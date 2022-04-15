import * as React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head />
        <body className="px-4 text-white bg-black sm:px-6 lg:px-8">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
