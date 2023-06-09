import '@fontsource-variable/space-grotesk';
import Head from "next/head";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis';

const metadata = {
  title: {
    template: '%s - Realzzy',
    default: 'Realzzy Website',
  },
  description: 'Welcome to Realzzy.dev site!',
  themeColor: '#10529f',
};

export default function AppWrapper({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.title ? metadata.title.template.replace('%s', pageProps.title) : metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <meta name="theme-color" content={metadata.themeColor} />
      </Head>
      <ReactLenis root options={{ lerp: 0.25 }}>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </ReactLenis>
    </>
  )
};