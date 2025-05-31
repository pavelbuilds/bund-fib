'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

// Import Components
import Container from '../components/Container';
import Textbox from '../components/Textbox';
import Button from '../components/Button';
import BurgerMenu from '../components/BurgerMenu';
import Mitarbeiter from '../components/Mitarbeiter';
import Gruender from '../components/Gruender.jsx';
import KontaktFormular from '../components/KontaktFormular';
import NavBar from '../components/Layout/NavBar.jsx';
import TitleSection from '../components/LandingPage/TitleSection.jsx';
import PartnerLogos from '../components/LandingPage/PartnerLogos';
import ProjektUebersicht from '../components/LandingPage/ProjektUebersicht';
import AboutUs from '../components/LandingPage/AboutUs';
import Testimonials from '../components/Testimonials.jsx';
import CookieConsent from '../components/LandingPage/CookieConsent';
import Footer from '../components/Layout/Footer';

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCaretDown,
  faFilePdf,
  faSquarePhone,
  faEnvelope,
  faXmark,
  faColonSign,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';

// Import Animtaion Library
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Calendly
import { InlineWidget } from 'react-calendly';
import InstaImage from '../components/InstaImage';
import Team from '../components/LandingPage/Team.jsx';
import ContactForm from '../components/LandingPage/ContactForm.jsx';

// Import Zustand Store
import { useStore } from '../src/store';

export default function Home() {
  const { setShowCookieConsent } = useStore();

  // Initialize AOS Animation Library
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Angebot Hover Dropdown
  const [show, setShow] = useState(false);

  // Swiper Slider Einstellungen
  const pagination = {
    clickable: true,
  };

  // Kontaktieren PopUp Einstellungen
  const [kontaktieren, setKonktaktieren] = useState(false);
  const toggleKontaktieren = () => {
    setKonktaktieren(!kontaktieren);
  };

  // Burger Menu Einstellungen
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const toogleHamburgerMenu = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

  // Impressum PopUp Einstellungen
  const [impressum, setImpressum] = useState(false);
  const toggleImpressum = () => {
    setImpressum(!impressum);
  };

  // Datenschutz PopUp Einstellungen
  const [datenschutz, setDatenschutz] = useState(false);
  const toggleDatenschutz = () => {
    setDatenschutz(!datenschutz);
  };

  const router = useRouter();

  useEffect(() => {
    const pathname = window.location.pathname;
    const hash = window.location.hash;

    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Bund-fiB</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      {/* Burger Menu */}

      {/* Impressum Popup */}
      {
        // <div
        //   className={`fixed z-50 h-screen min-h-[600px] w-screen overflow-scroll bg-lightYellow pt-24 transition-all duration-700 ease-out sm:pt-36 lg:pt-24 ${
        //     impressum ? 'translate-y-0' : 'translate-y-full'
        //   }`}
        // >
        //   {/* Container */}
        //   <Container>
        //     {/* Header */}
        //     <div className='flex justify-between'>
        //       <div className='text-center font-berlin text-2xl'>Impressum</div>
        //       <FontAwesomeIcon
        //         onClick={toggleImpressum}
        //         className='w-6 cursor-pointer'
        //         icon={faXmark}
        //       />
        //     </div>
        //     {/* Text */}
        //     <p>
        //       <b>Angaben gemäß § 5 TMG</b>
        //       <br />
        //       <br />
        //       <br />
        //       <b>Geschäftsführung</b>
        //       <br />
        //       Marlene Langenbucher de Olavarrieta & Sören Dübel
        //       <br />
        //       <br />
        //       Bund-fiB gUG (haftungsbeschränkt)
        //       <br />
        //       Schwedenstraße 17
        //       <br />
        //       13357 Berlin
        //       <br />
        //       <br />
        //       <br />
        //       <b>Kontakt</b>
        //       <br />
        //       Telefon: +49 157 58745855 E-Mail: verwaltung@bund-fib.de​
        //     </p>
        //   </Container>
        // </div>
      }

      {/* --Navigationsleiste-- */}
      <NavBar hamburgerClicked={hamburgerClicked} toogleHamburgerMenu={toogleHamburgerMenu} />

      {/* --Titelseite-- */}
      <TitleSection />

      {/* --Partner Logos-- */}
      <PartnerLogos />

      {/* --Leistungsübersicht-- */}
      <ProjektUebersicht />

      {/* --Über Uns-- */}
      <AboutUs />

      {/* --Unser Team-- */}
      <div id='Team'>
        <Team />
      </div>

      {/* --Jobs-- */}
      {
        // <section id='Jobs' className='relative bg-darkYellow'>
        //   <Container styling={'sm:pt-20 flex justify-center'}>
        //     {/* Jobs Karte */}
        //     <div
        //       data-aos='fade-up'
        //       className='relative z-10 mt-10 mb-72 flex w-full flex-wrap sm:w-[90%]'
        //     >
        //       {/* Bild - linke Seite */}
        //       <div className='hidden w-full sm:w-2/5 lg:block'>
        //         <Image
        //           className='hidden h-full w-full  rounded-tl-3xl rounded-bl-3xl object-cover shadow-2xl lg:block'
        //           src={'/images/jobsKarte.webp'}
        //           width={500}
        //           height={500}
        //           alt='Jobs Karten Bild'
        //         />
        //         {/* Text - rechte Seite */}
        //       </div>
        //       <div className='mb-12 flex w-full flex-col items-start rounded-3xl bg-white py-20 px-10 shadow-2xl sm:mb-0 sm:px-14 lg:w-3/5 lg:items-start lg:rounded-3xl lg:rounded-tl-none lg:rounded-bl-none'>
        //         <div className='font-poppins text-lg'>Jobs bei uns</div>
        //         <div className='mt-5 h-[5px] w-10 bg-primary'></div>
        //         {/* Slogan */}
        //         <div className='my-10 text-left font-berlin text-5xl leading-tight'>
        //           Ich möchte mitmachen
        //         </div>
        //         {/* Beschreibung */}
        //         <div className='mb-10 text-left font-source leading-tight lg:text-left'>
        //           Wir organisieren langfristig angelegte Projekte und möchten Lebenswege zum Positiven
        //           verändern. Dabei zählen wir auf empathische und aufgeschlossene Menschen, die den
        //           Kindern und Jugendlichen wertschätzend entgegentreten und bereit sind mehr als ein:e
        //           Tutor:in zu sein.
        //           <br />
        //           <br />
        //           <br />
        //         </div>
        //         <Button
        //           className='umami--click--Jobs-Termin-buchen'
        //           click={toggleKontaktieren}
        //           cta={'Bewirb dich hier bei uns!'}
        //         ></Button>
        //       </div>
        //     </div>
        //   </Container>
        //   {/* Wave */}
        //   <div className='wave-6'>
        //     <svg
        //       data-name='Layer 1'
        //       xmlns='http://www.w3.org/2000/svg'
        //       viewBox='0 0 1200 120'
        //       preserveAspectRatio='none'
        //     >
        //       <path
        //         d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
        //         className='shape-fill'
        //       ></path>
        //     </svg>
        //   </div>
        // </section>
      }

      {/* --Termin Formular-- */}
      <section className='relative bg-darkYellow'>
        {
          //   <Container
          //   data-aos='fade-up'
          //   styling={'pt-32 pb-32 flex flex-col lg:flex-row items-center '}
          // >
          //   <Textbox
          //     section={'Persönlich oder digital'}
          //     slogan={'Buchen Sie jetzt einen Termin'}
          //     styling={'lg:w-1/2 -mt-1 pb-16 lg:px-20 sm:px-0'}
          //     align={'left'}
          //   >
          //     <div className='mb-5 font-source leading-tight sm:mb-20'>
          //       Finden Sie jetzt die passende Lernförderung für Ihre Schule. Wir setzen uns zusammen
          //       und passen unsere Konzeption auf Ihre Schule an.
          //     </div>
          //   </Textbox>
          //   {/* Calendly */}
          //   <div className='relative z-10 flex w-1/2 items-center justify-center'>
          //     <div className='mt-0 mb-10 flex w-full justify-center sm:mt-[5vh] sm:mb-[10vh] lg:mt-10 lg:mb-10'>
          //       <div className='rounded-xl bg-white p-1 shadow-xl lg:my-10'>
          //         <InlineWidget
          //           styles={{
          //             width: '45vh',
          //             height: '45vh',
          //           }}
          //           pageSettings={{
          //             backgroundColor: 'ffffff',
          //             hideEventTypeDetails: true,
          //             hideLandingPageDetails: true,
          //             primaryColor: 'F9B233',
          //             textColor: '4d5055',
          //           }}
          //           url='https://calendly.com/bundfib/erstes_kennenlernen_projekt_ffs'
          //         />
          //       </div>
          //     </div>
          //   </div>
          //   <div />
          // </Container>
        }
        {/* Wave */}
        <div className='wave-7 z-0'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              className='shape-fill'
            ></path>
          </svg>
        </div>
      </section>

      {/* --Kontakt Formular-- */}
      <div id='ContactForm'>
        <ContactForm />
      </div>

      {/* --Downloads-- */}
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
            <div className='downloadsCSS flex w-full flex-wrap items-center justify-center gap-4 rounded-br-3xl  sm:rounded-tr-3xl  rounded-bl-3xl py-14 sm:w-3/5 sm:rounded-bl-none'>
              <a href='zusatzbogen.pdf' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='text-4xl pb-2 text-white' icon={faFilePdf} />
                  Zusatzbogen für <br /> Lernförderung <br /> <br />
                </div>
              </a>
              <a href='FIB-Heft.pdf' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='text-4xl pb-2 text-white' icon={faFilePdf} />
                  Unser fiB-Heft – <br /> Das Lerntagebuch <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_arabisch.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='text-4xl pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Arabisch <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_deutsch.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='text-4xl pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Deutsch <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_englisch.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='text-4xl pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Englisch <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_farsi.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='text-4xl pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Farsi <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_franzosisch.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='text-4xl pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Französisch <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_kurdisch.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='text-4xl pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Kurdisch <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_russisch.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='text-4xl pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Russisch <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_spanisch.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='text-4xl pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Spanisch <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_türkisch.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='text-4xl pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Türkisch <br /> <br />
                </div>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer setShowCookieConsent={setShowCookieConsent} />
    </div>
  );
}

//  {/* --Lernförderung-- */}
//  <section id='Lernförderung' className='relative bg-darkYellow'>
//  <Container styling={'pb-2 flex flex-col items-center'}>
//    {/* Textabschnitt */}
//    <Textbox
//      animation={'fade-up'}
//      section={'Lernförderung'}
//      slogan={'Zurück in die Erfolgsspur'}
//      align={'center'}
//      styling={'lg:w-3/5 pt-20'}
//    >
//      {/* Text */}
//      <div className='mb-0 font-source leading-tight sm:mb-10'>
//        Wir kommen an Ihre Schule und fördern Ihre Schülerinnen und Schüler, damit sie
//        Wissenslücken schließen und Lernziele erreichen können.
//      </div>
//    </Textbox>
//    {/* Für Schulen, für Eltern Karte */}
//    <div
//      data-aos='fade-up'
//      className='relative z-10 mt-0 mb-44 flex w-full flex-wrap sm:mt-10'
//    >
//      {/* Für Schulen */}
//      <div data-aos-anchor-placement='center-bottom' className='w-full lg:w-1/2'>
//        <Image
//          className='hidden h-full w-full object-cover shadow-2xl brightness-50 filter lg:block lg:rounded-tl-3xl'
//          src='/images/schule.webp'
//          width={400}
//          height={300}
//          alt='Für Schulen'
//        />
//        {/* <img
//          className='shadow-2xl lg:block hidden h-full w-full object-cover filter brightness-50 lg:rounded-tl-3xl'
//          src='/images/schule.webp'
//          alt=''
//        /> */}
//      </div>
//      <div
//        data-aos-anchor-placement='center-bottom'
//        className='mb-12 flex w-full flex-col items-center rounded-3xl bg-white px-14 pt-14 pb-24 shadow-2xl lg:mb-0 lg:block lg:w-1/2 lg:rounded-b-none lg:rounded-tr-3xl lg:rounded-tl-none lg:px-28'
//      >
//        <div className='text-center font-poppins text-sm sm:text-left'>
//          Innovatives Bildungsangebot
//        </div>
//        <div className='font-poppints mt-5 text-3xl font-semibold'>Für Schulen</div>
//        <div className='mt-6 h-[5px] w-10 bg-primary'></div>
//        <div className='mt-12 text-center font-source leading-tight lg:text-left'>
//          Jedes Kind ist anders, jede Schule ist anders. Wir passen unsere Konzeption auf Ihre
//          Vorstellungen an. Dabei können Sie sich auf einen verlässlichen und kooperativen
//          Austausch verlassen. Gerne organisieren wir die Lernförderung auch an Ihrer Schule.
//          <br />
//          <br />
//          {/* <b>Mehr Informationen &#62;&#62;</b> */}
//        </div>
//      </div>
//      {/* Für Eltern */}
//      <div className='mt-0 flex w-full flex-col items-center rounded-3xl bg-white px-14 pt-20 pb-20 shadow-2xl sm:mt-12 lg:mt-0 lg:block lg:w-1/2 lg:rounded-t-none lg:rounded-bl-3xl lg:rounded-br-none lg:px-28 lg:pt-14'>
//        <div className='text-center font-poppins text-sm sm:text-left'>
//          Finanziertes Bildungsangebot
//        </div>
//        <div className='font-poppints mt-5 text-3xl font-semibold'>Für Eltern</div>
//        <div className='mt-6 h-[5px] w-10 bg-primary'></div>
//        <div className='mt-12 text-center font-source leading-tight lg:text-left'>
//          Wir helfen Ihnen bei den kleinen und großen Problemen, damit Ihr Kind wieder in die
//          Spur findet. Mit dem Bildungs und Teilhabe Programm (BuT), bekommt Ihr Kind sogar
//          kostenlose Unterstützung. Wir beraten Sie gerne dazu.
//          {/* <b>Mehr Informationen &#62;&#62;</b> */}
//          <br />
//          <br />{' '}
//        </div>
//      </div>
//      <div className='w-1/2'>
//        <Image
//          className='hidden h-full w-full rounded-br-3xl object-cover shadow-2xl brightness-50 filter lg:block'
//          src='/images/eltern.webp'
//          width={400}
//          height={300}
//          alt='Für Eltern'
//        />
//        {/* <img
//          className='shadow-2xl lg:block hidden h-full w-full object-cover filter brightness-50 rounded-br-3xl'
//          src='/images/eltern.webp'
//          alt=''
//        /> */}
//      </div>
//      {/* Termin Button */}
//      <a
//        onClick={toggleKontaktieren}
//        className='umami--click--Lernförderung-Termin-buchen cursor-pointer'
//      >
//        <div className='absolute top-2/4 left-2/4 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-8 border-primary bg-white text-center font-poppins text-sm shadow-[0_0_30px_-15px_rgba(0,0,0,0.4)] transition-transform lg:hover:scale-[105%]'>
//          Hier kostenlos
//          <br />
//          Beratung vereinbaren
//        </div>
//      </a>
//    </div>
//  </Container>
//  {/* Wellen Teiler */}
//  <div className='wave-three relative z-0'>
//    <svg
//      data-name='Layer 1'
//      xmlns='http://www.w3.org/2000/svg'
//      viewBox='0 0 1200 120'
//      preserveAspectRatio='none'
//    >
//      <path
//        d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
//        className='shape-fill'
//      ></path>
//    </svg>
//  </div>
// </section>

// {/* --Privatunterricht-- */}
// <section id='Privatunterricht' className='relative bg-lightYellow pt-0 sm:pb-10 sm:pt-20 '>
//  <Container styling={'pb-32 flex flex-col items-center'}>
//    {/* Textabschnitt */}
//    <Textbox
//      animation={'fade-up'}
//      section={'Privatunterricht'}
//      slogan={'Individueller Unterricht auf Ihr Kind angepasst'}
//      align={'center'}
//      styling={'lg:w-3/5 -mt-1'}
//    >
//      {/* Text */}
//      <div className='mb-10 font-source leading-tight'>
//        Bei unserem Privatunterricht steht Ihr Kind im Mittelpunkt. Wir achten darauf, dass
//        unsere Tutoren und Tutorinnen mit Ihrem Kind auf einer Wellenlänge sind. Gemeinsam
//        finden wir eine Lösung für jedes Problem.
//      </div>
//    </Textbox>
//    {/* Kennenlernen & Probestunde */}
//    <div className='relative z-10 mt-0 flex flex-col text-white sm:mt-14 lg:flex-row'>
//      {/* Kennenlernen Karte */}
//      <div
//        data-aos={'fade-up'}
//        onClick={toggleKontaktieren}
//        className='erstesKennenlernen relative mb-20 h-72 cursor-pointer rounded-2xl shadow-2xl transition-transform sm:w-full lg:mr-12 lg:mb-0 lg:w-1/2 lg:hover:scale-[102%]'
//      >
//        <div className='mx-12 mt-12 font-poppins text-xl sm:mt-12'>Erstes Kennenlernen</div>
//        <div className='mx-12 mt-5 h-[5px] w-10 bg-primary '></div>
//        <div className='text-md mx-12 mt-8 mb-16 font-source sm:mt-10'>
//          Gemeinsam können wir am meisten bewegen. Wir helfen, die beste Strategie für Ihr
//          Kind zu entwickeln.
//        </div>
//        <a className='umami--click--KennenlernenVereinabren-Termin-buchen absolute bottom-0 right-0 float-right mt-10 flex rounded-tl-2xl rounded-br-2xl bg-primary px-6 py-2 text-sm font-semibold text-white sm:mt-5'>
//          Kennenlernen vereinbaren
//          <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
//        </a>
//      </div>
//      {/* Probestunde Karte */}
//      <div
//        data-aos={'fade-up'}
//        onClick={toggleKontaktieren}
//        className='kostenloseProbestunde relative h-72 cursor-pointer rounded-2xl shadow-2xl transition-transform sm:w-full lg:mr-12 lg:mb-0 lg:w-1/2 lg:hover:scale-[102%]'
//      >
//        <div className='mx-12 mt-12 font-poppins text-xl sm:mt-12'>
//          Kostenlose Probestunde
//        </div>
//        <div className='mx-12 mt-5 h-[5px] w-10 bg-primary '></div>
//        <div className='text-md mx-12 mt-8 mb-5 font-source sm:mt-10'>
//          Am besten wir lernen uns persönlich kennen, um den ersten Schritt zu machen.
//        </div>
//        <a className='umami--click--ProbestundeVereinbaren-Termin-buchen absolute bottom-0 right-0 float-right mt-10 flex rounded-tl-2xl rounded-br-2xl bg-primary px-6 py-2 text-sm font-semibold text-white sm:mt-5'>
//          Probestunde vereinbaren
//          <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
//        </a>
//      </div>
//    </div>
//  </Container>
// </section>

// {/* --Berufsvorbereitung-- */}
// <section id='Berufsvorbereitung' className='relative bg-lightYellow pt-0 sm:pt-20 lg:pb-52'>
//  <Container styling={'pb-32 flex flex-col items-center'}>
//    {/* Textabschnitt */}
//    <Textbox
//      animation={'fade-up'}
//      section={'Berufsvorbereitung'}
//      slogan={'Ein duales Studium beim Bund-fiB'}
//      align={'center'}
//      styling={'lg:w-3/5 -mt-1'}
//    >
//      {/* Text */}
//      <div className='mb-10 font-source leading-tight'>
//        Du möchtest dein Studium im sozialen Bereich durch praktische Erfahrung bereichern?
//        Werde unser Praxispartner im dualen Studium und gestalte die Zukunft im sozialen
//        Bereich aktiv mit! Profitiere von praxisnaher Ausbildung, individueller Betreuung,
//        finanzieller Unabhängigkeit, wertvollen Netzwerkaufbau, vielseitigen Aufgaben und
//        hervorragenden Karrierechancen.
//      </div>
//    </Textbox>
//    <Button
//      className='umami--click--TitleSeite-Termin-buchen'
//      cta={'Termin buchen'}
//      click={toggleKontaktieren}
//    ></Button>
//    <Textbox
//      animation={'fade-up'}
//      section={''}
//      slogan={'Zusatzqualifikationen für Auszubildende der Sozialen Berufe:'}
//      align={'center'}
//      styling={'lg:w-3/5 mt-20'}
//    >
//      {/* Text */}
//      <div className='mb-10 font-source leading-tight'>
//        Zusatzqualifikationen sind für Auszubildende im sozialen Bereich essenziell, da sie
//        spezialisierte Kenntnisse und Fähigkeiten vermitteln, die Karrierechancen verbessern
//        und die Qualität der Arbeit steigern.
//      </div>
//    </Textbox>
//    {/* Kennenlernen & Probestunde */}
//    <div className='relative z-10 mt-0 flex flex-col text-white sm:mt-14 lg:flex-row'>
//      {/* Kennenlernen Karte */}
//      <div
//        data-aos={'fade-up'}
//        onClick={toggleKontaktieren}
//        className='erstesKennenlernen relative mb-20  cursor-pointer rounded-2xl shadow-2xl transition-transform sm:w-full lg:mr-12 lg:mb-0 lg:w-1/2 lg:hover:scale-[102%]'
//      >
//        <div className='mx-12 mt-12 font-poppins text-xl sm:mt-12'>
//          DaF/ DaZ und souveräner Umgang mit interkulturellen Klassen/ Gruppen
//        </div>
//        <div className='mx-12 mt-5 h-[5px] w-10 bg-primary '></div>
//        <div className='text-md mx-12 mt-8 mb-16 font-source sm:mt-10'>
//          Die Zusatzausbildung &quot;DaF/DaZ und souveräner Umgang mit interkulturellen
//          Klassen/Gruppen&quot; ist wichtig, da sie Auszubildenden hilft, nicht nur
//          sprachliche Kompetenzen zu vermitteln, sondern auch interkulturelle Sensibilität zu
//          entwickeln, um auf die Vielfalt der Schülerinnen und Schüler angemessen einzugehen
//          und ein förderliches Lernumfeld zu schaffen. Dies fördert nicht nur den Lernprozess,
//          sondern stärkt auch das gegenseitige Verständnis und die Akzeptanz innerhalb der
//          Lerngruppen.
//        </div>
//        <a className='umami--click--KennenlernenVereinabren-Termin-buchen absolute bottom-0 right-0 float-right mt-10 flex rounded-tl-2xl rounded-br-2xl bg-primary px-6 py-2 text-sm font-semibold text-white sm:mt-5'>
//          Termin anfragen
//          <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
//        </a>
//      </div>
//      {/* Probestunde Karte */}
//      <div
//        data-aos={'fade-up'}
//        onClick={toggleKontaktieren}
//        className='kostenloseProbestunde relative  cursor-pointer rounded-2xl shadow-2xl transition-transform sm:w-full lg:mr-12 lg:mb-0 lg:w-1/2 lg:hover:scale-[102%]'
//      >
//        <div className='mx-12 mt-12 font-poppins text-xl sm:mt-12'>
//          Umgang mit traumatisierten Geflüchteten im Schul- und Sozialen Bereich und Burnout
//          Prävention
//        </div>
//        <div className='mx-12 mt-5 h-[5px] w-10 bg-primary '></div>
//        <div className='text-md mx-12 mt-8 mb-5 font-source sm:mt-10'>
//          Die Zusatzausbildung &quot;Umgang mit traumatisierten Geflüchteten im Schul- und
//          Sozialen Bereich und Burnout Prävention&quot; ist wichtig, weil sie Auszubildende
//          befähigt, angemessen auf die besonderen Bedürfnisse traumatisierter Geflüchteter
//          einzugehen und gleichzeitig ihre eigene psychische Gesundheit zu schützen. Dies
//          trägt zur Schaffung einer unterstützenden Umgebung bei, die sowohl den Geflüchteten
//          als auch den Auszubildenden zugutekommt und langfristig zur erfolgreichen
//          Integration beiträgt.
//        </div>
//        <a className='umami--click--ProbestundeVereinbaren-Termin-buchen absolute bottom-0 right-0 float-right mt-10 flex rounded-tl-2xl rounded-br-2xl bg-primary px-6 py-2 text-sm font-semibold text-white sm:mt-5'>
//          Termin anfragen
//          <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
//        </a>
//      </div>
//    </div>
//  </Container>
//  {/* Wave */}
//  <div className='wave-four z-0'>
//    <svg
//      data-name='Layer 1'
//      xmlns='http://www.w3.org/2000/svg'
//      viewBox='0 0 1200 120'
//      preserveAspectRatio='none'
//    >
//      <path
//        d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
//        className='shape-fill'
//      ></path>
//    </svg>
//  </div>
// </section>

// {/* --Bildungsprojekte-- */}
// <section id='Bildungsprojekte' className='bg-middleYellow pt-10 pb-14'>
//  <Container styling={'flex lg:flex-row flex-col-reverse'}>
//    {/* Slider */}
//    <div
//      data-aos={'fade-up'}
//      className='sm:mx-auto sm:mt-16 sm:w-[90%] lg:mx-0 lg:mt-0 lg:w-1/2'
//    >
//      <Swiper
//        pagination={pagination}
//        loop={true}
//        navigation={true}
//        modules={[Autoplay, Pagination]}
//        autoplay={{
//          delay: 10000,
//          disableOnInteraction: false,
//        }}
//        className='mySwiper'
//      >
//        <SwiperSlide>
//          <div className='mb-16 w-full rounded-2xl bg-white sm:w-[70%] sm:shadow-2xl'>
//            <div className='bildungsProjektFit rounded-t-2xl'>
//              <div className='px-7 pt-44 pb-8 text-left text-white'>
//                <div className='text-sm'>Ein Projekt mit Hand und Fuß</div>
//                <div className='mt-3 text-3xl font-semibold'>Fit für die Schule</div>
//              </div>
//            </div>
//            <div className='my-8 mx-7 text-left font-source text-sm'>
//              Als Bildungsträger sehen wir uns in der Verantwortung, unsere Ressourcen mit
//              geflüchteten Familien zu teilen. Manchmal dauert es leider länger, bis ein
//              geflüchtetes Kind einen Schulplatz zugewiesen bekommt. In solchen Fällen fangen
//              wir die Kinder auf, beschulen sie und führen mit ihnen spannende Workshops und
//              Projekte durch, die nicht nur ihre Bildung fördern, sondern auch gezielt auf die
//              Berufsvorbereitung ausgerichtet sind. Unsere Grundbildung bereitet die Kinder
//              somit auch auf eine mögliche berufliche Zukunft vor.
//            </div>
//            {/* <a
//              className='flex bg-primary text-white text-sm font-semibold float-right sm:mt-5 mt-10 px-4 py-2 rounded-tl-2xl rounded-br-2xl'
//              href=''
//            >
//              mehr erfahren <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
//            </a> */}
//          </div>
//        </SwiperSlide>
//        <SwiperSlide>
//          <div className='mb-16 w-full rounded-2xl bg-white sm:w-[70%] sm:shadow-2xl'>
//            <div className='bildungsProjektFit rounded-t-2xl'>
//              <div className='px-7 pt-44 pb-8 text-left text-white'>
//                <div className='text-sm'>
//                  Kulturelle und sprachbildende Angebote - europaweit
//                </div>
//                <div className='mt-3 text-3xl font-semibold'>Erasmus+</div>
//              </div>
//            </div>
//            <div className='my-8 mx-7 text-left font-source text-sm'>
//              Lehrkräfte sind die Schlüsselfiguren, wenn es um die Berufsorientierung unserer
//              Schülerinnen und Schüler geht. Deshalb haben wir ein Programm entwickelt, das
//              die Lehrkräfte, die mit uns arbeiten, in ihrer Weiterentwicklung unterstützt.
//              Wir sind davon überzeugt, dass gut ausgebildete Lehrkräfte einen entscheidenden
//              Beitrag dazu leisten können, junge Menschen auf ihrem Weg in die Berufswelt zu
//              begleiten und zu inspirieren.
//            </div>
//            {/* <a
//              className='flex bg-primary text-white text-sm font-semibold float-right sm:mt-5 mt-10 px-4 py-2 rounded-tl-2xl rounded-br-2xl'
//              href=''
//            >
//              mehr erfahren <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
//            </a> */}
//          </div>
//        </SwiperSlide>
//      </Swiper>
//    </div>
//    <Textbox
//      animation={'fade-up'}
//      section={'Bildungsprojekte'}
//      slogan={'Jetzt für morgen!'}
//      align={'left'}
//      styling={'lg:w-3/5 sm:pb-0 lg:px-20 pb-16'}
//    >
//      {/* Text */}
//      <div className='mb-10 font-source leading-tight'>
//        Zusammen mit unseren Kooperationspartnern machen wir nachhaltige Bildungsangebote
//        zugänglich für jedes Kind. Kommen Sie gerne auf uns zu und wir besprechen die
//        Umsetzung.
//        <br />
//        <br />
//        Bei allen Fragen beraten wir Sie gerne persönlich - natürlich kostenlos und
//        unverbindlich
//      </div>
//      <Button
//        className='umami--click--ProjektBesprechen-Termin-buchen'
//        cta={'Ihr Projekt besprechen'}
//        click={toggleKontaktieren}
//      ></Button>
//    </Textbox>
//  </Container>
// </section>
