'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFolderClosed, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

// "Fit für die Schule" flyer in all available languages
// (images live in public/images/flyer/).
const flyers = [
  { href: '/images/flyer/F_arabisch.png', label: 'Arabisch' },
  { href: '/images/flyer/F_deutsch.png', label: 'Deutsch' },
  { href: '/images/flyer/F_english.png', label: 'Englisch' },
  { href: '/images/flyer/F_farsi.png', label: 'Farsi' },
  { href: '/images/flyer/F_französisch.png', label: 'Französisch' },
  { href: '/images/flyer/F_kurdisch.png', label: 'Kurdisch' },
  { href: '/images/flyer/F_russisch.png', label: 'Russisch' },
  { href: '/images/flyer/F_spanisch.png', label: 'Spanisch' },
  { href: '/images/flyer/F_türkisch.png', label: 'Türkisch' },
];

/** Expandable "folder" on /material that reveals the flyer downloads. */
const FlyerFolder = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity'
      >
        <FontAwesomeIcon
          className='pb-2 text-white transition-transform duration-300'
          icon={open ? faFolderOpen : faFolderClosed}
          style={{ fontSize: '2.5rem' }}
        />
        Flyer <br /> Fit für die Schule <br /> <br />
      </button>
      {/* Flyer Inhalt */}
      <div
        className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
          open ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='flex flex-wrap gap-4 items-start justify-center px-6'>
          {flyers.map((flyer) => (
            <a key={flyer.label} href={flyer.href} target='_blank' rel='noopener noreferrer'>
              <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm hover:opacity-80 transition-opacity'>
                <FontAwesomeIcon
                  className='pb-2 text-white'
                  icon={faFilePdf}
                  style={{ fontSize: '2rem' }}
                />
                {flyer.label}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default FlyerFolder;
