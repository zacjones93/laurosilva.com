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
        <Head>
          {/* preloading fonts */}
          <link
            rel="preload"
            href="/fonts/ibm-plex-sans-var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="px-4 text-white transition-colors duration-500 ease-in-out bg-black sm:px-6 lg:px-8">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
