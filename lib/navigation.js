/**
 * Single source of truth for the main navigation.
 * Both the desktop menu and the mobile burger menu in
 * components/Layout/NavBar.jsx are rendered from this structure.
 *
 * An item has a `label` and either a `href` (link) or `children`
 * (dropdown/accordion). Maximum supported depth is three levels.
 */
export const navigation = [
  { label: 'Über Uns', href: '/#ueberuns' },
  {
    label: 'Projekte',
    href: '/#Leistungsübersicht',
    children: [
      {
        label: 'Lernförderung',
        children: [
          { label: 'Berlin', href: '/lernfoerderung-berlin' },
          { label: 'Hannover', href: '/lernfoerderung-hannover' },
          { label: 'Leipzig', href: '/lernfoerderung-leipzig' },
          { label: 'Magdeburg', href: '/lernfoerderung-magdeburg' },
        ],
      },
      { label: 'Fit für die Schule', href: '/fit-fuer-die-schule' },
      {
        label: 'Bildungsprojekte',
        children: [
          { label: 'EduAId', href: '/eduai' },
          { label: 'Gemeinsam Handeln', href: '/gemeinsam-handeln' },
          { label: 'Ferienschulen', href: '/ferienschule-fuer-integrative-bildung' },
        ],
      },
      { label: '(Bildungs)Events', href: '/bildungsevents' },
    ],
  },
  {
    label: 'Mitmachen',
    children: [
      {
        label: 'Jobs',
        children: [
          { label: 'Honorartätigkeiten', href: '/jobs#honorartaetigkeiten' },
          { label: 'Ausschreibung', href: '/jobs#jobs' },
          { label: 'Initiativbewerbung', href: '/jobs#initiativbewerbung' },
        ],
      },
      {
        label: 'Aktiv Werden',
        children: [
          { label: 'Ehrenamt', href: '/aktiv-werden#ehrenamt' },
          { label: 'Praktikum', href: '/aktiv-werden#praktikum' },
          { label: 'Bundesfreiwilligendienst', href: '/aktiv-werden#bundesfreiwilligendienst' },
        ],
      },
      { label: 'Duales Studium', href: '/duales-studium' },
      { label: 'Berufsvorbereitung', href: '/berufsvorbereitung' },
    ],
  },
  { label: 'Kinderschutz', href: '/kinderschutz' },
];
