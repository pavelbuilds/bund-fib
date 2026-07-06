/**
 * Central place for organisation-wide contact data and external links.
 * Update phone numbers, e-mail addresses and social media URLs here —
 * every component reads from this file instead of hardcoding values.
 */
export const siteConfig = {
  name: 'Bund für integrative Bildung (Bund-fiB)',
  shortName: 'Bund-fiB',

  contact: {
    email: 'verwaltung@bund-fib.de',
    // Displayed and linked phone number of the Berlin office.
    phone: '+49 30 68908696',
    phoneHref: 'tel:+493068908696',
    address: {
      street: 'Schwedenstraße 17',
      city: '13357 Berlin',
    },
  },

  social: {
    // TODO(handover): NavBar and Footer historically linked two different
    // TikTok handles (@bund.fib and @bund_fib). Verify the correct one.
    tiktok: 'https://www.tiktok.com/@bund.fib',
    instagram: 'https://www.instagram.com/bund_fib/',
    linkedin: 'https://www.linkedin.com/company/bund-f%C3%BCr-integrative-bildung/',
  },
};
