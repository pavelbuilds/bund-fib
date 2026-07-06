'use client';

import { useEffect } from 'react';
import { useStore } from '../../src/store';

/**
 * Cookie consent banner. Shown until the visitor accepts or declines;
 * the choice is persisted in localStorage (see src/store.js) and gates
 * the third-party embeds (Calendly, Google Maps).
 */
const CookieConsent = () => {
  const { showCookieConsent, loadStoredConsent, acceptCookies, declineCookies } = useStore();

  // Restore a previously made choice after mount (localStorage is
  // unavailable during server rendering).
  useEffect(() => {
    loadStoredConsent();
  }, [loadStoredConsent]);

  if (!showCookieConsent) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50'>
      <div className='mx-auto flex flex-col sm:flex-row items-center justify-between'>
        <div className='text-xs text-gray-600 px-5 sm:px-0 sm:pl-20 py-5 sm:py-2'>
          Wir verwenden Cookies, um die Terminbuchung über das eingebettete Kalender-Widget zu
          ermöglichen. Mit einem Klick auf &quot;Akzeptieren&quot; stimmen Sie der Verwendung von
          Cookies zu.
        </div>
        <div className='flex w-full sm:w-auto'>
          <button
            onClick={declineCookies}
            className='w-1/2 sm:w-auto px-4 text-sm font-medium text-gray-700 hover:text-gray-900'
          >
            Ablehnen
          </button>
          <button
            onClick={acceptCookies}
            className='w-1/2 sm:w-auto px-4 py-3 text-sm font-medium text-black bg-darkYellow hover:bg-darkYellow/80'
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
