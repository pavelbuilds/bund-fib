'use client';
import { useStore } from '../../src/store';

const CookieConsent = () => {
  const { showCookieConsent, setShowCookieConsent, setCookiesAccepted } = useStore();
  // useEffect(() => {
  //   // Check if user has already made a choice
  //   const consent = localStorage.getItem('cookieConsent');
  //   if (!consent) {
  //     setCookieConsent(true);
  //   }
  // }, []);

  const handleAccept = () => {
    // localStorage.setItem('cookieConsent', 'accepted');
    // setCookieConsent(false);
    setShowCookieConsent(false);
    setCookiesAccepted(true);
  };

  const handleDecline = () => {
    // localStorage.setItem('cookieConsent', 'declined');
    // setCookieConsent(false);
    setShowCookieConsent(false);
    setCookiesAccepted(false);
  };

  if (!showCookieConsent) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50'>
      <div className='mx-auto flex flex-col sm:flex-row items-center justify-between'>
        <div className='text-xs text-gray-600 pl-20 py-2'>
          Wir verwenden Cookies, um die Terminbuchung über das eingebettete Kalender-Widget zu
          ermöglichen. Mit einem Klick auf &quot;Akzeptieren&quot; stimmen Sie der Verwendung von
          Cookies zu.
        </div>
        <div className='flex'>
          <button
            onClick={handleDecline}
            className='px-4 text-sm font-medium text-gray-700 hover:text-gray-900'
          >
            Ablehnen
          </button>
          <button
            onClick={handleAccept}
            className='px-4 py-3 text-sm font-medium text-black bg-darkYellow hover:bg-darkYellow/80'
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
