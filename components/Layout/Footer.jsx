import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Container from '../Container';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useStore } from '../../src/store';

const Footer = () => {
  const { setShowCookieConsent } = useStore();
  const [impressum, setImpressum] = useState(false);
  const toggleImpressum = () => {
    setImpressum(!impressum);
  };

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
          </svg>{' '}
        </div>
        {/* Container */}
        <div className='mx-auto flex max-w-screen-xl flex-col  justify-between pt-20 sm:flex-row sm:pt-28'>
          <div className='flex flex-col items-center sm:justify-center'>
            {/* Logo */}
            <Image
              className='h-12 object-contain'
              src='/images/logos/bund_fib_logo.webp'
              width={300}
              height={30}
              alt='Bund fiB Logo'
            />
            {/* Social Media Icons */}
            <div className='mt-10 flex w-full items-center justify-center gap-4'>
              {/* Instagram */}
              <a
                href='https://www.instagram.com/bund_fib/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex h-10 w-10 items-center justify-center rounded-full bg-darkYellow text-black'
              >
                <FontAwesomeIcon className='w-5 text-black' icon={faInstagram} />
              </a>
              {/* LinkedIn */}
              <a
                href='https://www.linkedin.com/company/bund-f%C3%BCr-integrative-bildung/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex h-10 w-10 items-center justify-center rounded-full bg-darkYellow text-black'
              >
                <FontAwesomeIcon className='w-5 text-black' icon={faLinkedin} />
              </a>
              {/* Email */}
              <a
                href='mailto:verwaltung@bund-fib.de'
                className='flex h-10 w-10 items-center justify-center rounded-full bg-darkYellow text-black'
              >
                <FontAwesomeIcon className='w-5 ' icon={faEnvelope} />
              </a>
            </div>
          </div>

          {/* Organisation */}
          <div className='mt-16 sm:mt-0 w-full sm:w-auto flex justify-center flex-col items-center sm:items-start sm:justify-start'>
            <div className='font-poppins text-base'>Organisation</div>
            <div className='mt-2 mb-5 h-[5px] w-8 bg-primary'></div>
            <Link href='/#UnserTeam' className='my-1 font-source text-sm'>
              <div className='my-1 font-source text-sm'>Team</div>
            </Link>
            <Link href='/#ueberuns' className='my-1 font-source text-sm'>
              <div className='my-1 font-source text-sm'>Über uns</div>
            </Link>
            <a href='/jobs'>
              <div className='my-1 font-source text-sm'>Jobs</div>
            </a>
            <a className='my-1 cursor-pointer font-source text-sm' href='/satzung' target='_blank'>
              Satzung
            </a>
            <a className='my-1 cursor-pointer font-source text-sm' href='/partner' target='_blank'>
              <div className='my-1 font-source text-sm'>Partner</div>
            </a>
          </div>
          {/* Informationen */}
          <div className='mt-16 sm:mt-0 w-full sm:w-auto flex justify-center flex-col items-center sm:items-start sm:justify-start'>
            <div className='font-poppins text-base'>Informationen</div>
            <div className='mt-2 mb-5 h-[5px] w-8 bg-primary'></div>
            <Link href='/#Downloads' className='my-1 font-source text-sm'>
              <div className='my-1 font-source text-sm'>Material-fiB</div>
            </Link>
            <div onClick={toggleImpressum} className='my-1 cursor-pointer font-source text-sm'>
              Impressum
            </div>
            <div>
              <a
                className='my-1 cursor-pointer font-source text-sm'
                href='/datenschutz'
                target='_blank'
              >
                Datenschutz
              </a>
            </div>
            <button onClick={() => setShowCookieConsent(true)}>
              <div className='my-1 font-source text-sm text-left'>Cookie Einstellungen</div>
            </button>
          </div>
          {/* Kontakt */}
          <div className='mt-16 sm:mt-0 w-full sm:w-auto flex justify-center flex-col items-center sm:items-start sm:justify-start'>
            <div className='font-poppins text-base'>Kontakt</div>
            <div className='mt-2 mb-5 h-[5px] w-8 bg-primary'></div>
            <Link href='/#ContactForm'>
              <div className='my-1 font-source text-sm'>Kontaktiere uns</div>
            </Link>
            <a href='/ansprechpartnerinnen' target='_blank'>
              <div className='my-1 font-source text-sm'>Ansprechpartner:innen</div>
            </a>
            <a href='mailto:verwaltung@bund-fib.de'>
              <div className='my-1 font-source text-sm'>verwaltung@bund-fib.de</div>
            </a>
            <a href='tel:+493068908697'>
              <div className='my-1 font-source text-sm'>+49 30 68908696</div>
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
      {/* Impressum */}
      <div
        className={`fixed top-0 z-40 h-screen min-h-[600px] w-screen overflow-scroll bg-lightYellow pt-24 transition-all duration-700 ease-out sm:pt-36 lg:pt-24 
        ${impressum ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        {/* Container */}
        <Container>
          {/* Header */}
          <div className='flex justify-between'>
            <div className='text-center font-berlin text-2xl'>Impressum</div>
            <FontAwesomeIcon
              onClick={toggleImpressum}
              className='w-6 cursor-pointer'
              icon={faXmark}
            />
          </div>
          {/* Text */}
          <p>
            <b>Angaben gemäß § 5 TMG</b>
            <br />
            <br />
            <br />
            <b>Geschäftsführung</b>
            <br />
            Marlene Langenbucher de Olavarrieta & Sören Dübel
            <br />
            <br />
            Bund-fiB gUG (haftungsbeschränkt)
            <br />
            Schwedenstraße 17
            <br />
            13357 Berlin
            <br />
            <br />
            <br />
            <b>Kontakt</b>
            <br />
            Telefon: +49 157 58745855 E-Mail: verwaltung@bund-fib.de​
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
