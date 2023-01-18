import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src='https://analytics.umami.is/script.js'
        data-website-id='186092c3-68ed-4bcc-b1f8-0fb681b80065'
        strategy='lazyOnload'
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
