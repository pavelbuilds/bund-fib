'use client';

import { useRouter } from 'next/navigation';
import { Leva, useControls, button, folder } from 'leva';

const DevPanelInner = () => {
  const router = useRouter();

  // Navigate via window.location so cross-page hash anchors work reliably.
  const go = (href) => {
    if (typeof window !== 'undefined') {
      window.location.href = href;
    } else {
      router.push(href);
    }
  };

  useControls('Updates Runde 2 (Dev Review)', {
    '1. Favicon — Browser-Tab prüfen': folder(
      {
        'Info 1': {
          value: 'Favicon wird jetzt über app/icon.png gesetzt (Next.js App Router).',
          editable: false,
        },
        'Zur Startseite': button(() => go('/')),
      },
      { collapsed: true }
    ),
    '2. Lars Telefonnummer aktualisiert': folder(
      {
        'Info 2': {
          value: 'Alt: +49 160 95736116 → Neu: +49 1578 1284853 (Geschäftsnummer).',
          editable: false,
        },
        'Zu Ansprechpartner:innen': button(() => go('/ansprechpartnerinnen')),
      },
      { collapsed: true }
    ),
    '3. Neue Seite "Kinderschutz"': folder(
      {
        'Info 3': {
          value: 'Neuer Reiter in der Navbar neben "Mitmachen" + neue Kinderschutz-Seite.',
          editable: false,
        },
        'Zur Kinderschutz-Seite': button(() => go('/kinderschutz')),
      },
      { collapsed: true }
    ),
    '4. Heft-fiB PDF (vorher 404)': folder(
      {
        'Info 4': {
          value: 'Datei ersetzt durch Heft-fiB.pdf aus dem Ordner; Link im Material-Center aktualisiert.',
          editable: false,
        },
        'Zur Material-Seite': button(() => go('/material')),
      },
      { collapsed: true }
    ),
    '5. Neue Downloads im Material-Center': folder(
      {
        'Info 5': {
          value: 'Kinderschutzkonzept + Verhaltensampel hinzugefügt. Ablaufplan KWG fehlt noch.',
          editable: false,
        },
        'Zur Material-Seite ': button(() => go('/material')),
      },
      { collapsed: true }
    ),
    '6. "Ansprechpartner" statt "Ansprechpartnerin"': folder(
      {
        'Info 6': {
          value: 'Auf der Jobs-Seite (Initiativbewerbung) korrigiert, da Benedict männlich ist.',
          editable: false,
        },
        'Zu Jobs → Initiativbewerbung': button(() => go('/jobs#initiativbewerbung')),
      },
      { collapsed: true }
    ),
    '7. Marlene "ehemalige Geschäftsführerin"': folder(
      {
        'Info 7': {
          value: 'Beschreibung auf der Bildungskonferenz-Seite aktualisiert.',
          editable: false,
        },
        'Zur Bildungskonferenz-Seite': button(() =>
          go('/bildungsevents/bildungskonferenz')
        ),
      },
      { collapsed: true }
    ),
    '8. Neue Transparenz-Seite': folder(
      {
        'Info 8': {
          value: '10-Punkte-Übersicht nach Vorbild der Initiative Transparente Zivilgesellschaft.',
          editable: false,
        },
        'Zur Transparenz-Seite': button(() => go('/transparenz')),
      },
      { collapsed: true }
    ),
    '9. Transparenz-Verweise (Über uns + Footer)': folder(
      {
        'Info 9': {
          value: 'Link in "Über uns"-Abschnitt + neuer Footer-Eintrag unter "Partner".',
          editable: false,
        },
        'Zu "Über uns"': button(() => go('/#ueberuns')),
        'Zum Footer (scrollen)': button(() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          }
        }),
      },
      { collapsed: true }
    ),
  });

  return (
    <Leva
      collapsed={false}
      titleBar={{ title: 'Updates Runde 2', drag: true, filter: false }}
      theme={{
        sizes: {
          rootWidth: '360px',
        },
      }}
    />
  );
};

export default DevPanelInner;
