'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InlineWidget } from 'react-calendly';

const Standort = ({ name, calendlyUrl, cookiesAccepted, setShowCookieConsent }) => {
  return (
    <div className='ml-5 mr-5 mb-5 rounded-xl bg-white p-1 text-center shadow-xl lg:my-4'>
      <div className='hidden md:block'>Standort {name}</div>
      <a href={calendlyUrl} target='_blank' rel='noreferrer'>
        <div className='mb-5 mt-5 block md:hidden'>
          <u>Standort {name}</u>
        </div>
      </a>
      <div className='hidden md:block'>
        {cookiesAccepted ? (
          <InlineWidget
            styles={{
              width: '20vw',
              height: '30vh',
            }}
            pageSettings={{
              backgroundColor: 'ffffff',
              hideEventTypeDetails: true,
              hideLandingPageDetails: true,
              primaryColor: 'F9B233',
              textColor: '4d5055',
            }}
            url={calendlyUrl}
          />
        ) : (
          <div className='py-16 sm:py-24 md:py-32'>
            <p>
              Bitte akzeptieren Sie die Verwendung von Cookies, um das Kalender-Widget zu verwenden.{' '}
              <span className='underline cursor-pointer' onClick={() => setShowCookieConsent(true)}>
                hier clicken um Cookie-Einstellungen zu ändern
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Standort;
