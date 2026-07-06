'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import Standort from './Standort';

// Calendly booking links per location. Update here when responsibilities
// or links change.
const standorte = [
  { name: 'Berlin', calendlyUrl: 'https://calendly.com/lika-kondrateva-bund-fib/30min' },
  {
    name: 'Hannover',
    calendlyUrl: 'https://calendly.com/benedict-hepp-bund-fib/kennlerngespraech-hannover',
  },
  { name: 'Leipzig', calendlyUrl: 'https://calendly.com/tatjana-heinrich-bund-fib/30min' },
  { name: 'Magdeburg', calendlyUrl: 'https://calendly.com/anna-rochol-bund-fib/30min' },
];

/**
 * "Bewirb dich hier bei uns!" button plus the full-screen overlay it opens:
 * pick a location, then book an appointment via the embedded Calendly
 * widget (loads only after cookie consent).
 */
const JobsBooking = () => {
  const [open, setOpen] = useState(false);
  const [selectedStandort, setSelectedStandort] = useState(null);

  return (
    <>
      <Button click={() => setOpen(!open)} cta={'Bewirb dich hier bei uns!'} />

      {/* Full-screen booking overlay */}
      <div
        className={`fixed top-0 left-0 z-30 h-screen w-screen bg-lightYellow pt-24 transition-all duration-700 ease-out sm:pt-[10vh] lg:pt-24 ${
          open ? '-translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-center'>
          <button
            className='rounded-full size-14 mb-[5vh] bg-primary text-white flex items-center justify-center'
            onClick={() => setOpen(false)}
            aria-label='Schließen'
          >
            <FontAwesomeIcon icon={faXmark} className='text-2xl' />
          </button>
          {/* Header */}
          <div className='text-center font-berlin text-2xl'>Buch ein Gespräch mit uns:</div>
          {/* Location grid */}
          <div className='mt-10 mb-20 grid grid-cols-2 gap-5 max-w-xl mx-auto sm:mt-[5vh] sm:mb-[10vh] lg:mt-[5vh] lg:mb-[5vh]'>
            {standorte.map((s) => (
              <Standort key={s.name} name={s.name} onClick={() => setSelectedStandort(s)} />
            ))}
          </div>
          {/* Calendly modal */}
          {selectedStandort && (
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
              <div className='relative w-[75vw] max-h-[80vh] rounded-2xl bg-white shadow-2xl flex flex-col'>
                <div className='flex items-center justify-between px-6 py-4 border-b'>
                  <h2 className='font-berlin text-xl'>Standort {selectedStandort.name}</h2>
                  <button
                    onClick={() => setSelectedStandort(null)}
                    className='rounded-full size-10 bg-primary text-white flex items-center justify-center hover:bg-primary/80 cursor-pointer'
                    aria-label='Kalender schließen'
                  >
                    <FontAwesomeIcon icon={faXmark} className='text-lg' />
                  </button>
                </div>
                <div className='flex-1 overflow-auto p-4'>
                  <CalendlyEmbed url={selectedStandort.calendlyUrl} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobsBooking;
