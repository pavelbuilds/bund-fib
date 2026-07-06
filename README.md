# bund-fib.de — Website of the Bund für integrative Bildung (Bund-fiB)

Marketing/information website of the German non-profit **Bund-fiB gUG**
(learning support and education projects in Berlin, Leipzig, Hannover and
Magdeburg). Fully static content in German, one API route for the contact
form, deployed on **Vercel**.

## Tech stack

| What | Choice |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) (App Router, JavaScript/JSX — no TypeScript) |
| Styling | Tailwind CSS (config in `tailwind.config.js`, custom colors/fonts in `styles/globals.css`) |
| Icons | Font Awesome (`@fortawesome/react-fontawesome`) |
| Animations | AOS (scroll animations via `data-aos` attributes), Framer Motion (burger menu accordions), Swiper (testimonial slider) |
| Client state | Zustand (`src/store.js`, only used for cookie consent) |
| E-mail | Nodemailer via Gmail (contact form API route) |
| Analytics | Umami (self-hosted script proxied through `/stats`, see `vercel.json`) + Vercel Analytics |

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in EMAIL_PW
npm run dev                  # http://localhost:3000
npm run build                # production build (should always pass)
npx eslint app components lib src --ext .jsx,.js
```

### Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `EMAIL_PW` | yes (for the contact form) | Gmail **app password** of `bundfib.webseite@gmail.com`; the API route sends form submissions to `verwaltung@bund-fib.de`. Without it the form returns HTTP 500. |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY` | no | Overrides the Google Maps Embed API key in `components/ContactPersonCard.jsx` (a working key is hardcoded as fallback). Restrict the key to the production domain in the Google Cloud console. |

## Project structure

```
app/
  layout.jsx               Root layout: global CSS, metadata defaults
                           (title template "%s – Bund-fiB"), cookie banner,
                           analytics scripts.
  (site)/                  Route group for all regular pages.
    layout.jsx             Renders NavBar + Footer around every page and
                           initialises AOS. Route groups do NOT affect URLs.
    page.jsx               Homepage (assembled from components/LandingPage/*).
    aktiv-werden/ ... transparenz/
                           One folder per page; each page.jsx is a server
                           component that exports its own `metadata`.
    jobs/components/       Route-local client components (booking popup).
  ansprechpartnerinnen/    Standalone pages WITHOUT navigation/footer
  datenschutz/             (opened in new tabs from the footer, or linked
  material/                from print products). They live outside the
  partner/                 (site) group on purpose.
  api/contactForm/route.js Contact form endpoint (Nodemailer + honeypot).
  error.jsx / loading.jsx / not-found.jsx

components/
  Layout/                  NavBar, Footer, SocialLinks, ProjectTitleSection
  LandingPage/             Homepage sections (TitleSection, AboutUs, Team, …)
  *.jsx                    Shared primitives: Container (page width),
                           Textbox (section heading pattern), Button, Card,
                           ContactPersonCard (contact + optional Maps embed),
                           CalendlyEmbed, YouTubeEmbed, KontaktFormular,
                           BurgerMenu, Testimonials, AosInit

lib/
  navigation.js            SINGLE SOURCE OF TRUTH for the main menu.
                           Desktop dropdowns and the mobile burger menu are
                           both rendered from this structure.
  siteConfig.js            Central contact data (e-mail, phone, address)
                           and social media URLs.

src/store.js               Zustand store for the cookie consent (persisted
                           in localStorage under the key "cookieConsent").
styles/                    globals.css (fonts, wave dividers, custom CSS),
                           hamburger.css (burger icon animation)
public/                    Images, fonts and all downloadable PDFs
```

### Conventions

- **Imports** use the `@/` alias (configured in `jsconfig.json`), e.g.
  `import Container from '@/components/Container';`.
- **Pages are server components** and export `metadata` (title +
  description). Interactive parts are extracted into small client
  components (`'use client'`) — either shared ones in `components/` or
  route-local ones in `app/<route>/components/`.
- Page titles run through the template `"%s – Bund-fiB"` from
  `app/layout.jsx`, so a page title of `'Jobs'` renders as
  `Jobs – Bund-fiB`.

## How the key features work

### Cookie consent & third-party embeds
`src/store.js` + `components/LandingPage/CookieConsent.jsx`. The banner is
shown until the visitor accepts or declines; the choice is persisted in
localStorage. `cookiesAccepted` gates all third-party embeds:
`CalendlyEmbed` (appointment booking), `YouTubeEmbed` and the Google Maps
iframe in `ContactPersonCard`. The footer's "Cookie Einstellungen" button
re-opens the banner.

### Contact form
`components/KontaktFormular.jsx` → POST `/api/contactForm`. The API
validates and HTML-escapes the input and rejects submissions whose hidden
honeypot field ("url") is filled — a simple spam trap. Mails are sent from
the Gmail account to `verwaltung@bund-fib.de` with `replyTo` set to the
visitor's address.

### Redirect routes
`next.config.js` keeps two legacy URLs alive that appear on printed
material: `/familien_flyer` → `/familien_flyer.pdf` and `/satzung` →
`/SatzungBund-fiB.pdf`.

## Common maintenance tasks

| Task | Where |
| --- | --- |
| Add/remove a menu entry | `lib/navigation.js` (desktop + mobile update together) |
| Change phone/e-mail/social links | `lib/siteConfig.js` |
| Publish/remove a job advertisement | `stellenausschreibungen` array in `app/(site)/jobs/page.jsx`; put the PDF in `public/stellenausschreibungen/` |
| Change Calendly booking links | `standorte` array in `app/(site)/jobs/components/JobsBooking.jsx` |
| Change a page's contact person | The `person={{ … }}` prop of `<ContactPersonCard>` on that page |
| Add a download to /material | `documents` array in `app/material/page.jsx`; PDF into `public/` |
| Add a partner logo | `partnerLogos` arrays in `components/LandingPage/PartnerLogos.jsx` (homepage) and `app/partner/page.jsx` (full list) |
| Add a new page | Create `app/(site)/<slug>/page.jsx` (server component + `metadata` export); add it to `lib/navigation.js` if it should appear in the menu |
| Update team photos/text | `components/LandingPage/Team.jsx` and `components/Gruender.jsx` |

## Dependencies

`npm audit` was clean at handover (July 2026). Two things worth knowing:

- **`overrides.postcss` in package.json**: Next.js 16.2.x pins a nested
  postcss with a known moderate advisory (GHSA-qx2v-qp2m-jg93). The
  override forces the patched version everywhere; the build and CSS output
  were verified afterwards. Once a Next.js release ships a patched postcss
  itself, the override can be removed.
- **React is on 18.x** while React 19 is current. Next.js 16 supports both;
  upgrading React is optional and was deliberately not done during the
  handover refactor to keep the diff reviewable.

When updating in the future: `npm outdated` + `npm audit`, bump within the
same major first, run `npm run build` and click through the pages (the
contact form and the Calendly/Maps embeds are the only runtime-sensitive
parts).

## Deployment

Hosted on Vercel; pushing to `master` deploys production. `vercel.json`
contains a rewrite that proxies `/stats/*` to Umami analytics (the
website-id is set on the `<Script>` tag in `app/layout.jsx`).

## Known quirks & open questions (handover notes)

- **TikTok URL**: NavBar and Footer historically linked two different
  handles (`@bund.fib` vs `@bund_fib`). Now centralised in
  `lib/siteConfig.js` (currently `@bund.fib`) — **please verify** which
  account is real and correct it there.
- **Office phone number**: the footer previously *displayed*
  `+49 30 68908696` but *linked* `tel:+493068908697` (note the last
  digit). The displayed number was kept for both; verify it.
- The **Google Maps Embed key** in `ContactPersonCard.jsx` is public by
  nature (embed keys are visible in the browser), but it should be
  restricted to the bund-fib.de domain in the Google Cloud console.
- `public/Satzung Bund-fiB Word.docx` is publicly downloadable — probably
  unintended (the PDF version is the one that is linked). Consider
  removing it.
- `/berufsvorbereitung`: an earlier version had "book an appointment"
  cards whose popup was never implemented (clicks did nothing); the dead
  handlers were removed. If booking is wanted there, reuse
  `components/CalendlyEmbed.jsx` (see `app/(site)/jobs/components/JobsBooking.jsx`
  as an example).
- The interactive "team dot buttons" on the homepage team photos are
  disabled; the last working version is in git history
  (`components/LandingPage/Team.jsx`, `components/Gruender.jsx`).
- The pages `ansprechpartnerinnen`, `datenschutz`, `material` and
  `partner` deliberately have **no navigation bar** — they are opened in
  new tabs from the footer. If they should get the normal chrome, move
  their folders into `app/(site)/`.
- `aktiv-werden` shows the same contact person multiple times in
  different sections — that is content, not a bug.
