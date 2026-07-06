import '@/styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import CookieConsent from '@/components/LandingPage/CookieConsent';

// Font Awesome: CSS is imported above, so the library must not inject it
// again at runtime (would cause oversized icons before hydration).
config.autoAddCss = false;

export const metadata = {
  title: {
    default: 'Bund-fiB – Bund für integrative Bildung',
    template: '%s – Bund-fiB',
  },
  description:
    'Der Bund für integrative Bildung (Bund-fiB) ist eine gemeinnützige Organisation für Lernförderung und Bildungsprojekte in Berlin, Leipzig, Hannover und Magdeburg.',
};

/**
 * Root layout: global styles, cookie consent banner and analytics
 * (Umami via the /stats rewrite in vercel.json + Vercel Analytics).
 * The navigation bar and footer live in app/(site)/layout.jsx.
 */
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
