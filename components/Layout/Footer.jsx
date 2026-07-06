'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Container from '../Container';
import SocialLinks from './SocialLinks';
import { useStore } from '../../src/store';
import { siteConfig } from '../../lib/siteConfig';

const linkClass = 'my-1 font-source text-sm w-full text-center sm:text-left';
const buttonClass = `${linkClass} bg-transparent border-none cursor-pointer`;

/**
 * Site footer with link columns, social icons and the Impressum overlay.
 * Rendered for all pages via app/(site)/layout.jsx.
 */
const Footer = () => {
  const { setShowCookieConsent } = useStore();
  const [impressum, setImpressum] = useState(false);
  const toggleImpressum = () => setImpressum((value) => !value);

  return (
    <>
      <footer className='relative mx-auto bg-lightYellow px-7 pt-20 pb-10 sm:px-20'>
        {/* Wave */}
        <div className='wave-8'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
              className='shape-fill'
            ></path>
          </svg>
        </div>
        <div className='mx-auto flex max-w-screen-xl flex-col justify-between pt-20 sm:flex-row sm:pt-28'>
          <div className='flex flex-col items-center sm:justify-center'>
            {/* Logo */}
            <Image
              className='h-12 object-contain'
              src='/images/logos/bund_fib_logo.webp'
              width={300}
              height={30}
              alt='Bund-fiB Logo'
            />
            {/* Social media icons */}
            <div className='mt-10 flex w-full items-center justify-center gap-4'>
              <SocialLinks />
            </div>
          </div>

          {/* Organisation */}
          <div className='mt-16 sm:mt-0 w-full sm:w-auto flex justify-center flex-col items-center sm:items-start sm:justify-start'>
            <div className='font-poppins text-base'>Organisation</div>
            <div className='mt-2 mb-5 h-[5px] w-8 bg-primary'></div>
            <Link href='/jobs' className={linkClass}>
              Jobs
            </Link>
            <Link href='/#ueberuns' className={linkClass}>
              Über uns
            </Link>
            <Link href='/#UnserTeam' className={linkClass}>
              Team
            </Link>
            <a href='/SatzungBund-fiB.pdf' target='_blank' className={linkClass}>
              Satzung
            </a>
            <Link href='/partner' target='_blank' className={linkClass}>
              Partner
            </Link>
            <Link href='/transparenz' target='_blank' className={linkClass}>
              Transparenz
            </Link>
          </div>

          {/* Informationen */}
          <div className='mt-16 sm:mt-0 w-full sm:w-auto flex justify-center flex-col items-center sm:items-start sm:justify-start'>
            <div className='font-poppins text-base'>Informationen</div>
            <div className='mt-2 mb-5 h-[5px] w-8 bg-primary'></div>
            <Link href='/material' target='_blank' className={linkClass}>
              Material-fiB
            </Link>
            <button onClick={toggleImpressum} className={buttonClass}>
              Impressum
            </button>
            <Link href='/datenschutz' target='_blank' className={linkClass}>
              Datenschutz
            </Link>
            <button onClick={() => setShowCookieConsent(true)} className={buttonClass}>
              Cookie Einstellungen
            </button>
          </div>

          {/* Kontakt */}
          <div className='mt-16 sm:mt-0 w-full sm:w-auto flex justify-center flex-col items-center sm:items-start sm:justify-start'>
            <div className='font-poppins text-base'>Kontakt</div>
            <div className='mt-2 mb-5 h-[5px] w-8 bg-primary'></div>
            <Link href='/#ContactForm' className={linkClass}>
              Kontaktiere uns
            </Link>
            <Link href='/ansprechpartnerinnen' target='_blank' className={linkClass}>
              Ansprechpartner:innen
            </Link>
            <a href={`mailto:${siteConfig.contact.email}`} className={linkClass}>
              {siteConfig.contact.email}
            </a>
            <a href={siteConfig.contact.phoneHref} className={linkClass}>
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='sm:mt-12 mt-20 flex w-full items-center sm:justify-end justify-center text-xl font-bold'
        >
          Zurück nach oben
          <FontAwesomeIcon className='ml-3 w-5 text-black' icon={faArrowUp} />
        </button>
      </footer>

      {/* Impressum overlay */}
      <div
        className={`fixed top-0 z-40 h-screen min-h-[600px] w-screen overflow-scroll bg-lightYellow pt-24 transition-all duration-700 ease-out sm:pt-36 lg:pt-24
        ${impressum ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        <Container>
          {/* Header */}
          <div className='flex justify-between'>
            <div className='text-center font-berlin text-2xl'>Impressum</div>
            <button onClick={toggleImpressum} aria-label='Impressum schließen'>
              <FontAwesomeIcon className='w-6 cursor-pointer' icon={faXmark} />
            </button>
          </div>
          {/* Text */}
          <p>
            <b>Angaben gemäß § 5 TMG</b>
            <br />
            <br />
            <br />
            <b>Geschäftsführung</b>
            <br />
            Benedict Hepp, Lars Mikeler & Sören Dübel
            <br />
            <br />
            Bund-fiB gUG (haftungsbeschränkt)
            <br />
            {siteConfig.contact.address.street}
            <br />
            {siteConfig.contact.address.city}
            <br />
            <br />
            <br />
            <b>Kontakt</b>
            <br />
            Telefon: +49 157 58745855 E-Mail: {siteConfig.contact.email}
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
