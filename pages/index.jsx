import Head from 'next/head';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';

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

export default function Home({ feed }) {
  const images = feed.data;

  // Initialize AOS Animation Library
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Instagram loadMore Button
  const [end, setEnd] = useState(8);
  const loadMore = () => {
    if (end >= 23) {
      // forward to Instagram
      window.open('https://www.instagram.com/bund_fib/', '_blank');
    } else {
      setEnd(end + 3);
    }
  };

  // Angebot Hover Dropdown
  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(true);
  };
  const hideDropdown = () => {
    setShow(false);
  };

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

  return (
    <div>
      <Head>
        <title>Bund-fiB</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      {/* Kontaktieren Popup */}
      <div
        className={`fixed z-50 h-screen min-h-[600px] w-screen bg-lightYellow pt-24 transition-all duration-700 ease-out sm:pt-[10vh] lg:pt-24 ${
          kontaktieren ? '-translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Container */}
        <div className='mx-auto flex max-w-screen-xl flex-col justify-center'>
          {/* Header */}
          <div className='text-center font-berlin text-2xl'>
            Buchen Sie ein Gespräch mit uns oder schreiben Sie uns eine Nachricht
          </div>
          {/* Kalender */}
          <div className='mt-20 mb-20 flex w-full flex-col justify-center sm:mt-[5vh] sm:mb-[10vh] md:flex-row lg:mt-10 lg:mb-10'>
            <div className='ml-5 mr-5 mb-5 rounded-xl bg-white p-1 text-center shadow-xl lg:my-4'>
              <div className='hidden md:block'>Standort Berlin</div>

              <a
                href='https://calendly.com/schabnaz-saba-bund-fib/kennenlerngespraech-berlin'
                target='_blank'
                rel='noreferrer'
              >
                <div className='mb-5 mt-5 block md:hidden'>
                  <u>Standort Berlin</u>
                </div>
              </a>
              <div className='hidden md:block'>
                <InlineWidget
                  styles={{
                    width: '50vh',
                    height: '50vh',
                  }}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: true,
                    hideLandingPageDetails: true,
                    primaryColor: 'F9B233',
                    textColor: '4d5055',
                  }}
                  url='https://calendly.com/schabnaz-saba-bund-fib/kennenlerngespraech-berlin'
                />
              </div>
            </div>
            <div className='ml-5 mr-5 mb-5 rounded-xl bg-white p-1 text-center shadow-xl lg:my-4'>
              <div className='hidden md:block'>Standort Hannover</div>

              <a
                href='https://calendly.com/benedict-hepp-bund-fib/kennlerngespraech-hannover'
                target='_blank'
                rel='noreferrer'
              >
                <div className='mb-5 mt-5 block md:hidden'>
                  <u>Standort Hannover</u>
                </div>
              </a>
              <div className='hidden md:block'>
                <InlineWidget
                  styles={{
                    width: '50vh',
                    height: '50vh',
                  }}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: true,
                    hideLandingPageDetails: true,
                    primaryColor: 'F9B233',
                    textColor: '4d5055',
                  }}
                  url='https://calendly.com/benedict-hepp-bund-fib/kennlerngespraech-hannover'
                />
              </div>
            </div>
            <div className='ml-5 mr-5 rounded-xl bg-white p-1 text-center shadow-xl lg:my-4'>
              <div className='hidden md:block'>Standort Leipzig</div>
              <a
                href='https://calendly.com/nathalie-thorleuchter-bund-fib/kennenlerngespraech-standort-leipzig'
                target='_blank'
                rel='noreferrer'
              >
                <div className='mb-5 mt-5 block md:hidden'>
                  <u>Standort Leipzig</u>
                </div>
              </a>
              <div className='hidden md:block'>
                <InlineWidget
                  styles={{
                    width: '50vh',
                    height: '50vh',
                  }}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: true,
                    hideLandingPageDetails: true,
                    primaryColor: 'F9B233',
                    textColor: '4d5055',
                  }}
                  url='https://calendly.com/nathalie-thorleuchter-bund-fib/kennenlerngespraech-standort-leipzig'
                />
              </div>
            </div>
          </div>
          {/* Icons */}
          <div className='flex justify-center'>
            <a className='umami--click--menu-email-button' href='mailto:verwaltung@bund-fib.de'>
              <div className='text-center font-poppins text-[10px]'>
                <FontAwesomeIcon className='mx-10 mb-2 w-7' icon={faEnvelope} />
                E-Mail
              </div>
            </a>
            <a className='umami--click--menu-phone-button' href='tel:+4915758745855'>
              <div className='text-center font-poppins text-[10px]'>
                <FontAwesomeIcon className='mx-10 mb-2 w-6' icon={faSquarePhone} />
                Telefon
              </div>
            </a>
            <a
              className='umami--click--menu-insta-button'
              href='https://www.instagram.com/bund_fib/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='text-center font-poppins text-[10px]'>
                <FontAwesomeIcon className='mx-10 mb-2 w-6' icon={faInstagram} />
                Instagram
              </div>
            </a>
          </div>
          <Button
            click={toggleKontaktieren}
            styling={'lg:hidden sm:mt-[10vh] mt-10 w-40 mx-auto'}
            cta={'Schließen'}
          />
        </div>
      </div>

      {/* Burger Menu */}
      <div
        className={`fixed z-40 h-screen min-h-[600px] w-screen bg-lightYellow transition-all duration-700 ease-out lg:pt-24 ${
          hamburgerClicked ? '-translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Container */}
        <div className='flex h-full max-w-screen-xl flex-col items-center justify-center font-berlin text-3xl sm:text-[40px]'>
          {/* Header */}
          <a href='#Lernförderung'>
            <div onClick={toogleHamburgerMenu} className='mb-10 sm:mb-16'>
              Lernförderung
            </div>
          </a>
          <a href='#Privatunterricht'>
            <div onClick={toogleHamburgerMenu} className='mb-10 sm:mb-16'>
              Privatunterricht
            </div>
          </a>
          <a href='#Berufsvorbereitung'>
            <div onClick={toogleHamburgerMenu} className='mb-10 sm:mb-16'>
              Berufsvorbereitung
            </div>
          </a>
          <a href='#Bildungsprojekte'>
            <div onClick={toogleHamburgerMenu} className='mb-10 sm:mb-16'>
              Bildungsprojekte
            </div>
          </a>
          <a href='#ÜberUns'>
            <div onClick={toogleHamburgerMenu} className='mb-10 sm:mb-16'>
              Über Uns
            </div>
          </a>
          <a href='#Jobs'>
            <div onClick={toogleHamburgerMenu} className='mb-10 sm:mb-16'>
              Jobs
            </div>
          </a>
          <a href='#Aktuelles'>
            <div onClick={toogleHamburgerMenu} className='mb-10 sm:mb-16'>
              Aktuelles
            </div>
          </a>
        </div>
      </div>

      {/* Impressum Popup */}
      <div
        className={`fixed z-50 h-screen min-h-[600px] w-screen overflow-scroll bg-lightYellow pt-24 transition-all duration-700 ease-out sm:pt-36 lg:pt-24 ${
          impressum ? 'translate-y-0' : 'translate-y-full'
        }`}
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

      {/* Datenschutz Popup */}
      {
        // <div
        //   className={`fixed z-50 h-screen min-h-[600px] w-screen overflow-scroll bg-lightYellow pt-24 transition-all duration-700 ease-out sm:pt-36 lg:pt-24 ${
        //     datenschutz ? 'translate-y-0' : 'translate-y-full'
        //   }`}
        // >
        //   {/* Container */}
        //   <Container styling='overflow-scroll'>
        //     {/* Header */}
        //     <div className='flex justify-between'>
        //       <div className='text-center font-berlin text-2xl'>Datenschutz</div>
        //       <FontAwesomeIcon
        //         onClick={toggleDatenschutz}
        //         className='w-6 cursor-pointer'
        //         icon={faXmark}
        //       />
        //     </div>
        //     {/* Text */}{' '}
        //     <div>
        //       <b>1. Datenschutz auf einen Blick</b>
        //       <br />
        //       <br />
        //       <b>Allgemeine Hinweise</b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit
        //         Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        //         Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert
        //         werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen
        //         Sie unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>Datenerfassung auf dieser Website</b>
        //       <br />
        //       <br /> <h4>
        //         Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?
        //       </h4>{' '}
        //       <p>
        //         Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
        //         Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen
        //         Stelle&ldquo; in dieser Datenschutzerkl&auml;rung entnehmen.
        //       </p>{' '}
        //       <h4>Wie erfassen wir Ihre Daten?</h4>{' '}
        //       <p>
        //         Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
        //         kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
        //       </p>{' '}
        //       <p>
        //         Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
        //         durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B.
        //         Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
        //         Daten erfolgt automatisch, sobald Sie diese Website betreten.
        //       </p>{' '}
        //       <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4>{' '}
        //       <p>
        //         Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
        //         gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens
        //         verwendet werden.
        //       </p>{' '}
        //       <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4>{' '}
        //       <p>
        //         Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft,
        //         Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie
        //         haben au&szlig;erdem ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
        //         verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen
        //         Sie diese Einwilligung jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben
        //         Sie das Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung
        //         Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
        //         Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
        //       </p>{' '}
        //       <p>
        //         Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit
        //         an uns wenden.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>Analyse-Tools und Tools von Dritt&shy;anbietern</b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das
        //         geschieht vor allem mit sogenannten Analyseprogrammen.
        //       </p>{' '}
        //       <p>
        //         Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
        //         Datenschutzerkl&auml;rung.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>2. Hosting</b>
        //       <br />
        //       <br />
        //       <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
        //       <br />
        //       <b>Externes Hosting</b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser
        //         Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.
        //         Hierbei kann es sich v.&nbsp;a. um IP-Adressen, Kontaktanfragen, Meta- und
        //         Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
        //         Daten, die &uuml;ber eine Website generiert werden, handeln.
        //       </p>{' '}
        //       <p>
        //         Das externe Hosting erfolgt zum Zwecke der Vertragserf&uuml;llung gegen&uuml;ber
        //         unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im
        //         Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres
        //         Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
        //         Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
        //         ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1
        //         TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
        //         Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne
        //         des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
        //       </p>{' '}
        //       <p>
        //         Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur
        //         Erf&uuml;llung seiner Leistungspflichten erforderlich ist und unsere Weisungen in
        //         Bezug auf diese Daten befolgen.
        //       </p>{' '}
        //       <p>Wir setzen folgende(n) Hoster ein:</p>
        //       <p>
        //         GoDaddy.com, LLC <br />
        //         Hansestr. 111 <br />
        //         51149 K&ouml;ln
        //       </p>
        //       <h4>Auftragsverarbeitung</h4>{' '}
        //       <p>
        //         Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur Nutzung des oben
        //         genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich
        //         vorgeschriebenen Vertrag, der gew&auml;hrleistet, dass dieser die personenbezogenen
        //         Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der
        //         DSGVO verarbeitet.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>3. Allgemeine Hinweise und Pflicht&shy;informationen</b>
        //       <br />
        //       <br />
        //       <b>Datenschutz</b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr
        //         ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
        //         gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.
        //       </p>{' '}
        //       <p>
        //         Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
        //         Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden
        //         k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten
        //         wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem
        //         Zweck das geschieht.
        //       </p>{' '}
        //       <p>
        //         Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der
        //         Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser
        //         Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>Hinweis zur verantwortlichen Stelle</b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:
        //       </p>{' '}
        //       <p>
        //         {/* Basel Seido */}
        //         <br />
        //         Bund-fiB gUG (haftungsbeschr&auml;nkt)
        //         <br />
        //         Schwedenstra&szlig;e 17
        //         <br />
        //         13357 Berlin
        //       </p>
        //       <p>
        //         Telefon: +49 157 58745855
        //         <br />
        //         E-Mail: verwaltung@bund-fib.de
        //       </p>
        //       <p>
        //         Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein
        //         oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von
        //         personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>Speicherdauer</b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer
        //         genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r
        //         die Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen
        //         geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre
        //         Daten gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde
        //         f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder
        //         handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
        //         L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>
        //         Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
        //       </b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
        //         personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs.
        //         2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet
        //         werden. Im Falle einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung
        //         personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung au&szlig;erdem
        //         auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von
        //         Cookies oder in den Zugriff auf Informationen in Ihr Endger&auml;t (z.&nbsp;B. via
        //         Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung
        //         zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1 TTDSG. Die Einwilligung ist
        //         jederzeit widerrufbar. Sind Ihre Daten zur Vertragserf&uuml;llung oder zur
        //         Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre
        //         Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre
        //         Daten, sofern diese zur Erf&uuml;llung einer rechtlichen Verpflichtung erforderlich
        //         sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner
        //         auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
        //         erfolgen. &Uuml;ber die jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen wird
        //         in den folgenden Abs&auml;tzen dieser Datenschutzerkl&auml;rung informiert.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten</b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen
        //         datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind,
        //         k&ouml;nnen Ihre personenbezogene Daten in diese Drittstaaten &uuml;bertragen und dort
        //         verarbeitet werden. Wir weisen darauf hin, dass in diesen L&auml;ndern kein mit der EU
        //         vergleichbares Datenschutzniveau garantiert werden kann. Beispielsweise sind
        //         US-Unternehmen dazu verpflichtet, personenbezogene Daten an Sicherheitsbeh&ouml;rden
        //         herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen
        //         k&ouml;nnten. Es kann daher nicht ausgeschlossen werden, dass US-Beh&ouml;rden
        //         (z.&nbsp;B. Geheimdienste) Ihre auf US-Servern befindlichen Daten zu
        //         &Uuml;berwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf
        //         diese Verarbeitungst&auml;tigkeiten keinen Einfluss.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>Widerruf Ihrer Einwilligung zur Datenverarbeitung</b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen
        //         Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung
        //         jederzeit widerrufen. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
        //         Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>
        //         Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen
        //         Direktwerbung (Art. 21 DSGVO)
        //       </b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
        //         ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER
        //         BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
        //         WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN
        //         GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG
        //         BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN,
        //         WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI
        //         DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE
        //         VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN
        //         ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON
        //         RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
        //       </p>{' '}
        //       <p>
        //         WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO
        //         HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
        //         PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH
        //         F&Uuml;R DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN
        //         SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM
        //         ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>Beschwerde&shy;recht bei der zust&auml;ndigen Aufsichts&shy;beh&ouml;rde</b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein
        //         Beschwerderecht bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat
        //         ihres gew&ouml;hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des
        //         mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet
        //         anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
        //         Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten
        //         in einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern
        //         Sie die direkte &Uuml;bertragung der Daten an einen anderen Verantwortlichen
        //         verlangen, erfolgt dies nur, soweit es technisch machbar ist.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>Auskunft, L&ouml;schung und Berichtigung</b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
        //         unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren
        //         Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
        //         Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum
        //         Thema personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>Recht auf Einschr&auml;nkung der Verarbeitung</b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
        //         Daten zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit an uns wenden. Das Recht auf
        //         Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:
        //       </p>{' '}
        //       <ul>
        //         {' '}
        //         <li>
        //           Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
        //           bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen.
        //           F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
        //           Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
        //         </li>{' '}
        //         <li>
        //           Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig
        //           geschah/geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung
        //           der Datenverarbeitung verlangen.
        //         </li>{' '}
        //         <li>
        //           Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur
        //           Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen
        //           ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung
        //           der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
        //         </li>{' '}
        //         <li>
        //           Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
        //           Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch
        //           nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
        //           Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
        //         </li>{' '}
        //       </ul>{' '}
        //       <p>
        //         Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben,
        //         d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer
        //         Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von
        //         Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder
        //         juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses
        //         der Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>SSL- bzw. TLS-Verschl&uuml;sselung</b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung
        //         vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als
        //         Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine
        //         verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
        //         von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem
        //         Schloss-Symbol in Ihrer Browserzeile.
        //       </p>{' '}
        //       <p>
        //         Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die
        //         Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>4. Datenerfassung auf dieser Website</b>
        //       <br /> <br />
        //       <b>Cookies</b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind kleine
        //         Datenpakete und richten auf Ihrem Endger&auml;t keinen Schaden an. Sie werden entweder
        //         vor&uuml;bergehend f&uuml;r die Dauer einer Sitzung (Session-Cookies) oder dauerhaft
        //         (permanente Cookies) auf Ihrem Endger&auml;t gespeichert. Session-Cookies werden nach
        //         Ende Ihres Besuchs automatisch gel&ouml;scht. Permanente Cookies bleiben auf Ihrem
        //         Endger&auml;t gespeichert, bis Sie diese selbst l&ouml;schen&nbsp;oder eine
        //         automatische L&ouml;schung durch Ihren Webbrowser erfolgt.
        //       </p>{' '}
        //       <p>
        //         Teilweise k&ouml;nnen auch Cookies von Drittunternehmen auf Ihrem Endger&auml;t
        //         gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese
        //         erm&ouml;glichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des
        //         Drittunternehmens (z.&nbsp;B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
        //       </p>{' '}
        //       <p>
        //         Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da
        //         bestimmte Websitefunktionen ohne diese nicht funktionieren w&uuml;rden (z.&nbsp;B. die
        //         Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das
        //         Nutzerverhalten auszuwerten&nbsp;oder Werbung anzuzeigen.
        //       </p>{' '}
        //       <p>
        //         Cookies, die zur Durchf&uuml;hrung des elektronischen Kommunikationsvorgangs, zur
        //         Bereitstellung bestimmter, von Ihnen erw&uuml;nschter Funktionen (z.&nbsp;B. f&uuml;r
        //         die Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B. Cookies zur
        //         Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage
        //         von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage
        //         angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung
        //         von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung
        //         seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und
        //         vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung
        //         ausschlie&szlig;lich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und
        //         &sect; 25 Abs. 1 TTDSG); die Einwilligung ist jederzeit widerrufbar.
        //       </p>{' '}
        //       <p>
        //         Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies
        //         informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies
        //         f&uuml;r bestimmte F&auml;lle oder generell ausschlie&szlig;en sowie das automatische
        //         L&ouml;schen der Cookies beim Schlie&szlig;en des Browsers aktivieren. Bei der
        //         Deaktivierung von Cookies kann die Funktionalit&auml;t dieser Website
        //         eingeschr&auml;nkt sein.
        //       </p>{' '}
        //       <p>
        //         Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden
        //         wir Sie hier&uuml;ber im Rahmen dieser Datenschutzerkl&auml;rung gesondert informieren
        //         und ggf. eine Einwilligung abfragen.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>Kontaktformular</b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
        //         Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
        //         Bearbeitung der Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns gespeichert.
        //         Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        //       </p>{' '}
        //       <p>
        //         Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
        //         sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur
        //         Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
        //         &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an
        //         der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
        //         DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
        //         wurde; die Einwilligung ist jederzeit widerrufbar.
        //       </p>{' '}
        //       <p>
        //         Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns
        //         zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der
        //         Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener
        //         Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere
        //         Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
        //       </p>
        //       <br />
        //       <br />
        //       <br />
        //       <b>Anfrage per E-Mail, Telefon oder Telefax</b>
        //       <br />
        //       <br />{' '}
        //       <p>
        //         Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage
        //         inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum
        //         Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese
        //         Daten geben wir nicht ohne Ihre Einwilligung weiter.
        //       </p>{' '}
        //       <p>
        //         Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
        //         sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur
        //         Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
        //         &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an
        //         der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
        //         DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
        //         wurde; die Einwilligung ist jederzeit widerrufbar.
        //       </p>{' '}
        //       <p>
        //         Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten verbleiben bei uns,
        //         bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen
        //         oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach
        //         abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen
        //         &ndash; insbesondere gesetzliche Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
        //       </p>
        //       <br />
        //       <br />
        //       <b>5. Analyse-Tools und Werbung</b>
        //       <br />
        //       <br />
        //       <br />
        //       <b>Matomo</b>
        //       <br />
        //       <br /> <p>Diese Website benutzt den Open Source Webanalysedienst Matomo.</p>{' '}
        //       <p>
        //         Mit Hilfe von Matomo sind wir in der Lage Daten &uuml;ber die Nutzung unserer Website
        //         durch die Websitebesucher zu erfassen und zu analysieren. Hierdurch k&ouml;nnen wir
        //         u.&nbsp;a. herausfinden, wann welche Seitenaufrufe get&auml;tigt wurden und aus
        //         welcher Region sie kommen. Au&szlig;erdem erfassen wir verschiedene Logdateien
        //         (z.&nbsp;B. IP-Adresse, Referrer, verwendete Browser und Betriebssysteme) und
        //         k&ouml;nnen messen, ob unsere Websitebesucher bestimmte Aktionen durchf&uuml;hren
        //         (z.&nbsp;B. Klicks, K&auml;ufe u. &Auml;.).
        //       </p>{' '}
        //       <p>
        //         Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        //         Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des
        //         Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.
        //         Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
        //         ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1
        //         TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
        //         Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne
        //         des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
        //       </p>
        //       <h4>IP-Anonymisierung</h4>{' '}
        //       <p>
        //         Bei der Analyse mit Matomo setzen wir IP-Anonymisierung ein. Hierbei wird Ihre
        //         IP-Adresse vor der Analyse gek&uuml;rzt, sodass Sie Ihnen nicht mehr eindeutig
        //         zuordenbar ist.
        //       </p>
        //       <h4>Cookielose Analyse</h4>{' '}
        //       <p>
        //         Wir haben Matomo so konfiguriert, dass Matomo keine Cookies in Ihrem Browser
        //         speichert.
        //       </p>
        //       <h4>Hosting</h4>{' '}
        //       <p>
        //         Wir hosten Matomo ausschlie&szlig;lich auf unseren eigenen Servern, sodass alle
        //         Analysedaten bei uns verbleiben und nicht weitergegeben werden.
        //       </p>
        //     </div>
        //   </Container>
        // </div>
      }

      {/* --Navigationsleiste-- */}
      <nav
        className='fixed z-50 min-w-full bg-lightYellow py-3
                      shadow-md lg:py-0'
      >
        <div className='mx-auto flex max-w-screen-xl items-center justify-between px-5 sm:px-20'>
          {/* Logo */}
          <a href='#Titelseite'>
            <Image
              src='/images/logos/bund_fib_logo.webp'
              width={170}
              height={75}
              alt='bund fib logo'
            />
          </a>
          {/* Menu */}
          <ul className='hidden w-[400px] items-center justify-between font-source text-sm lg:flex'>
            <li className='relative py-5' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
              <a href='#Leistungsübersicht' className='flex'>
                Angebot <FontAwesomeIcon className='ml-2 w-2' icon={faCaretDown} />
                {show && (
                  <ul className='absolute mt-10 -translate-x-1/3 rounded-b-xl bg-lightYellow pb-5 shadow-md'>
                    <a href='#Lernförderung'>
                      <li className='py-3 px-10 hover:bg-darkYellow'>Lernförderung</li>
                    </a>
                    <a href='#Privatunterricht'>
                      <li className='py-3 px-10 hover:bg-darkYellow'>Privatunterricht</li>
                    </a>
                    <a href='#Berufsvorbereitung'>
                      <li className='py-3 px-10 hover:bg-darkYellow'>Berufsvorbereitung</li>
                    </a>
                    <a href='#Bildungsprojekte'>
                      <li className='py-3 px-10 hover:bg-darkYellow'>Bildungsprojekte</li>
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
      <section
        id='Titelseite'
        className='relative h-[78vh] bg-[url("/images/title.webp")] bg-cover sm:h-[85vh]'
      >
        <div className='flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-60'>
          {/* Title Slogal */}
          <h1 className='text-center font-berlin text-5xl text-white sm:w-[600px] sm:text-6xl'>
            Die richtige Lernförderung für jedes Kind
          </h1>
          {/* Untertitle */}
          <div className='mt-10 px-5 text-center font-source text-lg leading-tight text-white sm:w-[600px] sm:px-0'>
            Als gemeinnützige Organisation bauen wir auf Bildung durch Wertschätzung.
          </div>
          {/* Buttons */}
          <div className='mt-10 flex flex-col items-center justify-center sm:flex-row'>
            {/* <Button
              className='umami--click--TitleSeite-Termin-buchen'
              cta={'Termin buchen'}
              click={toggleKontaktieren}
            ></Button> */}
            <a href='#Leistungsübersicht'>
              <button className=' mt-5 rounded-full border-2 border-white px-9 py-1 font-source text-lg font-semibold text-white transition-all sm:ml-5 sm:mt-0 sm:h-8 sm:py-0 sm:text-sm lg:hover:scale-[102%]'>
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
          <div className='flex flex-wrap items-center justify-evenly overflow-hidden'>
            <div className='flex w-1/2 justify-center pr-5 pt-5 sm:w-1/2 sm:pr-0 md:w-1/4'>
              <Image
                src='/images/logos/weißes_berlin_logo.webp'
                width={200}
                height={200}
                alt='Berliner Senat Logo'
              />
              {/* <img
                className='sm:h-9 h-9 sm:px-0'
                src='/images/logos/weißes_berlin_logo.webp'
                alt=''
              /> */}
            </div>
            <div className='flex w-1/2 justify-center pl-5 pt-5 sm:w-1/2 sm:pl-0 md:w-1/4'>
              <Image
                src='/images/logos/stacked_berlin_logo.webp'
                width={130}
                height={100}
                alt='Berzirksamt Mitte Logo'
              />
              {/* <img
                className='sm:h-14 h-9 sm:px-0'
                src='/images/logos/stacked_berlin_logo.webp'
                alt=''
              /> */}
            </div>
            <div className='flex w-1/2 justify-center pl-5 pt-5 sm:w-1/2 sm:pl-0 md:w-[20%]'>
              <Image
                src='/images/logos/leipzig.png'
                width={240}
                height={80}
                alt='Stadt Leipzig Logo'
              />
            </div>
            <div className='flex w-1/2 justify-center pr-5 pt-5 sm:w-1/2 sm:pr-0 md:w-1/4'>
              <Image
                src='/images/logos/haus_der_jugend.webp'
                width={120}
                height={80}
                alt='Haus der Jugend Logo'
              />
              {/* <img
                className='sm:h-12 h-9 sm:px-0'
                src='/images/logos/haus_der_jugend.webp'
                alt=''
              /> */}
            </div>
            <div className='flex w-1/2 justify-center pl-5 pt-14 sm:w-1/2 sm:pl-0 md:w-1/4'>
              <Image src='/images/logos/OASE_logo.webp' width={160} height={80} alt='OASE Logo' />
              {/* <img className='sm:h-12 h-9 sm:px-0' src='/images/logos/OASE_logo.webp' alt='' /> */}
            </div>
            <div className='flex w-1/2 justify-center pr-5 pt-14  sm:w-1/2 sm:pr-0 md:w-1/4'>
              <Image
                src='/images/logos/bundesvereinigung_nachhaltigkeit.svg'
                width={170}
                height={80}
                alt='Bundesvereinigung Nachhaltigkeit Logo'
              />
              {/* <img
                className='sm:h-12 h-9 sm:px-0'
                src='/images/logos/bundesvereinigung_nachhaltigkeit.svg'
                alt=''
              /> */}
            </div>
            <div className='flex w-1/2 justify-center pl-5 pt-14 sm:w-1/2 sm:pl-0 md:w-1/4'>
              <Image
                src='/images/logos/deutsche_kinder_und_jugendstiftung.png'
                width={240}
                height={80}
                alt='Deutsche Kinder und Jugendstiftung Logo'
              />
            </div>
          </div>
        </Container>
      </section>

      {/* --Leistungsübersicht-- */}
      <section
        id='Leistungsübersicht'
        className='relative bg-lightYellow pb-[650px] pt-20 sm:pb-28 sm:pt-32 lg:pb-10'
      >
        <Container styling={'pb-40 flex lg:flex-row flex-col lg:items-center lg:justify-between'}>
          {/* Textabschnitt */}
          <Textbox
            section={'Leistungsübersicht'}
            slogan={'Unsere Leistungspalette im Überblick'}
            align={'left'}
            styling={'lg:w-1/3'}
          >
            {/* Text */}
            <div className='mb-10 font-source leading-tight'>
              Schulische Förderprogramme im Berliner Kiez, Einzel- und Gruppennachhilfe und
              Austauschprogramme auf europäischer Ebene. Wir bieten unseren Kooperationspartnern ein
              umfangreiches und individuelles Leistungsangebot.
              <br />
              <br />
              Bei allen Fragen beraten wir Sie gerne persönlich - natürlich kostenlos und
              unverbindlich
            </div>
            <Button
              className='umami--click--Leistungsübersicht-Termin-buchen'
              cta={'Termin buchen'}
              click={toggleKontaktieren}
            />
          </Textbox>
          {/* Übersichtskarten */}
          <div className='relative z-10 flex h-[780px] w-full flex-col items-start justify-between bg-purple-500 bg-opacity-0 sm:flex-row sm:flex-wrap lg:w-[60%]'>
            {/* Lernförderung Karte*/}
            <a
              data-aos='fade-up'
              href='#Lernförderung'
              className='w-full rounded-2xl bg-white shadow-2xl transition-all sm:w-[45%] lg:hover:scale-[102%]'
            >
              <Image
                className='h-48 w-full rounded-t-3xl object-cover brightness-[0.6] '
                src='/images/schule.webp'
                width={200}
                height={100}
                alt='Schule'
              />
              {/* <img className='rounded-t-3xl brightness-[0.6]' src='/images/schule.webp' alt='' /> */}
              <div className='mx-7 mt-12 font-poppins text-xl lg:mt-7'>Lernförderung</div>
              <div className='mx-7 mt-8 font-source text-sm lg:mt-5'>
                Wir kommen an Ihre Schule und fördern Ihre Schülerinnen und Schüler, um
                Wissenslücken zu schließen und Lernziele zu erreichen.
              </div>
              <div className='float-right mt-10 flex rounded-tl-2xl rounded-br-2xl bg-primary px-4 py-2 text-sm font-semibold text-white lg:mt-5'>
                mehr erfahren <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
              </div>
            </a>
            {/* Privatunterricht */}
            <a
              data-aos='fade-up'
              href='#Privatunterricht'
              className='mt-16 rounded-2xl bg-white shadow-2xl transition-all sm:mt-0 sm:w-[45%] lg:mt-56 lg:hover:scale-[102%]'
            >
              <Image
                className='h-48 w-full rounded-t-3xl object-cover brightness-[0.6]'
                src='/images/privat.webp'
                width={200}
                height={100}
                alt='Privatunterricht'
              />
              {/* <img className='rounded-t-3xl brightness-[0.6]' src='/images/privat.webp' alt='' /> */}
              <div className='mx-7 mt-12 font-poppins text-xl lg:mt-7'>Privatunterricht</div>
              <div className='mx-7 mt-8 font-source text-sm lg:mt-5'>
                Ihr Kind steht im Mittelpunkt. Gemeinsam mit unseren Tutoren und Tutorinnen finden
                wir eine Lösung für jedes Problem.
              </div>
              <div className='float-right mt-10 flex rounded-tl-2xl rounded-br-2xl bg-primary px-4 py-2 text-sm font-semibold text-white lg:mt-5'>
                mehr erfahren <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
              </div>
            </a>

            {/* Bildungsprojekte */}
            <a
              data-aos='fade-up'
              href='#Bildungsprojekte'
              className='mt-16 rounded-2xl bg-white shadow-2xl transition-all sm:w-[45%] lg:-mt-40 lg:hover:scale-[102%]'
            >
              <Image
                className='h-48 w-full rounded-t-3xl object-cover brightness-[0.6]'
                src='/images/projekte.webp'
                width={200}
                height={100}
                alt='Bildungsprojekte'
              />
              {/* <img
                className='rounded-t-3xl brightness-[0.6] w-full h-48 object-cover'
                src='/images/projekte.webp'
                alt=''
              /> */}
              <div className='mx-7 mt-12 font-poppins text-xl lg:mt-7'>Bildungsprojekte</div>
              <div className='mx-7 mt-8 font-source text-sm lg:mt-5'>
                In enger Zusammenarbeit mit der Deutschen Kinder- und Jugendstiftung begleiten wir
                geflüchtete Kinder und Jugendliche auf dem Weg in das deutsche Schulsystem.
              </div>
              <div className='float-right mt-10 flex rounded-tl-2xl rounded-br-2xl bg-primary px-4 py-2 text-sm font-semibold text-white lg:mt-5'>
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
      <section id='Lernförderung' className='relative bg-darkYellow'>
        <Container styling={'pb-2 flex flex-col items-center'}>
          {/* Textabschnitt */}
          <Textbox
            animation={'fade-up'}
            section={'Lernförderung'}
            slogan={'Zurück in die Erfolgsspur'}
            align={'center'}
            styling={'lg:w-3/5 pt-20'}
          >
            {/* Text */}
            <div className='mb-0 font-source leading-tight sm:mb-10'>
              Wir kommen an Ihre Schule und fördern Ihre Schülerinnen und Schüler, damit sie
              Wissenslücken schließen und Lernziele erreichen können.
            </div>
          </Textbox>
          {/* Für Schulen, für Eltern Karte */}
          <div
            data-aos='fade-up'
            className='relative z-10 mt-0 mb-44 flex w-full flex-wrap sm:mt-10'
          >
            {/* Für Schulen */}
            <div data-aos-anchor-placement='center-bottom' className='w-full lg:w-1/2'>
              <Image
                className='hidden h-full w-full object-cover shadow-2xl brightness-50 filter lg:block lg:rounded-tl-3xl'
                src='/images/schule.webp'
                width={400}
                height={300}
                alt='Für Schulen'
              />
              {/* <img
                className='shadow-2xl lg:block hidden h-full w-full object-cover filter brightness-50 lg:rounded-tl-3xl'
                src='/images/schule.webp'
                alt=''
              /> */}
            </div>
            <div
              data-aos-anchor-placement='center-bottom'
              className='mb-12 flex w-full flex-col items-center rounded-3xl bg-white px-14 pt-14 pb-24 shadow-2xl lg:mb-0 lg:block lg:w-1/2 lg:rounded-b-none lg:rounded-tr-3xl lg:rounded-tl-none lg:px-28'
            >
              <div className='text-center font-poppins text-sm sm:text-left'>
                Innovatives Bildungsangebot
              </div>
              <div className='font-poppints mt-5 text-3xl font-semibold'>Für Schulen</div>
              <div className='mt-6 h-[5px] w-10 bg-primary'></div>
              <div className='mt-12 text-center font-source leading-tight lg:text-left'>
                Jedes Kind ist anders, jede Schule ist anders. Wir passen unsere Konzeption auf Ihre
                Vorstellungen an. Dabei können Sie sich auf einen verlässlichen und kooperativen
                Austausch verlassen. Gerne organisieren wir die Lernförderung auch an Ihrer Schule.
                <br />
                <br />
                {/* <b>Mehr Informationen &#62;&#62;</b> */}
              </div>
            </div>
            {/* Für Eltern */}
            <div className='mt-0 flex w-full flex-col items-center rounded-3xl bg-white px-14 pt-20 pb-20 shadow-2xl sm:mt-12 lg:mt-0 lg:block lg:w-1/2 lg:rounded-t-none lg:rounded-bl-3xl lg:rounded-br-none lg:px-28 lg:pt-14'>
              <div className='text-center font-poppins text-sm sm:text-left'>
                Finanziertes Bildungsangebot
              </div>
              <div className='font-poppints mt-5 text-3xl font-semibold'>Für Eltern</div>
              <div className='mt-6 h-[5px] w-10 bg-primary'></div>
              <div className='mt-12 text-center font-source leading-tight lg:text-left'>
                Wir helfen Ihnen bei den kleinen und großen Problemen, damit Ihr Kind wieder in die
                Spur findet. Mit dem Bildungs und Teilhabe Programm (BuT), bekommt Ihr Kind sogar
                kostenlose Unterstützung. Wir beraten Sie gerne dazu.
                {/* <b>Mehr Informationen &#62;&#62;</b> */}
                <br />
                <br />{' '}
              </div>
            </div>
            <div className='w-1/2'>
              <Image
                className='hidden h-full w-full rounded-br-3xl object-cover shadow-2xl brightness-50 filter lg:block'
                src='/images/eltern.webp'
                width={400}
                height={300}
                alt='Für Eltern'
              />
              {/* <img
                className='shadow-2xl lg:block hidden h-full w-full object-cover filter brightness-50 rounded-br-3xl'
                src='/images/eltern.webp'
                alt=''
              /> */}
            </div>
            {/* Termin Button */}
            <a
              onClick={toggleKontaktieren}
              className='umami--click--Lernförderung-Termin-buchen cursor-pointer'
            >
              <div className='absolute top-2/4 left-2/4 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-8 border-primary bg-white text-center font-poppins text-sm shadow-[0_0_30px_-15px_rgba(0,0,0,0.4)] transition-transform lg:hover:scale-[105%]'>
                Hier kostenlos
                <br />
                Beratung vereinbaren
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
      <section id='Privatunterricht' className='relative bg-lightYellow pt-0 sm:pb-10 sm:pt-20 '>
        <Container styling={'pb-32 flex flex-col items-center'}>
          {/* Textabschnitt */}
          <Textbox
            animation={'fade-up'}
            section={'Privatunterricht'}
            slogan={'Individueller Unterricht auf Ihr Kind angepasst'}
            align={'center'}
            styling={'lg:w-3/5 -mt-1'}
          >
            {/* Text */}
            <div className='mb-10 font-source leading-tight'>
              Bei unserem Privatunterricht steht Ihr Kind im Mittelpunkt. Wir achten darauf, dass
              unsere Tutoren und Tutorinnen mit Ihrem Kind auf einer Wellenlänge sind. Gemeinsam
              finden wir eine Lösung für jedes Problem.
            </div>
          </Textbox>
          {/* Kennenlernen & Probestunde */}
          <div className='relative z-10 mt-0 flex flex-col text-white sm:mt-14 lg:flex-row'>
            {/* Kennenlernen Karte */}
            <div
              data-aos={'fade-up'}
              onClick={toggleKontaktieren}
              className='erstesKennenlernen relative mb-20 h-72 cursor-pointer rounded-2xl shadow-2xl transition-transform sm:w-full lg:mr-12 lg:mb-0 lg:w-1/2 lg:hover:scale-[102%]'
            >
              <div className='mx-12 mt-12 font-poppins text-xl sm:mt-12'>Erstes Kennenlernen</div>
              <div className='mx-12 mt-5 h-[5px] w-10 bg-primary '></div>
              <div className='text-md mx-12 mt-8 mb-16 font-source sm:mt-10'>
                Gemeinsam können wir am meisten bewegen. Wir helfen, die beste Strategie für Ihr
                Kind zu entwickeln.
              </div>
              <a className='umami--click--KennenlernenVereinabren-Termin-buchen absolute bottom-0 right-0 float-right mt-10 flex rounded-tl-2xl rounded-br-2xl bg-primary px-6 py-2 text-sm font-semibold text-white sm:mt-5'>
                Kennenlernen vereinbaren
                <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
              </a>
            </div>
            {/* Probestunde Karte */}
            <div
              data-aos={'fade-up'}
              onClick={toggleKontaktieren}
              className='kostenloseProbestunde relative h-72 cursor-pointer rounded-2xl shadow-2xl transition-transform sm:w-full lg:mr-12 lg:mb-0 lg:w-1/2 lg:hover:scale-[102%]'
            >
              <div className='mx-12 mt-12 font-poppins text-xl sm:mt-12'>
                Kostenlose Probestunde
              </div>
              <div className='mx-12 mt-5 h-[5px] w-10 bg-primary '></div>
              <div className='text-md mx-12 mt-8 mb-5 font-source sm:mt-10'>
                Am besten wir lernen uns persönlich kennen, um den ersten Schritt zu machen.
              </div>
              <a className='umami--click--ProbestundeVereinbaren-Termin-buchen absolute bottom-0 right-0 float-right mt-10 flex rounded-tl-2xl rounded-br-2xl bg-primary px-6 py-2 text-sm font-semibold text-white sm:mt-5'>
                Probestunde vereinbaren
                <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* --Berufsvorbereitung-- */}
      <section id='Berufsvorbereitung' className='relative bg-lightYellow pt-0 sm:pt-20 lg:pb-52'>
        <Container styling={'pb-32 flex flex-col items-center'}>
          {/* Textabschnitt */}
          <Textbox
            animation={'fade-up'}
            section={'Berufsvorbereitung'}
            slogan={'Ein duales Studium beim Bund-fiB'}
            align={'center'}
            styling={'lg:w-3/5 -mt-1'}
          >
            {/* Text */}
            <div className='mb-10 font-source leading-tight'>
              Du möchtest dein Studium im sozialen Bereich durch praktische Erfahrung bereichern?
              Werde unser Praxispartner im dualen Studium und gestalte die Zukunft im sozialen
              Bereich aktiv mit! Profitiere von praxisnaher Ausbildung, individueller Betreuung,
              finanzieller Unabhängigkeit, wertvollen Netzwerkaufbau, vielseitigen Aufgaben und
              hervorragenden Karrierechancen.
            </div>
          </Textbox>
          <Button
            className='umami--click--TitleSeite-Termin-buchen'
            cta={'Termin buchen'}
            click={toggleKontaktieren}
          ></Button>
          <Textbox
            animation={'fade-up'}
            section={''}
            slogan={'Zusatzqualifikationen für Auszubildende der Sozialen Berufe:'}
            align={'center'}
            styling={'lg:w-3/5 mt-20'}
          >
            {/* Text */}
            <div className='mb-10 font-source leading-tight'>
              Zusatzqualifikationen sind für Auszubildende im sozialen Bereich essenziell, da sie
              spezialisierte Kenntnisse und Fähigkeiten vermitteln, die Karrierechancen verbessern
              und die Qualität der Arbeit steigern.
            </div>
          </Textbox>
          {/* Kennenlernen & Probestunde */}
          <div className='relative z-10 mt-0 flex flex-col text-white sm:mt-14 lg:flex-row'>
            {/* Kennenlernen Karte */}
            <div
              data-aos={'fade-up'}
              onClick={toggleKontaktieren}
              className='erstesKennenlernen relative mb-20  cursor-pointer rounded-2xl shadow-2xl transition-transform sm:w-full lg:mr-12 lg:mb-0 lg:w-1/2 lg:hover:scale-[102%]'
            >
              <div className='mx-12 mt-12 font-poppins text-xl sm:mt-12'>
                DaF/ DaZ und souveräner Umgang mit interkulturellen Klassen/ Gruppen
              </div>
              <div className='mx-12 mt-5 h-[5px] w-10 bg-primary '></div>
              <div className='text-md mx-12 mt-8 mb-16 font-source sm:mt-10'>
                Die Zusatzausbildung &quot;DaF/DaZ und souveräner Umgang mit interkulturellen
                Klassen/Gruppen&quot; ist wichtig, da sie Auszubildenden hilft, nicht nur
                sprachliche Kompetenzen zu vermitteln, sondern auch interkulturelle Sensibilität zu
                entwickeln, um auf die Vielfalt der Schülerinnen und Schüler angemessen einzugehen
                und ein förderliches Lernumfeld zu schaffen. Dies fördert nicht nur den Lernprozess,
                sondern stärkt auch das gegenseitige Verständnis und die Akzeptanz innerhalb der
                Lerngruppen.
              </div>
              <a className='umami--click--KennenlernenVereinabren-Termin-buchen absolute bottom-0 right-0 float-right mt-10 flex rounded-tl-2xl rounded-br-2xl bg-primary px-6 py-2 text-sm font-semibold text-white sm:mt-5'>
                Termin anfragen
                <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
              </a>
            </div>
            {/* Probestunde Karte */}
            <div
              data-aos={'fade-up'}
              onClick={toggleKontaktieren}
              className='kostenloseProbestunde relative  cursor-pointer rounded-2xl shadow-2xl transition-transform sm:w-full lg:mr-12 lg:mb-0 lg:w-1/2 lg:hover:scale-[102%]'
            >
              <div className='mx-12 mt-12 font-poppins text-xl sm:mt-12'>
                Umgang mit traumatisierten Geflüchteten im Schul- und Sozialen Bereich und Burnout
                Prävention
              </div>
              <div className='mx-12 mt-5 h-[5px] w-10 bg-primary '></div>
              <div className='text-md mx-12 mt-8 mb-5 font-source sm:mt-10'>
                Die Zusatzausbildung &quot;Umgang mit traumatisierten Geflüchteten im Schul- und
                Sozialen Bereich und Burnout Prävention&quot; ist wichtig, weil sie Auszubildende
                befähigt, angemessen auf die besonderen Bedürfnisse traumatisierter Geflüchteter
                einzugehen und gleichzeitig ihre eigene psychische Gesundheit zu schützen. Dies
                trägt zur Schaffung einer unterstützenden Umgebung bei, die sowohl den Geflüchteten
                als auch den Auszubildenden zugutekommt und langfristig zur erfolgreichen
                Integration beiträgt.
              </div>
              <a className='umami--click--ProbestundeVereinbaren-Termin-buchen absolute bottom-0 right-0 float-right mt-10 flex rounded-tl-2xl rounded-br-2xl bg-primary px-6 py-2 text-sm font-semibold text-white sm:mt-5'>
                Termin anfragen
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
      <section id='Bildungsprojekte' className='bg-middleYellow pt-10 pb-14'>
        <Container styling={'flex lg:flex-row flex-col-reverse'}>
          {/* Slider */}
          <div
            data-aos={'fade-up'}
            className='sm:mx-auto sm:mt-16 sm:w-[90%] lg:mx-0 lg:mt-0 lg:w-1/2'
          >
            <Swiper
              pagination={pagination}
              loop={true}
              navigation={true}
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              className='mySwiper'
            >
              <SwiperSlide>
                <div className='mb-16 w-full rounded-2xl bg-white sm:w-[70%] sm:shadow-2xl'>
                  <div className='bildungsProjektFit rounded-t-2xl'>
                    <div className='px-7 pt-44 pb-8 text-left text-white'>
                      <div className='text-sm'>Ein Projekt mit Hand und Fuß</div>
                      <div className='mt-3 text-3xl font-semibold'>Fit für die Schule</div>
                    </div>
                  </div>
                  <div className='my-8 mx-7 text-left font-source text-sm'>
                    Als Bildungsträger sehen wir uns in der Verantwortung, unsere Ressourcen mit
                    geflüchteten Familien zu teilen. Manchmal dauert es leider länger, bis ein
                    geflüchtetes Kind einen Schulplatz zugewiesen bekommt. In solchen Fällen fangen
                    wir die Kinder auf, beschulen sie und führen mit ihnen spannende Workshops und
                    Projekte durch, die nicht nur ihre Bildung fördern, sondern auch gezielt auf die
                    Berufsvorbereitung ausgerichtet sind. Unsere Grundbildung bereitet die Kinder
                    somit auch auf eine mögliche berufliche Zukunft vor.
                  </div>
                  {/* <a
                    className='flex bg-primary text-white text-sm font-semibold float-right sm:mt-5 mt-10 px-4 py-2 rounded-tl-2xl rounded-br-2xl'
                    href=''
                  >
                    mehr erfahren <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
                  </a> */}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='mb-16 w-full rounded-2xl bg-white sm:w-[70%] sm:shadow-2xl'>
                  <div className='bildungsProjektFit rounded-t-2xl'>
                    <div className='px-7 pt-44 pb-8 text-left text-white'>
                      <div className='text-sm'>
                        Kulturelle und sprachbildende Angebote - europaweit
                      </div>
                      <div className='mt-3 text-3xl font-semibold'>Erasmus+</div>
                    </div>
                  </div>
                  <div className='my-8 mx-7 text-left font-source text-sm'>
                    Lehrkräfte sind die Schlüsselfiguren, wenn es um die Berufsorientierung unserer
                    Schülerinnen und Schüler geht. Deshalb haben wir ein Programm entwickelt, das
                    die Lehrkräfte, die mit uns arbeiten, in ihrer Weiterentwicklung unterstützt.
                    Wir sind davon überzeugt, dass gut ausgebildete Lehrkräfte einen entscheidenden
                    Beitrag dazu leisten können, junge Menschen auf ihrem Weg in die Berufswelt zu
                    begleiten und zu inspirieren.
                  </div>
                  {/* <a
                    className='flex bg-primary text-white text-sm font-semibold float-right sm:mt-5 mt-10 px-4 py-2 rounded-tl-2xl rounded-br-2xl'
                    href=''
                  >
                    mehr erfahren <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
                  </a> */}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <Textbox
            animation={'fade-up'}
            section={'Bildungsprojekte'}
            slogan={'Jetzt für morgen!'}
            align={'left'}
            styling={'lg:w-3/5 sm:pb-0 lg:px-20 pb-16'}
          >
            {/* Text */}
            <div className='mb-10 font-source leading-tight'>
              Zusammen mit unseren Kooperationspartnern machen wir nachhaltige Bildungsangebote
              zugänglich für jedes Kind. Kommen Sie gerne auf uns zu und wir besprechen die
              Umsetzung.
              <br />
              <br />
              Bei allen Fragen beraten wir Sie gerne persönlich - natürlich kostenlos und
              unverbindlich
            </div>
            <Button
              className='umami--click--ProjektBesprechen-Termin-buchen'
              cta={'Ihr Projekt besprechen'}
              click={toggleKontaktieren}
            ></Button>
          </Textbox>
        </Container>
      </section>

      {/* --Über Uns-- */}
      <section id='ÜberUns' className='relative bg-middleYellow pt-20'>
        <Container styling={'flex items-center flex-col'}>
          <Textbox
            animation={'fade-up'}
            section={'Über Uns'}
            slogan={'Was uns als Partner besonders macht'}
            styling={'lg:w-3/5 -mt-1'}
          >
            <div className='mb-10 font-source leading-tight sm:mb-20'>
              Wir sind ein junges, aufgeschlossene und hoch motiviertes Team mit dem Ziel, jedem
              Kind die Verbesserung der schulischen Leistungen zu ermöglichen und dabei die eigenen
              Talente zu entfalten. Wir betonen die Stärken unserer Schülerinnen und Schüler.
            </div>
          </Textbox>
          {/* Partner Logos */}
          <div
            data-aos='fade-up'
            className='relative z-10 flex w-full flex-wrap items-center justify-evenly overflow-hidden'
          >
            <div className='flex w-1/2 justify-center pr-5 pt-5 sm:w-1/2 sm:pr-0 md:w-1/4'>
              <Image
                src='/images/logos/weißes_berlin_logo.webp'
                width={200}
                height={200}
                alt='Berliner Senat Logo'
              />
              {/* <img
                className='sm:h-9 h-9 sm:px-0'
                src='/images/logos/weißes_berlin_logo.webp'
                alt=''
              /> */}
            </div>
            <div className='flex w-1/2 justify-center pl-5 pt-5 sm:w-1/2 sm:pl-0 md:w-1/4'>
              <Image
                src='/images/logos/stacked_berlin_logo.webp'
                width={130}
                height={100}
                alt='Berzirksamt Mitte Logo'
              />
              {/* <img
                className='sm:h-14 h-9 sm:px-0'
                src='/images/logos/stacked_berlin_logo.webp'
                alt=''
              /> */}
            </div>
            <div className='flex w-1/2 justify-center pr-5 pt-5 sm:w-1/2 sm:pr-0 md:w-1/4'>
              <Image
                src='/images/logos/haus_der_jugend.webp'
                width={120}
                height={80}
                alt='Haus der Jugend Logo'
              />
              {/* <img
                className='sm:h-12 h-9 sm:px-0'
                src='/images/logos/haus_der_jugend.webp'
                alt=''
              /> */}
            </div>
            <div className='flex w-1/2 justify-center pl-5 pt-14 sm:w-1/2 sm:pl-0 md:w-1/4'>
              <Image src='/images/logos/OASE_logo.webp' width={160} height={80} alt='OASE Logo' />
              {/* <img className='sm:h-12 h-9 sm:px-0' src='/images/logos/OASE_logo.webp' alt='' /> */}
            </div>
            <div className='flex w-1/2 justify-center pr-5 pt-14  sm:w-1/2 sm:pr-0 md:w-1/4'>
              <Image
                src='/images/logos/bundesvereinigung_nachhaltigkeit.svg'
                width={170}
                height={80}
                alt='Bundesvereinigung Nachhaltigkeit Logo'
              />
              {/* <img
                className='sm:h-12 h-9 sm:px-0'
                src='/images/logos/bundesvereinigung_nachhaltigkeit.svg'
                alt=''
              /> */}
            </div>
            <div className='flex w-1/2 justify-center pl-5 pt-14 sm:w-1/2 sm:pl-0 md:w-1/4'>
              <Image
                src='/images/logos/deutsche_kinder_und_jugendstiftung.png'
                width={240}
                height={80}
                alt='Deutsche Kinder und Jugendstiftung Logo'
              />
              {/* <img
                className='sm:h-9 h-9 sm:px-0'
                src='/images/logos/deutsche_kinder_und_jugendstiftung.png'
                alt=''
              /> */}
            </div>
            <div className='flex w-1/2 justify-center pl-5 pt-14 sm:w-1/2 sm:pl-0 md:w-[20%]'>
              <Image
                src='/images/logos/leipzig.png'
                width={240}
                height={80}
                alt='Deutsche Kinder und Jugendstiftung Logo'
              />
            </div>
          </div>
        </Container>{' '}
        {/* Wave */}
        <div className='wave-5 relative z-0'>
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
      <section id='UnserTeam' className='bg-darkYellow pb-14 sm:pt-20'>
        <Container styling={'pt-32'}>
          {/* Text & Gründer */}
          <div
            data-aos={'fade-up'}
            className='flex flex-col items-center justify-between lg:flex-row'
          >
            <Textbox
              section={'Unser Team'}
              slogan={'Lernen Sie unser Team kennen'}
              styling={'lg:w-2/5 sm:pb-0 pb-16'}
              align={'left'}
            >
              <div className='mb-10 text-center font-source leading-tight lg:text-left'>
                Unser einzigartiges Team setzt sich aus den schlausten, motiviertesten und
                kreativsten Köpfen zusammen, die wir finden konnten. Wir garantieren, dass unsere
                Mitarbeitenden die Hochschulreife oder eine abgeschlossene pädagogische Ausbildung
                besitzen und Erfahrungen in der Arbeit mit Kindern und Jugendlichen vorweisen
                können. Unsere verschiedenen kulturellen Erfahrungen und Hintergründe sorgen für
                eine freundliche Vielfalt mit dem besonderen Wohlfühlfaktor. Lass uns gemeinsam
                wachsen, wir freuen uns über Verstärkung im Team.
                <br />
                <br />
                Bei allen Fragen beraten wir Sie gerne persönlich - natürlich kostenlos und
                unverbindlich
              </div>
              <Button
                className='umami--click--TeamKennenLernen-Termin-buchen'
                cta={'Lernen Sie uns persönlich kennen'}
                click={toggleKontaktieren}
              ></Button>
            </Textbox>
            <Gründer />
          </div>
          {/* Mitarbeiter Übersicht */}
          <div className='mt-10 flex flex-wrap justify-between sm:mt-24'>
            <Mitarbeiter
              bild={'/images/mitarbeiter/Marlene_neu.jpeg'}
              name={'Marlene'}
              // job={'Alle Teams'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/Katrin_neu.jpeg'}
              name={'Katrin'}
              // job={'Alle Teams'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/Lika_neu.jpeg'}
              name={'Lika'}
              // job={'Alle Teams'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/Schabnaz_neu.jpeg'}
              name={'Schabnaz'}
              // job={'Alle Teams'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/Nathalie_neu.jpeg'}
              name={'Nathalie'}
              // job={'Alle Teams'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/Mika_neu.jpeg'}
              name={'Mika'}
              // job={'Alle Teams'}
            />
            {/*             
            <Mitarbeiter
              bild={'/images/mitarbeiter/marlene.jpg'}
              name={'Marlene'}
              job={'Koordination & Projektleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/maddy.jpg'}
              name={'Maddy'}
              job={'Betreuung & Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/teodora.jpg'}
              name={'Teodora'}
              job={'Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/lukas.jpg'}
              name={'Lukas'}
              job={'Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/willi.jpg'}
              name={'Willi'}
              job={'Lehrkraft & Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/pauline.jpg'}
              name={'Pauline'}
              job={'Lehrkraft & Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/rim.jpg'}
              name={'Rim'}
              job={'Betreuung & Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/julia.jpg'}
              name={'Julia'}
              job={'Betreuung & Workshopleitung'}
            />

            <Mitarbeiter
              bild={'/images/mitarbeiter/lika.jpg'}
              name={'Lika'}
              job={'Betreuung & Dokumentation'}
            />
            <Mitarbeiter bild={'/images/mitarbeiter/rosa.jpg'} name={'Rosa'} job={'Lehrkraft'} />
            <Mitarbeiter bild={'/images/mitarbeiter/maggy.jpg'} name={'Maggy'} job={'Betreuung'} />
            <Mitarbeiter bild={'/images/mitarbeiter/paul.jpg'} name={'Paul'} job={'Lehrkraft'} />
            <Mitarbeiter bild={'/images/mitarbeiter/musa.jpg'} name={'Musa'} job={'Lehrkraft'} />
            <Mitarbeiter
              bild={'/images/mitarbeiter/adriana.jpg'}
              name={'Adriana'}
              job={'Lehrkraft & Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/felix.jpg'}
              name={'Felix'}
              job={'Lehrkraft & Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/ara.jpg'}
              name={'Ara'}
              job={'Lehrkraft & Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/luisa.jpg'}
              name={'Luisa'}
              job={'Lehrkraft & Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/katherina.jpg'}
              name={'Katherina'}
              job={'Betreuung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/julius.jpg'}
              name={'Julius'}
              job={'Lehrkraft'}
            /> */}
          </div>
        </Container>{' '}
      </section>

      {/* --Jobs-- */}
      <section id='Jobs' className='relative bg-darkYellow'>
        <Container styling={'sm:pt-20 flex justify-center'}>
          {/* Jobs Karte */}
          <div
            data-aos='fade-up'
            className='relative z-10 mt-10 mb-72 flex w-full flex-wrap sm:w-[90%]'
          >
            {/* Bild - linke Seite */}
            <div className='hidden w-full sm:w-2/5 lg:block'>
              <Image
                className='hidden h-full w-full  rounded-tl-3xl rounded-bl-3xl object-cover shadow-2xl lg:block'
                src={'/images/jobsKarte.webp'}
                width={500}
                height={500}
                alt='Jobs Karten Bild'
              />
              {/* Text - rechte Seite */}
            </div>
            <div className='mb-12 flex w-full flex-col items-start rounded-3xl bg-white py-20 px-10 shadow-2xl sm:mb-0 sm:px-14 lg:w-3/5 lg:items-start lg:rounded-3xl lg:rounded-tl-none lg:rounded-bl-none'>
              <div className='font-poppins text-lg'>Jobs bei uns</div>
              <div className='mt-5 h-[5px] w-10 bg-primary'></div>
              {/* Slogan */}
              <div className='my-10 text-left font-berlin text-5xl leading-tight'>
                Ich möchte mitmachen
              </div>
              {/* Beschreibung */}
              <div className='mb-10 text-left font-source leading-tight lg:text-left'>
                Wir organisieren langfristig angelegte Projekte und möchten Lebenswege zum Positiven
                verändern. Dabei zählen wir auf empathische und aufgeschlossene Menschen, die den
                Kindern und Jugendlichen wertschätzend entgegentreten und bereit sind mehr als ein:e
                Tutor:in zu sein.
                <br />
                <br />
                <br />
              </div>
              <Button
                className='umami--click--Jobs-Termin-buchen'
                click={toggleKontaktieren}
                cta={'Bewirb dich hier bei uns!'}
              ></Button>
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
      {images && (
        <section id='Aktuelles' className='relative bg-middleYellow'>
          <Container styling={'flex flex-col items-center pt-10'}>
            <Textbox
              animation={'fade-up'}
              section={'Aktuelles'}
              slogan={'Neuigkeiten von uns, unseren Lerngruppen und Projekten.'}
              styling={'lg:w-3/5 -mt-1'}
            >
              <div className='mb-0 font-source leading-tight sm:mb-20'>
                Ob Lagerfeuer und Stockbrot, Akrobatik und Theater oder regelmäßige Lernförderungen
                mit spannenden Ausflügen. Hier können Sie sich ein Bild machen.
              </div>
            </Textbox>
            {/* Instagram */}
            <div
              data-aos='fade-up'
              className='m-auto flex w-[100%] max-w-[950px] flex-wrap justify-center'
            >
              <div className='w-1/3'>
                <div className='mt-7 text-center font-poppins text-base sm:text-xl'>News</div>
                <div className='mx-auto mt-3 mb-8 h-[5px] w-10 bg-primary'></div>
              </div>
              <div className='w-1/3'>
                <div className='mt-7 text-center font-poppins text-base sm:text-xl'>
                  Lerngruppen
                </div>
                <div className='mx-auto mt-3 mb-8 h-[5px] w-10 bg-primary'></div>
              </div>
              <div className='w-1/3'>
                <div className='mt-7 text-center font-poppins text-base sm:text-xl'>
                  Mitarbeitende
                </div>
                <div className='mx-auto mt-3 mb-8 h-[5px] w-10 bg-primary'></div>
              </div>
              {images.map((image, index) => {
                if (index <= end) {
                  return (
                    <InstaImage
                      key={index}
                      src={image.media_type === 'VIDEO' ? image.thumbnail_url : image.media_url}
                      alt={image.caption}
                      link={image.permalink}
                      prompt={image.media_type === 'VIDEO' ? true : false}
                    />
                  );
                }
              })}
            </div>
            <Button click={loadMore} styling={'my-10'} cta={'Mehr laden'}></Button>
          </Container>
        </section>
      )}

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
      <section className='relative bg-darkYellow'>
        <Container
          styling={'pt-32 pb-12 flex lg:flex-row flex-col-reverse justify-between items-center'}
        >
          {/* Formular */}
          <KontaktFormular styling={'lg:w-[450px] sm:w-[400px] w-[300px] flex  flex-col w-full'} />
          {/* Text */}
          <Textbox
            section={'Schreiben Sie uns jetzt'}
            slogan={'Wir freuen uns auf Ihre Nachricht'}
            align={'left'}
            styling={'lg:w-[40%] sm:pb-16 pb-16'}
          >
            <div className='font-source leading-tight'>
              Sie haben Fragen oder Ihnen ist etwas unklar? Schreiben Sie uns! Wir versuchen Ihnen
              schnellst möglichst zu antworten.
            </div>
          </Textbox>
        </Container>
      </section>

      {/* --Downloads-- */}
      {
        // <section id='Downloads' className='bg-darkYellow pt-20'>
        //   <Container styling={'pb-2 flex justify-center'}>
        //     {/* Karte */}
        //     <div className='relative z-10 mt-10 mb-28 flex w-full flex-wrap'>
        //       {/* Text - linke Seite */}
        //       <div className='flex w-full flex-col items-center rounded-tl-3xl rounded-tr-3xl bg-navy py-16 px-14 shadow-2xl sm:block sm:w-2/5 sm:rounded-tr-none sm:rounded-bl-3xl'>
        //         <div className='font-regular font-source text-lg text-white'>Downloads</div>
        //         <div className='mt-5 h-[5px] w-10 bg-primary'></div>
        //         <div className='font-pooppins mt-10 text-center text-xl font-bold leading-tight text-white sm:text-left sm:text-xl lg:text-3xl'>
        //           Hier finden Sie alle Dokumente und Dateien
        //         </div>
        //       </div>
        //       {/* Download Icons - rechte Seite */}
        //       <div className='downloadsCSS flex w-full items-center justify-evenly rounded-br-3xl rounded-tr-none rounded-bl-3xl sm:w-3/5 sm:rounded-tr-3xl sm:rounded-bl-none'>
        //         <a href='zusatzbogen.pdf' target='_blank'>
        //           <div className='flex flex-col items-center justify-center py-14 text-center text-xs text-white sm:py-0 sm:text-sm'>
        //             <FontAwesomeIcon className='w-10 pb-4 text-white' icon={faFilePdf} />
        //             Zusatzbogen für <br /> Lernförderung
        //           </div>
        //         </a>
        //         <a href='FIB-Heft.pdf' target='_blank'>
        //           <div className='flex flex-col items-center justify-center text-xs text-white sm:text-sm'>
        //             <FontAwesomeIcon className='w-10 pb-4 text-white' icon={faFilePdf} />
        //             Unser fiB-Heft – <br /> Das Lerntagebuch <br /> <br />
        //           </div>
        //         </a>
        //       </div>
        //     </div>
        //   </Container>
        // </section>
      }

      {/* --Footer-- */}
      <footer className='relative mx-auto  bg-lightYellow px-7 pt-20 pb-10 sm:px-20'>
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
        <div className='mx-auto flex max-w-screen-xl flex-col justify-between pt-20 sm:flex-row sm:pt-28'>
          {/* Logo */}
          <Image
            className='h-12 object-contain'
            src='/images/logos/bund_fib_logo.webp'
            width={300}
            height={30}
            alt='Bund fiB Logo'
          />
          {/* <img className='h-12 object-contain' src='/images/logos/bund_fib_logo.webp' alt='' /> */}
          {/* Leistungen */}
          <div className='hidden lg:block'>
            <div className='font-poppins text-base'>Leistungen</div>
            <div className='mt-2 mb-5 h-[5px] w-8 bg-primary'></div>
            <a href='#Lernförderung'>
              <div className='my-1 font-source text-sm'>Lernförderungen</div>
            </a>
            <a href='#Privatunterricht'>
              <div className='my-1 font-source text-sm'>Privatunterricht</div>
            </a>
            <a href='#Berufsvorbereitung'>
              <div className='my-1 font-source text-sm'>Berufsvorbereitung</div>
            </a>
            <a href='#Bildungsprojekte'>
              <div className='my-1 font-source text-sm'>Bildungsprojekte</div>
            </a>
            <a href='#Bildungsprojekte'>
              <div className='my-1 font-source text-sm'>Erasmus+</div>
            </a>
          </div>
          {/* Unternehmen */}
          <div className='hidden lg:block'>
            <div className='font-poppins text-base'>Unternehmen</div>
            <div className='mt-2 mb-5 h-[5px] w-8 bg-primary'></div>
            <a href='#ÜberUns'>
              <div className='my-1 font-source text-sm'>Über Uns</div>
            </a>
            <a href='#UnserTeam'>
              <div className='my-1 font-source text-sm'>Unser Team</div>
            </a>
            <a href='#Jobs'>
              <div className='my-1 font-source text-sm'>Jobs</div>
            </a>
          </div>
          {/* Informationen */}
          <div className='hidden lg:block'>
            <div className='font-poppins text-base'>Informationen</div>
            <div className='mt-2 mb-5 h-[5px] w-8 bg-primary'></div>
            <div onClick={toggleImpressum} className='my-1 cursor-pointer font-source text-sm'>
              Impressum
            </div>
            <a
              className='my-1 cursor-pointer font-source text-sm'
              href='/datenschutz'
              target='_blank'
            >
              {/* onClick={toggleDatenschutz}
              className='my-1 cursor-pointer font-source text-sm'>  */}
              Datenschutz
            </a>
            <a href='#Downloads'>
              <div className='my-1 font-source text-sm'>Downloads</div>
            </a>
          </div>
          {/* Kontakt */}
          <div className='hidden lg:block'>
            <div className='font-poppins text-base'>Kontakt</div>
            <div className='mt-2 mb-5 h-[5px] w-8 bg-primary'></div>
            <a className='cursor-pointer' onClick={toggleKontaktieren}>
              <div className='my-1 font-source text-sm'>Termin vereinbaren</div>
            </a>
            <a href='mailto:verwaltung@bund-fib.de'>
              <div className='my-1 font-source text-sm'>verwaltung@bund-fib.de</div>
            </a>
            <a href='tel:+4915758745855'>
              <div className='my-1 font-source text-sm'>+49 157 58745855</div>
            </a>
          </div>
          {/* Mobile Block*/}
          <div className='mt-10 block flex w-full items-center justify-between  font-poppins sm:w-1/2 lg:hidden'>
            <div onClick={toggleImpressum}>Impressum</div>
            <div onClick={toggleDatenschutz}>Datenschutz</div>
            <div>Kontakt</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Get data from instagram api
export async function getServerSideProps() {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,permalink,timestamp,thumbnail_url&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
  );
  const feed = await res.json();

  return {
    props: {
      feed,
    },
  };
}
