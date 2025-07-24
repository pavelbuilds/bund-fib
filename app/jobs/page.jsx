'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../components/Layout/NavBar';
import Footer from '../../components/Layout/Footer';
import Container from '../../components/Container';
import ProjectTitleSection from '../../components/Layout/ProjectTitleSection';
import Image from 'next/image';
import Button from '../../components/Button';
import Textbox from '../../components/Textbox';
import ContactPersonCard from '../../components/ContactPersonCard';
import { faPhone, faEnvelope, faSquarePhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { useStore } from '../../src/store';

const contactPerson = {
  image: '/images/mitarbeiter/Marlene.png',
  name: 'Marlene Langenbucher de Olavarrieta',
  phone: '+49 3068908697',
  email: 'marlene.langenbucher@bund-fib.de ',
};

const Jobs = () => {
  const [kontaktieren, setKontaktieren] = useState(false);
  const { setShowCookieConsent, cookiesAccepted } = useStore();
  const toggleKontaktieren = () => {
    setKontaktieren(!kontaktieren);
  };

  return (
    <>
      <NavBar />
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        {/* <ProjectTitleSection image='/images/Bild30.jpeg' title={`Jobs`} /> */}
        {/* Content */}
        <Container>
          {/* Honorartätigkeiten */}
          <section id='honorartaetigkeiten' className='relative bg-darkYellow mt-28'>
            {/* Jobs Karte */}
            <div data-aos='fade-up' className='relative z-10 mt-10 flex w-full flex-wrap '>
              {/* Bild - linke Seite */}
              <div className='hidden w-full sm:w-2/5 lg:block'>
                <Image
                  className='hidden h-full w-full  rounded-tl-3xl rounded-bl-3xl object-cover shadow-2xl lg:block'
                  src={'/images/Bild30.jpeg'}
                  width={500}
                  height={500}
                  alt='Jobs Karten Bild'
                />
                {/* Text - rechte Seite */}
              </div>
              <div className='mb-12 flex w-full flex-col items-start rounded-3xl bg-white py-20 px-10 shadow-2xl sm:mb-0 sm:px-14 lg:w-3/5 lg:items-start lg:rounded-3xl lg:rounded-tl-none lg:rounded-bl-none'>
                <div className='font-poppins text-base sm:text-lg'>Ich möchte mitmachen</div>
                <div className='mt-5 h-[5px] w-10 bg-primary'></div>
                {/* Slogan */}
                <div className='my-10 text-left font-berlin text-3xl sm:text-5xl leading-tight'>
                  Honorartätigkeiten bei uns
                </div>
                {/* Beschreibung */}
                <div className='mb-10 text-left font-source leading-tight lg:text-left'>
                  Wir organisieren langfristig angelegte Projekte und möchten Lebenswege zum
                  Positiven verändern. Dafür schreiben wir regelmäßig Honorartätigkeiten im Bereich
                  der Lernförderung und der Unterstützung geflüchteter Kinder und Jugendliche aus.
                  Du kannst dich bei dem unten angegebenen Button für ein erstes
                  Vorstellungsgespräch einbuchen.
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
          </section>
          {/* Jobs */}
          <section id='jobs' className='relative bg-darkYellow pt-32'>
            <div data-aos='fade-up' className='relative z-10 mt-10 flex w-full flex-wrap '>
              {/* Bild - linke Seite */}
              <div className='hidden w-full sm:w-2/5 lg:block'>
                <Image
                  className='hidden h-full w-full  rounded-tl-3xl rounded-bl-3xl object-cover shadow-2xl lg:block'
                  src={'/images/Bild28.jpg'}
                  width={500}
                  height={500}
                  alt='Jobs Karten Bild'
                />
                {/* Text - rechte Seite */}
              </div>
              <div className='mb-12 flex w-full flex-col items-start rounded-3xl bg-white py-20 px-10 shadow-2xl sm:mb-0 sm:px-14 lg:w-3/5 lg:items-start lg:rounded-3xl lg:rounded-tl-none lg:rounded-bl-none'>
                <div className='font-poppins text-base sm:text-lg'>Ich möchte mitmachen</div>
                <div className='mt-5 h-[5px] w-10 bg-primary'></div>
                {/* Slogan */}
                <div className='my-10 text-left font-berlin text-3xl sm:text-5xl leading-tight'>
                  Jobs bei uns
                </div>
                {/* Beschreibung */}
                <div className='mb-5 text-left font-source leading-tight lg:text-left'>
                  Wir organisieren langfristig angelegte Projekte und möchten Lebenswege zum
                  Positiven verändern. In den Standorten Berlin, Leipzig und Hannover sorgen kleine
                  Teams dafür, dass alles reibungslos läuft. Stellenausschreibungen, um unser Team
                  zu erweitern findest du hier:
                  <br />
                  <br />
                  <br />
                </div>
                <div className=''>
                  <div className='text-lg font-semibold text-primary mb-4'>
                    Aktuelle Stellenangebote:
                  </div>
                  <ul className='space-y-3'>
                    {/* <li className='flex items-start'>
                      <span className='text-primary mr-2'>•</span>
                      <a
                        href='/stellenausschreibungen/Werkstundent_in im Bereich Bildung und Soziale Arbeit am Standort Leipzig (m:w:d).pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-base underline cursor-pointer'
                      >
                        Werkstudent*in im Bereich Bildung und Soziale Arbeit am Standort Leipzig
                        (m/w/d) - Personalwesen
                      </a>
                    </li> */}
                    <li className='flex items-start'>
                      <span className='text-primary mr-2'>•</span>
                      <a
                        href='/stellenausschreibungen/Stellenausschreibung Praktikant_in Sept 25.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-base underline cursor-pointer'
                      >
                        Stellenausschreibung: Pflichtpraktikum im Bereich Bildung und Soziale Arbeit
                        am Standort Berlin (m/w/d)
                      </a>
                    </li>
                    <li className='flex items-start'>
                      <span className='text-primary mr-2'>•</span>
                      <a
                        href='/stellenausschreibungen/Sta?ndige_Stellenausschreibu ng Praktikant_in_Bund-fiB.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-base underline cursor-pointer'
                      >
                        Ständige Stellenausschreibung: Pflichtpraktikum im Bereich Bildung und
                        Soziale Arbeit am Standort Berlin (m/w/d)
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <Button
                
                  styling='mt-12'
                  className='umami--click--Jobs-Termin-buchen'
                  click={toggleKontaktieren}
                  cta={'Bewirb dich hier bei uns!'}
                ></Button> */}
              </div>
            </div>
          </section>
          <section id='initiativbewerbung' className='mt-32'>
            <Textbox
              animation={'fade-up'}
              section={'Ich möchte mitmachen'}
              slogan={'Initiativbewerbung'}
              styling={'w-full '}
              align={'left'}
            >
              <div className='mb-10 font-source leading-loose sm:mb-20 w-[80%]'>
                Wir nehmen gerne Initiativbewerbung von motivierten Menschen entgegen. Auch wenn im
                Moment keine Stelle frei ist, können wir schauen, ob vielleicht trotzdem eine
                Zusammenarbeit möglich ist. Sende deine Unterlagen (Lebenslauf und ein Schreiben,
                warum du dich initiativ bewirbst) an unsere Ansprechperson.
              </div>
            </Textbox>
            {/* Contact Person Card */}
            <div className={` flex flex-col justify-start w-full  items-start pt-10 pb-32 `}>
              <div className='w-full  mb-20'>
                <h3 className='text-2xl font-bold mb-4'>Interesse geweckt?</h3>
                <p className='text-lg'>Unsere Ansprechpartnerin ist:</p>
              </div>
              <div className='flex flex-col sm:flex-row items-center bg-[rgba(255,255,255,0.3)] rounded-[30px] py-10 pl-10 pr-10 md:pr-20 shadow-[0_0_80px_rgba(0,0,0,0.05)] '>
                {/* Person Image */}
                <div className='rounded-full md:w-48 w-32 md:h-48 h-32'>
                  <Image
                    src={contactPerson.image}
                    className='rounded-full md:w-full w-32 md:h-full h-32 object-cover object-top'
                    alt='Contact Person'
                    width={100}
                    height={100}
                  />
                </div>
                {/* Details */}
                <div className='flex flex-col mt-10 sm:mt-0 sm:ml-10 md:ml-20'>
                  <div className='md:text-2xl text-lg font-medium text-center sm:text-left'>
                    {contactPerson.name}
                  </div>
                  <div className='md:text-lg text-sm flex items-center pt-8 md:pt-5'>
                    <FontAwesomeIcon className='mr-6 text-xl md:text-2xl' icon={faPhone} />
                    <a href={`tel:${contactPerson.phone}`} className='hover:underline'>
                      {contactPerson.phone}
                    </a>
                  </div>
                  <div className='md:text-lg text-sm flex items-center pt-3 md:pt-3'>
                    <FontAwesomeIcon className='mr-6 text-xl md:text-2xl' icon={faEnvelope} />
                    <a href={`mailto:${contactPerson.email}`} className='hover:underline'>
                      {contactPerson.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>
      <Footer />
      {/* Kontaktieren Popup */}
      <div
        className={`fixed top-0 z-30 h-screen  w-screen bg-lightYellow pt-24 transition-all duration-700 ease-out sm:pt-[10vh] lg:pt-24 ${
          kontaktieren ? '-translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Container */}
        <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-center'>
          <button
            className='rounded-full size-14 mb-[5vh] bg-primary text-white flex items-center justify-center'
            onClick={toggleKontaktieren}
          >
            <FontAwesomeIcon icon={faXmark} className='text-2xl' />
          </button>
          {/* Header */}
          <div className='text-center font-berlin text-2xl'>Buch ein Gespräch mit uns:</div>
          {/* Kalender */}
          <div className='mt-20 mb-20 flex w-full flex-col justify-center sm:mt-[5vh] sm:mb-[10vh] md:flex-row lg:mt-[5vh] lg:mb-[5vh]'>
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
                {cookiesAccepted ? (
                  <InlineWidget
                    styles={{
                      width: '50vh',
                      height: 'min(40vh)',
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
                ) : (
                  <div className='py-16 sm:py-24 md:py-32'>
                    <p>
                      Bitte akzeptieren Sie die Verwendung von Cookies, um das Kalender-Widget zu
                      verwenden.{' '}
                      <span
                        className='underline cursor-pointer'
                        onClick={() => setShowCookieConsent(true)}
                      >
                        hier clicken um Cookie-Einstellungen zu ändern
                      </span>
                    </p>
                  </div>
                )}
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
                  {/* <br />
                  <br />
                  Aktuell sind wir für den Standort Hannover nicht auf der Suche nach neuen
                  Nachhilfekräften */}
                </div>
              </a>
              <div className='hidden md:block'>
                {cookiesAccepted ? (
                  <InlineWidget
                    styles={{
                      width: '50vh',
                      height: 'min(40vh)',
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
                ) : (
                  <div className='py-16 sm:py-24 md:py-32'>
                    <p>
                      Bitte akzeptieren Sie die Verwendung von Cookies, um das Kalender-Widget zu
                      verwenden.{' '}
                      <span
                        className='underline cursor-pointer'
                        onClick={() => setShowCookieConsent(true)}
                      >
                        hier clicken um Cookie-Einstellungen zu ändern
                      </span>
                    </p>
                  </div>
                )}
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
                {cookiesAccepted ? (
                  <InlineWidget
                    styles={{
                      width: '50vh',
                      height: 'min(40vh)',
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
                ) : (
                  <div className='py-16 sm:py-24 md:py-32'>
                    <p>
                      Bitte akzeptieren Sie die Verwendung von Cookies, um das Kalender-Widget zu
                      verwenden.
                      <span
                        className='underline cursor-pointer'
                        onClick={() => setShowCookieConsent(true)}
                      >
                        hier clicken um Cookie-Einstellungen zu ändern
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
