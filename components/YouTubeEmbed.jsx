'use client';

import { useStore } from '@/src/store';

/**
 * YouTube iframe that only loads after cookie consent; otherwise shows a
 * prompt that re-opens the cookie banner.
 */
const YouTubeEmbed = ({ videoId, title = 'YouTube Video' }) => {
  const { cookiesAccepted, setShowCookieConsent } = useStore();

  if (!cookiesAccepted) {
    return (
      <div className='h-[70vh] p-10 bg-gray-500 rounded-lg flex justify-center items-center'>
        <p>
          Bitte akzeptieren Sie die Verwendung von Cookies, um das YouTube-Video anzuzeigen.{' '}
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
    <iframe
      width='560'
      height='315'
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
      className='w-full h-[70vh]'
    ></iframe>
  );
};

export default YouTubeEmbed;
