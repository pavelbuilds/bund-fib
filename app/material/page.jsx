'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFolderClosed, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import Container from '../../components/Container';

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

export default function Material() {
  const [flyerOpen, setFlyerOpen] = useState(false);

  return (
    <main className='fixed z-50 h-screen min-h-[600px] w-screen overflow-scroll bg-darkYellow transition-all duration-700 ease-out '>
      {/* Container */}
      <section id='Downloads' className='bg-darkYellow pt-20'>
        <Container styling={'pb-2 flex justify-center'}>
          {/* Karte */}
          <div className='relative z-10 mt-10 mb-28 flex w-full flex-col sm:flex-row'>
            {/* Text - linke Seite */}
            <div className='flex h-full w-full py-10 sm:py-0 items-center justify-center  rounded-tl-3xl rounded-tr-3xl rounded-bl-none  sm:rounded-tr-none sm:rounded-bl-3xl bg-navy px-14 shadow-2xl sm:block sm:w-2/5'>
              <div className='j flex h-full flex-col justify-center'>
                <div className='font-regular font-source text-lg text-white'>Material-fiB</div>
                <div className='mt-5 h-[5px] w-10 bg-primary'></div>
                <div className='font-pooppins mt-10 text-left text-xl font-bold leading-tight text-white sm:text-xl lg:text-3xl'>
                  Hier finden Sie alle Dokumente und Dateien
                </div>
              </div>
            </div>
            {/* Download Icons - rechte Seite */}
            <div className='downloadsCSS flex w-full flex-wrap items-start justify-center gap-4 rounded-br-3xl  sm:rounded-tr-3xl  rounded-bl-3xl py-20 sm:w-3/5 sm:rounded-bl-none'>
              <a href='zusatzbogen.pdf' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='pb-2 text-white' icon={faFilePdf} style={{ fontSize: '2.5rem' }} />
                  Zusatzbogen für <br /> Lernförderung <br /> <br />
                </div>
              </a>
              <a href='FIB-Heft.pdf' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='pb-2 text-white' icon={faFilePdf} style={{ fontSize: '2.5rem' }} />
                  Unser fiB-Heft – <br /> Das Lerntagebuch <br /> <br />
                </div>
              </a>
              <a href='/Bund-fiB_Bericht_Bildungskonferenz.pdf' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='pb-2 text-white' icon={faFilePdf} style={{ fontSize: '2.5rem' }} />
                  Publikation <br /> Bildungskonferenz <br /> <br />
                </div>
              </a>
              {/* Flyer Ordner */}
              <button
                onClick={() => setFlyerOpen(!flyerOpen)}
                className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity'
              >
                <FontAwesomeIcon
                  className='pb-2 text-white transition-transform duration-300'
                  icon={flyerOpen ? faFolderOpen : faFolderClosed}
                  style={{ fontSize: '2.5rem' }}
                />
                Flyer <br /> Fit für die Schule <br /> <br />
              </button>
              {/* Flyer Inhalt */}
              <div
                className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
                  flyerOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <div className='flex flex-wrap gap-4 items-start justify-center px-6'>
                  {flyers.map((flyer) => (
                    <a key={flyer.label} href={flyer.href} target='_blank'>
                      <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm hover:opacity-80 transition-opacity'>
                        <FontAwesomeIcon className='pb-2 text-white' icon={faFilePdf} style={{ fontSize: '2rem' }} />
                        {flyer.label}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
