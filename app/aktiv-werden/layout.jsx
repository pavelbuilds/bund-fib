export const metadata = {
  title: 'Praktikum & Engagement im sozialen Bereich | BUND FIB',
  description:
    'Pflichtpraktikum in Berlin, Leipzig oder Hannover im Bereich Bildung & Integration. Ideal für Studierende der Sozialen Arbeit, Sozialwissenschaften, Geisteswissenschaften und Lehramt. NGO mit Fokus auf Bildungsarbeit.',
  keywords:
    'NGO, ngo, Praktikum, Bildung, Pflichtpraktikum, Berlin, Leipzig, Hannover, sozialer Bereich, soziale Arbeit, Sozialwissenschaften, Geisteswissenschaften, Lehramt, Integration, Bildungsarbeit',
  openGraph: {
    title: 'Praktikum & Engagement im sozialen Bereich | BUND FIB',
    description:
      'Pflichtpraktikum in Berlin, Leipzig oder Hannover im Bereich Bildung & Integration. Ideal für Studierende der Sozialen Arbeit, Sozialwissenschaften, Geisteswissenschaften und Lehramt.',
    type: 'website',
    url: 'https://bund-fib.de/aktiv-werden',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://bund-fib.de/aktiv-werden',
  },
};

export default function Layout({ children }) {
  return children;
}
