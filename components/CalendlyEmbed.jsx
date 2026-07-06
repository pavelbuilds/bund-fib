'use client';

import { InlineWidget } from 'react-calendly';
import { useStore } from '@/src/store';

/**
 * Calendly booking widget in Bund-fiB branding. Only loads after the
 * visitor accepted cookies; otherwise shows a prompt that re-opens the
 * cookie banner.
 */
const CalendlyEmbed = ({ url, height = '65vh' }) => {
  const { cookiesAccepted, setShowCookieConsent } = useStore();

  if (!cookiesAccepted) {
    return (
      <div className='flex items-center justify-center py-32'>
        <p className='text-center'>
          Bitte akzeptieren Sie die Verwendung von Cookies, um das Kalender-Widget zu verwenden.{' '}
          <button
            type='button'
            className='underline cursor-pointer'
            onClick={() => setShowCookieConsent(true)}
          >
            Hier klicken, um die Cookie-Einstellungen zu ändern.
          </button>
        </p>
      </div>
    );
  }

  return (
    <InlineWidget
      styles={{ width: '100%', height }}
      pageSettings={{
        backgroundColor: 'ffffff',
        hideEventTypeDetails: true,
        hideLandingPageDetails: true,
        primaryColor: 'F9B233',
        textColor: '4d5055',
      }}
      url={url}
    />
  );
};

export default CalendlyEmbed;
