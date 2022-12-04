import Head from 'next/head';
import { useState, useEffect } from 'react';
// Import Components
import Container from '../components/Container';
import Textbox from '../components/Textbox';
import Button from '../components/Button';
import BurgerMenu from '../components/BurgerMenu';
import Mitarbeiter from '../components/Mitarbeiter';
import Gründer from '../components/Gründer';
import KontaktFormular from '../components/KontaktFormular';
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
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
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
// // Import Instagram API
// import { IgApiClient } from 'instagram-private-api';

export default function Home() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // console.log(posts);

  const [show, setShow] = useState(false);

  const showDropdown = () => {
    setShow(true);
  };

  const hideDropdown = () => {
    setShow(false);
  };

  const pagination = {
    clickable: true,
  };

  const [kontaktieren, setKonktaktieren] = useState(false);
  const toggleKontaktieren = () => {
    setKonktaktieren(!kontaktieren);
  };

  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const toogleHamburgerMenu = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

  const [impressum, setImpressum] = useState(false);
  const toggleImpressum = () => {
    setImpressum(!impressum);
  };

  const [datenschutz, setDateschutz] = useState(false);
  const toggleDatenschutz = () => {
    setDateschutz(!datenschutz);
  };

  return (
    <div>
      <Head>
        <title>Bund-fiB</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      {/* Kontaktieren Popup */}
      <div
        className={`transition-all duration-700 ease-out fixed bg-lightYellow z-50 w-screen lg:pt-24 sm:pt-36 pt-24 h-screen min-h-[600px] ${
          kontaktieren ? '-translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Container */}
        <div className='max-w-screen-xl flex flex-col justify-center'>
          {/* Header */}
          <div className='font-berlin text-2xl text-center'>
            Buchen Sie ein Gespräch mit uns oder schreiben Sie uns eine Nachricht
          </div>
          {/* Kalender & Kontaktfomular */}
          <div className='flex w-full justify-center lg:mt-10 sm:mt-20 mt-0 lg:mb-10 sm:mb-32 mb-10'>
            {/* Kalender */}
            <div className='w-1/2 flex justify-center items-center relative z-10 lg:border-r border-solid border-primary pt-5'>
              <div className='p-1 bg-white rounded-xl shadow-xl'>
                <InlineWidget
                  styles={{
                    width: '360px',
                    height: '360px',
                  }}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: true,
                    hideLandingPageDetails: true,
                    primaryColor: 'F9B233',
                    textColor: '4d5055',
                  }}
                  url='https://calendly.com/bundfib/erstes_kennenlernen'
                />{' '}
              </div>
            </div>
            {/* Kontaktformular */}
            <div className='lg:flex w-1/2 justify-center py-5 hidden'>
              <KontaktFormular styling={'w-[320px] flex flex-col'} />
            </div>
          </div>
          {/* Icons */}
          <div className='flex justify-center'>
            <a href='mailto:verwaltung@bund-fib.de'>
              <div className='text-[10px] text-center font-poppins'>
                <FontAwesomeIcon className='w-7 mx-10 mb-2' icon={faEnvelope} />
                E-Mail
              </div>
            </a>
            <a href='tel:+4915758745855'>
              <div className='text-[10px] text-center font-poppins'>
                <FontAwesomeIcon className='w-6 mx-10 mb-2' icon={faSquarePhone} />
                Telefon
              </div>
            </a>
            <a href='https://www.instagram.com/bund_fib/'>
              <div className='text-[10px] text-center font-poppins'>
                <FontAwesomeIcon className='w-6 mx-10 mb-2' icon={faInstagram} />
                Instagram
              </div>
            </a>
          </div>
          <Button
            click={toggleKontaktieren}
            styling={'lg:hidden sm:mt-32 mt-10 w-40 mx-auto'}
            cta={'Schließen'}
          />
        </div>
      </div>

      {/* Burger Menu */}
      <div
        className={`transition-all duration-700 ease-out fixed bg-lightYellow z-40 w-screen lg:pt-24 h-screen min-h-[600px] ${
          hamburgerClicked ? '-translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Container */}
        <div className='max-w-screen-xl h-full flex flex-col justify-center items-center sm:text-[40px] text-3xl font-berlin'>
          {/* Header */}
          <a href='#Lernförderung'>
            <div onClick={toogleHamburgerMenu} className='sm:mb-16 mb-10'>
              Lernförderung
            </div>
          </a>
          <a href='#Privatunterricht'>
            <div onClick={toogleHamburgerMenu} className='sm:mb-16 mb-10'>
              Privatunterricht
            </div>
          </a>
          <a href='#Bildungsprojekte'>
            <div onClick={toogleHamburgerMenu} className='sm:mb-16 mb-10'>
              Bildungsprojekte
            </div>
          </a>
          <a href='#ÜberUns'>
            <div onClick={toogleHamburgerMenu} className='sm:mb-16 mb-10'>
              Über Uns
            </div>
          </a>
          <a href='#Jobs'>
            <div onClick={toogleHamburgerMenu} className='sm:mb-16 mb-10'>
              Jobs
            </div>
          </a>
          <a href='#Aktuelles'>
            <div onClick={toogleHamburgerMenu} className='sm:mb-16 mb-10'>
              Aktuelles
            </div>
          </a>
        </div>
      </div>

      {/* Impressum Popup */}
      <div
        className={`transition-all duration-700 ease-out fixed bg-lightYellow z-50 w-screen lg:pt-24 sm:pt-36 pt-24 h-screen min-h-[600px] ${
          impressum ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Container */}
        <Container>
          {/* Header */}
          <div className='flex justify-between'>
            <div className='font-berlin text-2xl text-center'>Impressum</div>
            <FontAwesomeIcon
              onClick={toggleImpressum}
              className='w-6 cursor-pointer'
              icon={faXmark}
            />
          </div>
        </Container>
      </div>

      {/* Datenschutz Popup */}
      <div
        className={`transition-all duration-700 ease-out fixed bg-lightYellow z-50 w-screen lg:pt-24 sm:pt-36 pt-24 h-screen min-h-[600px] ${
          datenschutz ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Container */}
        <Container>
          {/* Header */}
          <div className='flex justify-between'>
            <div className='font-berlin text-2xl text-center'>Datenschutz</div>
            <FontAwesomeIcon
              onClick={toggleDatenschutz}
              className='w-6 cursor-pointer'
              icon={faXmark}
            />
          </div>
        </Container>
      </div>

      {/* --Navigationsleiste-- */}
      <nav
        className='fixed min-w-full bg-lightYellow z-50 shadow-md
                      py-3 lg:py-0'
      >
        <div className='max-w-screen-xl flex justify-between items-center mx-auto sm:px-20 px-5'>
          {/* Logo */}
          <div>
            <img className='h-9' src='/images/logos/bund_fib_logo.png' alt='' />
          </div>
          {/* Menu */}
          <ul className='hidden lg:flex items-center font-source justify-between text-sm w-[400px]'>
            <li className='relative py-5' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
              <a href='#Leistungsübersicht' className='flex'>
                Angebot <FontAwesomeIcon className='ml-2 w-2' icon={faCaretDown} />
                {show && (
                  <ul className='absolute bg-lightYellow mt-10 pb-5 -translate-x-1/3 rounded-b-xl shadow-md'>
                    <a href='#Lernförderung'>
                      <li className='py-3 hover:bg-darkYellow px-10'>Lernförderung</li>
                    </a>
                    <a href='#Privatunterricht'>
                      <li className='py-3 hover:bg-darkYellow px-10'>Privatunterricht</li>
                    </a>
                    <a href='#Bildungsprojekte'>
                      <li className='py-3 hover:bg-darkYellow px-10'>Bildungsprojekte</li>
                    </a>
                  </ul>
                )}
              </a>
            </li>
            <li>
              <a href='#ÜberUns'>Über Uns</a>
            </li>
            <li>
              <a href='#Jobs'>Jobs</a>
            </li>
            <li>
              <a href='#Aktuelles'>Aktuelles</a>
            </li>
          </ul>
          <Button
            click={toggleKontaktieren}
            cta={
              kontaktieren ? (
                <FontAwesomeIcon className='w-3 text-white' icon={faXmark} />
              ) : (
                'Kontaktieren'
              )
            }
            styling={kontaktieren ? 'lg:block hidden w-22 mx-[38px]' : 'lg:block hidden w-40'}
          />
          <BurgerMenu state={hamburgerClicked} onClickFunc={toogleHamburgerMenu} />
        </div>
      </nav>

      {/* --Titelseite-- */}
      <section className='bg-[url("/images/title.jpg")] bg-cover sm:h-[85vh] h-[78vh] relative'>
        <div className='w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center'>
          {/* Title Slogal */}
          <h1 className='sm:w-[600px] font-berlin text-white sm:text-6xl text-5xl text-center'>
            Titel Slogan - Was wir machen in einem Satz
          </h1>
          {/* Untertitle */}
          <div className='sm:w-[600px] mt-10 px-5 sm:px-0 font-source text-lg text-center text-white leading-tight'>
            Kurze Zusammenfassung unserer Leistungspalette - Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
          </div>
          {/* Buttons */}
          <div className='flex flex-col sm:flex-row items-center justify-center mt-10'>
            <Button cta={'Termin buchen'} click={toggleKontaktieren}></Button>
            <a href='#Leistungsübersicht'>
              <button className=' lg:hover:scale-[102%] transition-all border-2 border-white font-source sm:ml-5 mt-5 sm:mt-0 px-9 sm:py-0 py-1 rounded-full text-white sm:text-sm text-lg sm:h-8 font-semibold'>
                mehr erfahren
              </button>
            </a>
          </div>
        </div>
        {/* Wellen Teiler */}
        <div className='wave'>
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

      {/* --Partner Logos-- */}
      <section className='bg-lightYellow'>
        <Container styling={'pt-5'}>
          {/* Partner Logos */}
          <div className='flex justify-between items-center pt-5 overflow-hidden'>
            <img className='sm:h-12 h-9 sm:px-0' src='/images/logos/haus_der_jugend.png' alt='' />
            <img className='sm:h-12 h-9 sm:px-0' src='/images/logos/OASE_logo.png' alt='' />
            <img
              className='sm:h-12 h-9 sm:px-0'
              src='/images/logos/bundesvereinigung_nachhaltigkeit.svg'
              alt=''
            />
            <img
              className='sm:h-9 h-9 sm:block hidden sm:px-0'
              src='/images/logos/weißes_berlin_logo.png'
              alt=''
            />
          </div>
        </Container>
      </section>

      {/* --Leistungsübersicht-- */}
      <section
        id='Leistungsübersicht'
        className='bg-lightYellow relative lg:pb-0 sm:pb-28 pb-[650px] sm:pt-32 pt-20'
      >
        <Container styling={'pb-40 flex lg:flex-row flex-col lg:items-center lg:justify-between'}>
          {/* Textabschnitt */}
          <Textbox
            section={'Leistungsübersicht'}
            slogan={'Unser Angebot auf einen Blick'}
            align={'left'}
            styling={'lg:w-1/3'}
          >
            {/* Text */}
            <div className='font-source mb-10 leading-tight'>
              Unsere Bildungsangebote sind auf Ihre Vorstellungen zugeschnitten. Dabei liegt uns
              eine enge und vertrauensvolle Kommunikation am Herzen. Denn eine gemeinsam entwickelte
              Vision stärkt die Motivation aller Beteiligten.
              <br />
              <br />
              Bei Allen Fragen beraten wir Sie gerne persönlich - natürlich kostenlos und
              unverbindlich
            </div>
            <Button cta={'Termin buchen'} click={toggleKontaktieren} />
          </Textbox>
          {/* Übersichtskarten */}
          <div className='relative z-10 bg-purple-500 bg-opacity-0 lg:w-[60%] w-full h-[780px] flex sm:flex-row flex-col sm:flex-wrap justify-between items-start'>
            {/* Lernförderung Karte*/}
            <a
              data-aos='fade-up'
              href='#Lernförderung'
              className='lg:hover:scale-[102%] transition-all sm:w-[45%] w-full rounded-2xl bg-white shadow-2xl'
            >
              <img className='rounded-t-3xl brightness-[0.6]' src='/images/schule.jpg' alt='' />
              <div className='font-poppins text-xl lg:mt-7 mt-12 mx-7'>Lernförderung</div>
              <div className='font-source text-sm lg:mt-5 mt-8 mx-7'>
                Wir kommen an Ihre Schule und fördern Ihre Schülerinnen und Schüler, um
                Wissenslücken zu schließen und Lernziele zu erreichen.
              </div>
              <div className='flex bg-primary text-white text-sm font-semibold float-right lg:mt-5 mt-10 px-4 py-2 rounded-tl-2xl rounded-br-2xl'>
                mehr erfahren <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
              </div>
            </a>
            {/* Privatunterricht */}
            <a
              data-aos='fade-up'
              href='#Privatunterricht'
              className='lg:hover:scale-[102%] transition-all sm:w-[45%] rounded-2xl bg-white shadow-2xl lg:mt-56 sm:mt-0 mt-16'
            >
              <img
                className='rounded-t-3xl brightness-[0.6]'
                src='/images/privatunterricht.jpg'
                alt=''
              />
              <div className='font-poppins text-xl lg:mt-7 mt-12 mx-7'>Privatunterricht</div>
              <div className='font-source text-sm lg:mt-5 mt-8 mx-7'>
                Ihr Kind steht im Mittelpunkt. Gemeinsam mit unseren Tutoren und Tutorinnen finden
                wir eine Lösung für jedes Problem.
              </div>
              <div className='flex bg-primary text-white text-sm font-semibold float-right lg:mt-5 mt-10 px-4 py-2 rounded-tl-2xl rounded-br-2xl'>
                mehr erfahren <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
              </div>
            </a>
            {/* Bildungsprojekte */}
            <a
              data-aos='fade-up'
              href='#Bildungsprojekte'
              className='lg:hover:scale-[102%] transition-all sm:w-[45%] rounded-2xl bg-white shadow-2xl lg:-mt-40 mt-16'
            >
              <img
                className='rounded-t-3xl brightness-[0.6] w-full h-48 object-cover'
                src='/images/bildungsprojekte.jpg'
                alt=''
              />
              <div className='font-poppins text-xl lg:mt-7 mt-12 mx-7'>Bildungsprojekte</div>
              <div className='font-source text-sm lg:mt-5 mt-8 mx-7'>
                In enger Zusammenarbeit mit der Deutschen Kinder- und Jugendstiftung begleiten wir
                geflüchtete Kinder und Jugendliche auf dem Weg in das deutsche Schulsystem.
              </div>
              <div className='flex bg-primary text-white text-sm font-semibold float-right lg:mt-5 mt-10 px-4 py-2 rounded-tl-2xl rounded-br-2xl'>
                mehr erfahren <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
              </div>
            </a>
          </div>
        </Container>
        {/* Wellen Teiler */}
        <div className='wave-two'>
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
      </section>

      {/* --Lernförderung-- */}
      <section id='Lernförderung' className='bg-darkYellow relative'>
        <Container styling={'pb-2 flex flex-col items-center'}>
          {/* Textabschnitt */}
          <Textbox
            animation={'fade-up'}
            section={'Lernförderung'}
            slogan={'Slogan über die Lernförderung'}
            align={'center'}
            styling={'lg:w-3/5 pt-20'}
          >
            {/* Text */}
            <div className='font-source sm:mb-10 mb-0 leading-tight'>
              Der Bund-fiB hat es sich zum Ziel gesetzt, Schülerinnen und Schülern einen Raum zu
              bieten, in dem sie sich sicher und willkommen fühlen. Insbesondere Kinder aus sozial
              schwachen und finanziell schwierigen Lebenslagen sollen wieder an sich glauben. Unsere
              Tutorinnen und Tutoren führen Ihre Schülerschaft empathisch, leidenschaftlich und
              professionell zum Lernerfolg.
            </div>
          </Textbox>
          {/* Für Schulen, für Eltern Karte */}
          <div
            data-aos='fade-up'
            className='w-full flex sm:mt-10 mt-0 flex-wrap relative z-10 mb-44'
          >
            {/* Für Schulen */}
            <div data-aos-anchor-placement='center-bottom' className='lg:w-1/2 w-full'>
              <img
                className='shadow-2xl lg:h-full lg:block hidden object-cover filter brightness-50 lg:rounded-tl-3xl'
                src='/images/lernfoe_uebersicht.jpg'
                alt=''
              />
            </div>
            <div
              data-aos-anchor-placement='center-bottom'
              className='shadow-2xl lg:w-1/2 w-full bg-white pt-14 pb-24 lg:px-28 px-14 lg:mb-0 mb-12 lg:rounded-tr-3xl lg:rounded-tl-none lg:rounded-b-none rounded-3xl lg:block flex flex-col items-center'
            >
              <div className='font-poppins text-sm'>Innovatives Bildungsangebot</div>
              <div className='font-poppints text-3xl font-semibold mt-5'>Für Schulen</div>
              <div className='w-10 h-[5px] bg-primary mt-6'></div>
              <div className='font-source mt-12 leading-tight lg:text-left text-center'>
                Jedes Kind ist anders, jede Schule ist anders. Wir passen unsere Konzeption auf Ihre
                Vorstellungen an. Dabei können Sie sich auf einen verlässlichen und kooperativen
                Austausch verlassen. Gerne organisieren wir die Lernförderung auch an Ihrer Schule.
                <br />
                <br />
                <b>Mehr Informationen &#62;&#62;</b>
              </div>
            </div>
            {/* Für Eltern */}
            <div className='shadow-2xl lg:w-1/2 w-full bg-white lg:pt-14 pt-20 pb-20 lg:px-28 px-14 lg:mt-0 sm:mt-12 mt-0 rounded-3xl lg:rounded-bl-3xl lg:rounded-br-none lg:rounded-t-none lg:block flex flex-col items-center'>
              <div className='font-poppins text-sm'>Finanziertes Bildungsangebot</div>
              <div className='font-poppints text-3xl font-semibold mt-5'>Für Eltern</div>
              <div className='w-10 h-[5px] bg-primary mt-6'></div>
              <div className='font-source mt-12 leading-tight lg:text-left text-center'>
                Wir helfen Ihnen bei den kleinen und großen Problemen, damit Ihr Kind wieder in die
                Spur findet. Mit einem berlinpass bekommt Ihr Kind sogar kostenlose Unterstützung.
                <br />
                <br />
                <b>
                  Mehr Informationen &#62;&#62; <br />
                  <br />{' '}
                </b>
              </div>
            </div>
            <div className='w-1/2'>
              <img
                className='shadow-2xl lg:block hidden h-full w-full object-cover filter brightness-50 rounded-br-3xl'
                src='/images/fuer_eltern.jpg'
                alt=''
              />
            </div>
            {/* Termin Button */}
            <a onClick={toggleKontaktieren} className='cursor-pointer'>
              <div className='lg:hover:scale-[105%] transition-transform h-40 w-40 bg-white border-8 border-primary shadow-[0_0_30px_-15px_rgba(0,0,0,0.4)] absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 rounded-full font-poppins text-center flex items-center justify-center'>
                Beratung
                <br />
                vereinbaren
              </div>
            </a>
          </div>
        </Container>
        {/* Wellen Teiler */}
        <div className='wave-three relative z-0'>
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
      </section>

      {/* --Privatunterricht-- */}
      <section
        id='Privatunterricht'
        className='bg-lightYellow relative lg:pb-52 sm:pb-10 sm:pt-20 pt-0'
      >
        <Container styling={'pb-32 flex flex-col items-center'}>
          {/* Textabschnitt */}
          <Textbox
            animation={'fade-up'}
            section={'Privatunterricht'}
            slogan={'Slogan über den Privatunterricht'}
            align={'center'}
            styling={'lg:w-3/5 -mt-1'}
          >
            {/* Text */}
            <div className='font-source mb-10 leading-tight'>
              Unser Nachhilfeunterricht stellt Ihr Kind in den Mittelpunkt. Unsere pädagogisch- und
              fachlich geprüften Tutorinnen und Tutoren führen Ihr Kind empathisch und
              leidenschaftlich zum Lernerfolg. Dabei stellen wir sicher, dass die beiden gut
              zusammenpassen. In regelmäßigen Feedbackgespräche reflektieren wir den Lernfortschritt
              und gehen auf Ihre Wünsche ein.
            </div>
          </Textbox>
          {/* Kennenlernen & Probestunde */}
          <div className='flex lg:flex-row flex-col text-white sm:mt-14 mt-0 relative z-10'>
            {/* Kennenlernen Karte */}
            <div
              data-aos={'fade-up'}
              onClick={toggleKontaktieren}
              className='cursor-pointer lg:hover:scale-[102%] transition-transform erstesKennenlernen rounded-2xl shadow-2xl relative lg:mr-12 lg:w-1/2 sm:w-full mb-20 lg:mb-0 h-72'
            >
              <div className='mx-12 sm:mt-12 mt-12 font-poppins text-xl'>Erstes Kennenlernen</div>
              <div className='mx-12 mt-5 w-10 h-[5px] bg-primary '></div>
              <div className='mx-12 sm:mt-10 mt-8 mb-16 font-source text-md'>
                Gemeinsam können wir am meisten bewegen. Wir helfen, die beste Strategie für Ihr
                Kind zu entwickeln.
              </div>
              <a className='flex bg-primary text-white text-sm font-semibold float-right sm:mt-5 mt-10 px-6 py-2 rounded-tl-2xl rounded-br-2xl absolute bottom-0 right-0'>
                Kennenlernen vereinbaren
                <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
              </a>
            </div>
            {/* Probestunde Karte */}
            <div
              data-aos={'fade-up'}
              onClick={toggleKontaktieren}
              className='cursor-pointer lg:hover:scale-[102%] transition-transform kostenloseProbestunde rounded-2xl shadow-2xl relative lg:mr-12 lg:w-1/2 sm:w-full lg:mb-0 h-72'
            >
              <div className='mx-12 sm:mt-12 mt-12 font-poppins text-xl'>
                Kostenlose Probestunde
              </div>
              <div className='mx-12 mt-5 w-10 h-[5px] bg-primary '></div>
              <div className='mx-12 sm:mt-10 mt-8 mb-5 font-source text-md'>
                Am besten wir lernen uns persönlich kennen, um den ersten Schritt zu machen.
              </div>
              <a className='flex bg-primary text-white text-sm font-semibold float-right sm:mt-5 mt-10 px-6 py-2 rounded-tl-2xl rounded-br-2xl absolute bottom-0 right-0'>
                Probestunde vereinbaren
                <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
              </a>
            </div>
          </div>
        </Container>
        {/* Wave */}
        <div className='wave-four z-0'>
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
      </section>

      {/* --Bildungsprojekte-- */}
      <section id='Bildungsprojekte' className='bg-middleYellow sm:pt-20 pt-10 pb-14'>
        <Container styling={'flex lg:flex-row flex-col-reverse'}>
          {/* Slider */}
          <div
            data-aos={'fade-up'}
            className='lg:w-1/2 sm:w-[90%] sm:mx-auto lg:mx-0 sm:mt-16 lg:mt-0'
          >
            <Swiper
              pagination={pagination}
              loop={true}
              navigation={true}
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className='mySwiper'
            >
              <SwiperSlide>
                <div className='sm:w-[70%] w-full rounded-2xl bg-white sm:shadow-2xl mb-16'>
                  <div className='bildungsProjektFit rounded-t-2xl'>
                    <div className='px-7 pt-44 pb-8 text-white text-left'>
                      <div className='text-sm'>Ein Projekt mit Hand und Fuß</div>
                      <div className='text-3xl font-semibold mt-3'>Fit für die Schule</div>
                    </div>
                  </div>
                  <div className='font-source text-sm text-left sm:mt-8 mt-8 mx-7'>
                    Als Bildungsträger sehen wir uns in der Verantwortung, unsere Ressourcen mit
                    geflüchteten Familien zu teilen. Manchmal dauert es leider länger bis ein
                    geflüchtetes Kind einen Schulplatz zugewiesen bekommt. In diesem Fall, fangen
                    wir die Kinder auf, beschulen sie und führen mit ihnen spannende Workshops und
                    Projekte durch. Zusammen machen wir die ersten Schritte.
                  </div>
                  <a
                    className='flex bg-primary text-white text-sm font-semibold float-right sm:mt-5 mt-10 px-4 py-2 rounded-tl-2xl rounded-br-2xl'
                    href=''
                  >
                    mehr erfahren <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sm:w-[70%] w-full rounded-2xl bg-white sm:shadow-2xl mb-16'>
                  <div className='bildungsProjektFit rounded-t-2xl'>
                    <div className='px-7 pt-44 pb-8 text-white text-left'>
                      <div className='text-sm'>Ein Projekt mit Hand und Fuß</div>
                      <div className='text-3xl font-semibold mt-3'>Fit für die Schule</div>
                    </div>
                  </div>
                  <div className='font-source text-sm text-left sm:mt-8 mt-8 mx-7'>
                    Als Bildungsträger sehen wir uns in der Verantwortung, unsere Ressourcen mit
                    geflüchteten Familien zu teilen. Manchmal dauert es leider länger bis ein
                    geflüchtetes Kind einen Schulplatz zugewiesen bekommt. In diesem Fall, fangen
                    wir die Kinder auf, beschulen sie und führen mit ihnen spannende Workshops und
                    Projekte durch. Zusammen machen wir die ersten Schritte.
                  </div>
                  <a
                    className='flex bg-primary text-white text-sm font-semibold float-right sm:mt-5 mt-10 px-4 py-2 rounded-tl-2xl rounded-br-2xl'
                    href=''
                  >
                    mehr erfahren <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <Textbox
            animation={'fade-up'}
            section={'Bildungsprojekte'}
            slogan={'Slogan über die Bildungsprojekte'}
            align={'left'}
            styling={'lg:w-3/5 sm:pb-0 lg:px-20 pb-16'}
          >
            {/* Text */}
            <div className='font-source mb-10 leading-tight'>
              Beschreibung was das Angebot als ganzes ausmacht - Lorem ipsum dolor sit amet
              consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
              sit amet sapien.
              <br />
              <br />
              Bei Allen Fragen beraten wir Sie gerne persönlich - natürlich kostenlos und
              unverbindlich
            </div>
            <Button cta={'Ihr Projekt besprechen'} click={toggleKontaktieren}></Button>
          </Textbox>
        </Container>
      </section>

      {/* --Über Uns-- */}
      <section id='ÜberUns' className='bg-middleYellow relative pt-20'>
        <Container styling={'flex items-center flex-col'}>
          <Textbox
            animation={'fade-up'}
            section={'Über Uns'}
            slogan={'Was uns als Partner besonders macht'}
            styling={'lg:w-3/5 -mt-1'}
          >
            <div className='font-source sm:mb-20 mb-10 leading-tight'>
              Vision/ Mission/ Philosophie - Lorem ipsum dolor sit amet consectetur adipiscing elit
              Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.Lorem ipsum
              dolor sit amet consectetur adipiscing elit.
            </div>
          </Textbox>
          {/* Partner Logos */}
          <div
            data-aos={'fade-up'}
            className='relative z-10 font-poppins text-center text-lg sm:mt-20 mt-0'
          >
            Das überzeugt auch unsere Partner
          </div>
          <div
            data-aos={'fade-up'}
            className='relative lg:w-[90%] w-full flex justify-between items-center pt-10 pb-32 overflow-hidden z-10'
          >
            <img
              className='sm:h-12 h-9 sm:px-0 sm:px-6'
              src='/images/logos/haus_der_jugend.png'
              alt=''
            />
            <img className='sm:h-12 h-9 sm:px-0 sm:px-6' src='/images/logos/OASE_logo.png' alt='' />
            <img
              className='sm:h-12 h-9 sm:px-0 sm:px-6'
              src='/images/logos/bundesvereinigung_nachhaltigkeit.svg'
              alt=''
            />
            <img
              className='sm:h-9 h-9 sm:block hidden sm:px-0 sm:px-6'
              src='/images/logos/weißes_berlin_logo.png'
              alt=''
            />
          </div>
        </Container>{' '}
        {/* Wave */}
        <div className='relative wave-5 z-0'>
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

      {/* --Unser Team-- */}
      <section id='UnserTeam' className='bg-darkYellow pb-14'>
        <Container styling={'pt-32'}>
          {/* Text & Gründer */}
          <div
            data-aos={'fade-up'}
            className='flex lg:flex-row flex-col justify-between items-center'
          >
            <Textbox
              section={'Unser Team'}
              slogan={'Slogan über Team Besonderheiten'}
              styling={'lg:w-2/5 sm:pb-0 pb-16'}
              align={'left'}
            >
              <div className='font-source mb-10 leading-tight lg:text-left text-center'>
                Beschreibung was das Angebot als ganzes ausmacht - Lorem ipsum dolor sit amet
                consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
                sit amet sapien.
                <br />
                <br />
                Bei Allen Fragen beraten wir Sie gerne persönlich - natürlich kostenlos und
                unverbindlich
              </div>
              <Button cta={'Lernen Sie uns persönlich kennen'} click={toggleKontaktieren}></Button>
            </Textbox>
            <Gründer />
          </div>
          {/* Mitarbeiter Übersicht */}
          <div data-aos='fade-up' className='flex justify-between sm:mt-24 mt-10 flex-wrap'>
            <Mitarbeiter bild={'/images/anna.jpg'} name={'Anna'} job={'Erzieherin'} />
            <Mitarbeiter bild={'/images/arin.jpg'} name={'Arin'} job={'Rolle'} />
            <Mitarbeiter bild={'/images/karin.jpg'} name={'Karin'} job={'Rolle'} />
            <Mitarbeiter bild={'/images/lukas.jpg'} name={'Lukas'} job={'Rolle'} />
            <Mitarbeiter bild={'/images/madeleine.jpg'} name={'Madeleine'} job={'Rolle'} />
            <Mitarbeiter bild={'/images/maggy.jpg'} name={'Maggy'} job={'Rolle'} />
            <Mitarbeiter bild={'/images/matthias.jpg'} name={'Matthias'} job={'Rolle'} />
            <Mitarbeiter bild={'/images/pauline.jpg'} name={'Pauline'} job={'Rolle'} />
            <Mitarbeiter bild={'/images/salim.jpg'} name={'Salim'} job={'Rolle'} />
            <Mitarbeiter bild={'/images/victoria.jpg'} name={'Victoria'} job={'Rolle'} />
          </div>
        </Container>{' '}
      </section>

      {/* --Jobs-- */}
      <section id='Jobs' className='bg-darkYellow relative'>
        <Container styling={'sm:pt-20 flex justify-center'}>
          {/* Jobs Karte */}
          <div
            data-aos='fade-up'
            className='sm:w-[90%] w-full flex mt-10 flex-wrap relative z-10 mb-72'
          >
            {/* Bild - linke Seite */}
            <div className='sm:w-1/2 w-full hidden lg:block'>
              <img
                className='shadow-2xl sm:h-full sm:block hidden object-cover rounded-tl-3xl rounded-bl-3xl'
                src='/images/jobs.jpg'
                alt=''
              />
            </div>
            <div className='shadow-2xl lg:w-1/2 w-full bg-white py-20 sm:px-14 px-10 sm:mb-0 mb-12 lg:rounded-3xl lg:rounded-tl-none lg:rounded-bl-none rounded-3xl flex flex-col lg:items-start items-center'>
              <div className='font-poppins text-lg'>Jobs bei uns</div>
              <div className='w-10 h-[5px] bg-primary mt-5'></div>
              <div className='font-berlin text-5xl leading-tight my-10 lg:text-left text-center'>
                Sei dabei <br /> und hilf uns
              </div>
              <div className='font-source mb-10 leading-tight lg:text-left text-center'>
                Beschreibung was das Angebot als ganzes ausmacht - Lorem ipsum dolor sit amet
                consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
                sit amet sapien.
                <br />
                <br />
                Bei Allen Fragen beraten wir Sie gerne persönlich - natürlich kostenlos und
                unverbindlich
              </div>
              <Button click={toggleKontaktieren} cta={'Bewirb dich hier bei uns!'}></Button>
            </div>
          </div>
        </Container>
        {/* Wave */}
        <div className='wave-6'>
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

      {/* --Aktuelles-- */}
      <section id='Aktuelles' className='bg-middleYellow relative'>
        <Container styling={'flex flex-col items-center pt-10'}>
          <Textbox
            animation={'fade-up'}
            section={'Aktuelles'}
            slogan={'Neuigkeiten von uns und unseren Projekten'}
            styling={'lg:w-3/5 -mt-1'}
          >
            <div className='font-source sm:mb-20 mb-0 leading-tight'>
              Was macht den Privatunterricht bei Bund-fiB aus, was macht sie besonder? - Lorem ipsum
              dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien.Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </div>
          </Textbox>
          {/* Instagram */}
          <div data-aos='fade-up' className='w-[100%] m-auto flex justify-center'>
            {/* First Column */}
            <div className=''>
              <div className='font-poppins sm:text-xl text-base mt-7 text-center'>Angebot</div>
              <div className='w-10 h-[5px] bg-primary mt-3 mx-auto mb-8'></div>
              <InstaImage src={'/images/insta_1.png'} />
              <InstaImage src={'/images/insta_1.png'} />
              <InstaImage src={'/images/insta_1.png'} />
            </div>
            {/* Second Column */}
            <div className=''>
              <div className='font-poppins sm:text-xl text-base mt-7 text-center'>Ausflüge</div>
              <div className='w-10 h-[5px] bg-primary mt-3 mx-auto mb-8'></div>
              <InstaImage src={'/images/insta_2.jpg'} />
              <InstaImage src={'/images/insta_2.jpg'} />
              <InstaImage src={'/images/insta_2.jpg'} />
            </div>
            {/* Third Column */}
            <div className=''>
              <div className='font-poppins sm:text-xl text-base mt-7 text-center'>Mitarbeiter</div>
              <div className='w-10 h-[5px] bg-primary mt-3 mx-auto mb-8'></div>
              <InstaImage src={'/images/insta_3.png'} />
              <InstaImage src={'/images/insta_3.png'} />
              <InstaImage src={'/images/insta_3.png'} />
            </div>
          </div>
          <Button styling={'my-10'} cta={'mehr anzeigen'} />
        </Container>
      </section>

      {/* --Termin Formular-- */}
      <section className='bg-middleYellow relative'>
        <Container
          data-aos='fade-up'
          styling={'pt-32 pb-32 flex flex-col lg:flex-row items-center '}
        >
          <Textbox
            section={'Termin mit Uns'}
            slogan={'Buchen Sie ein Gespräch mit uns'}
            styling={'lg:w-1/2 -mt-1 pb-16 lg:px-20 sm:px-0'}
            align={'left'}
          >
            <div className='font-source sm:mb-20 mb-5 leading-tight'>
              Beschreibung was das Angebot als ganzes ausmacht - Lorem ipsum dolor sit amet
              consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
              sit amet sapien.Bei Allen Fragen beraten wir Sie gerne persönlich - natürlich
              kostenlos und unverbindlich
            </div>
          </Textbox>
          {/* Calendly */}
          <div className='w-1/2 flex justify-center items-center relative z-10'>
            <div className='p-1 bg-white rounded-xl shadow-xl'>
              <InlineWidget
                styles={{
                  width: '360px',
                  height: '360px',
                }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: true,
                  hideLandingPageDetails: false,
                  primaryColor: 'F9B233',
                  textColor: '4d5055',
                }}
                url='https://calendly.com/bundfib/erstes_kennenlernen'
              />
            </div>
          </div>
          <div />
        </Container>
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
      <section className='bg-darkYellow relative'>
        <Container
          styling={'pt-32 pb-12 flex lg:flex-row flex-col-reverse justify-between items-center'}
        >
          {/* Formular */}
          <KontaktFormular styling={'lg:w-[40%] sm:w-[80%] w-full flex  flex-col w-full'} />
          {/* Text */}
          <Textbox
            section={'Schreiben Sie uns'}
            slogan={'Wir antworten Ihnen schnellst möglich'}
            align={'left'}
            styling={'lg:w-[40%] sm:pb-16 pb-16'}
          >
            <div className='font-source leading-tight'>
              Beschreibung was das Angebot als ganzes ausmacht - Lorem ipsum dolor sit amet
              consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
              sit amet sapien.Bei Allen Fragen beraten wir Sie gerne persönlich - natürlich
              kostenlos und unverbindlich
            </div>
          </Textbox>
        </Container>
      </section>

      {/* --Downloads-- */}
      <section id='Downloads' className='bg-darkYellow pt-20'>
        <Container styling={'pb-2 flex justify-center'}>
          {/* Karte */}
          <div className='flex mt-10 w-full flex-wrap relative z-10 mb-28'>
            {/* Text - linke Seite */}
            <div className='shadow-2xl sm:w-2/5 w-full bg-navy py-16 px-14 rounded-tl-3xl rounded-tr-3xl sm:rounded-tr-none sm:rounded-bl-3xl sm:block flex flex-col items-center'>
              <div className='font-source font-regular text-lg text-white'>Downloads</div>
              <div className='w-10 h-[5px] bg-primary mt-5'></div>
              <div className='font-pooppins font-bold lg:text-3xl sm:text-xl text-xl sm:text-left text-center leading-tight mt-10 text-white'>
                Hier finden Sie alle Dokumente und Dateien
              </div>
            </div>
            {/* Download Icons - rechte Seite */}
            <div className='sm:w-3/5 w-full downloadsCSS rounded-br-3xl sm:rounded-tr-3xl rounded-tr-none sm:rounded-bl-none rounded-bl-3xl flex justify-evenly items-center'>
              <a href='zusatzbogen.pdf' target='_blank'>
                <div className='flex flex-col justify-center items-center text-white sm:text-sm text-xs text-center sm:py-0 py-14'>
                  <FontAwesomeIcon className='w-10 text-white pb-4' icon={faFilePdf} />
                  Zusatzbogen für <br /> Lernförderung
                </div>
              </a>
              <a href='FIB-Heft.pdf' target='_blank'>
                <div className='flex flex-col justify-center items-center text-white sm:text-sm text-xs'>
                  <FontAwesomeIcon className='w-10 text-white pb-4' icon={faFilePdf} />
                  Bund-fiB Heft <br /> <br />
                </div>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* --Footer-- */}
      <footer className='mx-auto sm:px-20  px-7 bg-lightYellow pt-20 pb-10 relative'>
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
        <div className='max-w-screen-xl mx-auto flex sm:flex-row flex-col justify-between sm:pt-28 pt-20'>
          {/* Logo */}
          <img className='h-12 object-contain' src='/images/logos/bund_fib_logo.png' alt='' />
          {/* Leistungen */}
          <div className='lg:block hidden'>
            <div className='font-poppins text-base'>Leistungen</div>
            <div className='w-8 h-[5px] bg-primary mt-2 mb-5'></div>
            <a href='#Lernförderung'>
              <div className='font-source text-sm my-1'>Lernförderungen</div>
            </a>
            <a href='#Privatunterricht'>
              <div className='font-source text-sm my-1'>Privatunterricht</div>
            </a>
            <a href='#Bildungsprojekte'>
              <div className='font-source text-sm my-1'>Bildungsprojekte</div>
            </a>
            <a href='#Bildungsprojekte'>
              <div className='font-source text-sm my-1'>Erasmus+</div>
            </a>
          </div>
          {/* Unternehmen */}
          <div className='lg:block hidden'>
            <div className='font-poppins text-base'>Unternehmen</div>
            <div className='w-8 h-[5px] bg-primary mt-2 mb-5'></div>
            <a href='#ÜberUns'>
              <div className='font-source text-sm my-1'>Über Uns</div>
            </a>
            <a href='#UnserTeam'>
              <div className='font-source text-sm my-1'>Unser Team</div>
            </a>
            <a href='#Jobs'>
              <div className='font-source text-sm my-1'>Jobs</div>
            </a>
          </div>
          {/* Informationen */}
          <div className='lg:block hidden'>
            <div className='font-poppins text-base'>Informationen</div>
            <div className='w-8 h-[5px] bg-primary mt-2 mb-5'></div>
            <div onClick={toggleImpressum} className='cursor-pointer font-source text-sm my-1'>
              Impressum
            </div>
            <div onClick={toggleDatenschutz} className='cursor-pointer font-source text-sm my-1'>
              Datenschutz
            </div>
            <a href='#Downloads'>
              <div className='font-source text-sm my-1'>Downloads</div>
            </a>
          </div>
          {/* Kontakt */}
          <div className='lg:block hidden'>
            <div className='font-poppins text-base'>Kontakt</div>
            <div className='w-8 h-[5px] bg-primary mt-2 mb-5'></div>
            <a className='cursor-pointer' onClick={toggleKontaktieren}>
              <div className='font-source text-sm my-1'>Termin vereinbaren</div>
            </a>
            <a href='mailto:verwaltung@bund-fib.de'>
              <div className='font-source text-sm my-1'>verwaltun@bund-fib.de</div>
            </a>
            <a href='tel:+4915758745855'>
              <div className='font-source text-sm my-1'>+49 157 58745855</div>
            </a>
          </div>
          {/* Mobile Block*/}
          <div className='lg:hidden block flex items-center justify-between sm:w-1/2  w-full font-poppins mt-10'>
            <div onClick={toggleImpressum}>Impressum</div>
            <div onClick={toggleDatenschutz}>Datenschutz</div>
            <div>Kontakt</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// // Get Data from Instagram
// export async function getStaticProps() {
//   const ig = new IgApiClient();
//   ig.state.generateDevice(process.env.INSTA_USERNAME);
//   const loggedInUser = await ig.account.login(process.env.INSTA_USERNAME, process.env.INSTA_PW);

//   const userFeed = ig.feed.user(loggedInUser.pk);
//   const myPostsFirstPage = await userFeed.items();
//   const myPostsSecondPage = await userFeed.items();
//   const myPostsThirdPage = await userFeed.items();
//   const posts = [...myPostsFirstPage, ...myPostsSecondPage, ...myPostsThirdPage];

//   return {
//     props: {
//       posts,
//     },
//   };
// }
