import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import CookieConsent from '../components/LandingPage/CookieConsent';

export const metadata = {
  title: 'Bund-fiB',
  description: 'Bund-fiB Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='de'>
      <body>
        <Script
          src='/stats/script.js'
          data-website-id='186092c3-68ed-4bcc-b1f8-0fb681b80065'
          strategy='lazyOnload'
        />
        <CookieConsent />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
