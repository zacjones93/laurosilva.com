import AppLayout from 'components/app/layout'
import config from '../config.json'
import React from 'react'
import {AppProps} from 'next/app'
import '../styles/globals.css'
import 'focus-visible'
import {DefaultSeo} from 'next-seo'

declare global {
  interface Window {
    ahoy: any
    _cio: any
    fbq: any
    becomeUser: any
    ga: any
  }
}

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  const AppComponent = Component as any

  const getLayout =
    AppComponent.getLayout ||
    ((Page: any) => (
      <AppLayout>
        <Page {...pageProps} />
      </AppLayout>
    ))

  return (
    <>
      <DefaultSeo {...config} />
      {getLayout(Component, pageProps)}
    </>
  )
}

export default App
