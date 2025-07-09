'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../components/Layout/NavBar';
import Footer from '../../components/Layout/Footer';
import Container from '../../components/Container';
import ContactPersonCard from '../../components/ContactPersonCard';
import ProjectTitleSection from '../../components/Layout/ProjectTitleSection';
import Image from 'next/image';
import Textbox from '../../components/Textbox';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const AktivWerden = () => {
  return (
    <>
      <NavBar />
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        {/* <ProjectTitleSection image='/images/Bild31.jpeg' imageStyle='top' title={`Aktiv werden`} /> */}
        {/* Content */}
        <Container>
          <section id='ehrenamt' className='pt-20 '>
            <Textbox
              section={'Engagiere dich ehrenamtlich'}
              slogan={'Ehrenamt'}
              styling={'w-full'}
              align={'left'}
            >
              <div className='mb-10 font-source leading-loose sm:mb-20 w-[80%]'>
                <p>
                  Du möchtest dich mit deinen Stärken und Interessen sinnvoll einbringen? Dann werde
                  Teil unseres Teams und unterstütze uns mit deinem ehrenamtlichen Engagement!
                </p>
                <br />
                <p>
                  Ob regelmäßig oder projektbezogen – bei uns findest du vielfältige Möglichkeiten,
                  dich aktiv zu beteiligen, neue Erfahrungen zu sammeln und gemeinsam mit anderen
                  etwas zu bewegen. Je nach deinen Stärken und Interessen können wir gemeinsam
                  schauen, wie du dich einbringen kannst.
                </p>
                <br />
                <br />
                <h2 className='text-2xl font-bold'>Was wir bieten:</h2>
                <br />
                <ul className='list-disc pl-5 text-left'>
                  <li className='mb-2 '>Ein herzliches Team, das auf Augenhöhe zusammenarbeitet</li>
                  <li className='mb-2'>Raum für eigene Ideen und Eigenverantwortung</li>
                  <li className='mb-2'>Austausch, Begleitung und ggf. Fortbildungsmöglichkeiten</li>
                </ul>
              </div>
            </Textbox>
            <div className={` flex flex-col justify-start w-full  items-start  `}>
              <div className='w-full  mb-10'>
                <h3 className='text-2xl font-bold mb-4'>Interesse geweckt?</h3>
                <p className='text-lg'>Unsere Ansprechpartnerin ist:</p>
              </div>
              <div className='flex flex-col sm:flex-row items-center bg-[rgba(255,255,255,0.3)] rounded-[30px] py-10 pl-10 pr-10 md:pr-20 shadow-[0_0_80px_rgba(0,0,0,0.05)] '>
                {/* Person Image */}
                <div className='rounded-full md:w-48 w-32 md:h-48 h-32'>
                  <Image
                    src={'/images/mitarbeiter/Marlene.png'}
                    className='rounded-full md:w-full w-32 md:h-full h-32 object-cover object-top'
                    alt='Contact Person'
                    width={100}
                    height={100}
                  />
                </div>
                {/* Details */}
                <div className='flex flex-col mt-10 sm:mt-0 sm:ml-10 md:ml-20'>
                  <div className='md:text-2xl text-lg font-medium text-center sm:text-left'>
                    Marlene Langenbucher
                  </div>
                  <div className='md:text-lg text-sm flex items-center pt-8 md:pt-5'>
                    <FontAwesomeIcon className='mr-6 text-xl md:text-2xl' icon={faPhone} />
                    <a href={`tel:+493068908697`} className='hover:underline'>
                      +49 3068908697
                    </a>
                  </div>
                  <div className='md:text-lg text-sm flex items-center pt-3 md:pt-3'>
                    <FontAwesomeIcon className='mr-6 text-xl md:text-2xl' icon={faEnvelope} />
                    <a href={`mailto:marlene.langenbucher@bund-fib.de`} className='hover:underline'>
                      marlene.langenbucher@bund-fib.de
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='praktikum' className='pt-20 '>
            <Textbox
              section={'Absolviere dein Pflichtpraktikum bei uns'}
              slogan={'Praktikum'}
              styling={'w-full'}
              align={'left'}
            >
              <div className='mb-10 font-source leading-loose sm:mb-20 w-[80%]'>
                <p>
                  Unser Fokus liegt auf der Durchführung von Bildungs- und Integrationsprojekten,
                  insbesondere in der Arbeit mit geflüchteten Kindern und Jugendlichen. Als junges
                  Unternehmen legen wir großen Wert auf eine offene, kreative Arbeitsatmosphäre und
                  bieten dir die Möglichkeit, dich aktiv einzubringen und eigenen Ideen umzusetzen.
                  In regelmäßigen Abständen bieten wir Pflichtpraktika für Studierende an (in der
                  Regel über sechs Monate, 20h pro Woche, meist ca. im März oder September startend)
                </p>
                <br />
                <br />
                <h2 className='text-2xl font-bold'>Das bringst du mit:</h2>
                <br />
                <ul className='list-disc pl-5 text-left'>
                  <li className='mb-2'>
                    Du bist immatrikuliert an einer Universität und befindest dich im Rahmen deines
                    Studiums (Sozialwissenschaften, Lehramt, Erziehungswissenschaften, Soziale
                    Arbeit o.ä.) auf der Suche nach einem Pflichtpraktikum
                  </li>
                  <li className='mb-2'>
                    Du hast sehr gute Deutschkenntnisse, weitere Sprachkenntnisse sind von Vorteil
                  </li>
                  <li className='mb-2'>
                    Du zeigst Eigenmotivation, Flexibilität und arbeitest gerne eigenverantwortlich.
                  </li>
                  <li className='mb-2'>
                    Erfahrung in der Arbeit mit gemeinnützigen Organisationen oder in der
                    Bildungsarbeit sind von Vorteil
                  </li>
                  <li className='mb-2'>
                    Du bringst Interesse an der Arbeit mit Kindern und Jugendlichen mit
                  </li>
                </ul>
                <br />
                <h2 className='text-2xl font-bold'>Was wir bieten:</h2>
                <br />
                <ul className='list-disc pl-5 text-left'>
                  <li className='mb-2'>
                    Ein kleines, junges Team und eine niedrige Hierarchie – wir arbeiten auf
                    Augenhöhe.
                  </li>
                  <li className='mb-2'>
                    Viel Raum für eigene Ideen und die Möglichkeit, eigene Projekte zu entwickeln.
                  </li>
                  <li className='mb-2'>
                    Ein Arbeitsumfeld, das dich sowohl fachlich als auch persönlich weiterbringt
                    (z.B. durch Workshops und Fortbildungen).
                  </li>
                  <li className='mb-2'>Arbeitshandy und Laptop zur Verfügung.</li>
                  <li className='mb-2'>
                    Flexible Arbeitszeiten und die Möglichkeit, teilweise im Homeoffice zu arbeiten
                  </li>
                  <li className='mb-2'>
                    Eine Praktikumsentschädigung von 556,00€ bei einem Umfang von 40h - bei weniger
                    Stunden pro Wochen anteilig.
                  </li>
                </ul>
              </div>
            </Textbox>
            <div className={` flex flex-col justify-start w-full  items-start  `}>
              <div className='w-full  mb-10'>
                <h3 className='text-2xl font-bold mb-4'>Interesse geweckt?</h3>
                <p className='text-lg'>Unsere Ansprechpartnerin ist:</p>
              </div>
              <div className='flex flex-col sm:flex-row items-center bg-[rgba(255,255,255,0.3)] rounded-[30px] py-10 pl-10 pr-10 md:pr-20 shadow-[0_0_80px_rgba(0,0,0,0.05)] '>
                {/* Person Image */}
                <div className='rounded-full md:w-48 w-32 md:h-48 h-32'>
                  <Image
                    src={'/images/mitarbeiter/Marlene.png'}
                    className='rounded-full md:w-full w-32 md:h-full h-32 object-cover object-top'
                    alt='Contact Person'
                    width={100}
                    height={100}
                  />
                </div>
                {/* Details */}
                <div className='flex flex-col mt-10 sm:mt-0 sm:ml-10 md:ml-20'>
                  <div className='md:text-2xl text-lg font-medium text-center sm:text-left'>
                    Marlene Langenbucher
                  </div>
                  <div className='md:text-lg text-sm flex items-center pt-8 md:pt-5'>
                    <FontAwesomeIcon className='mr-6 text-xl md:text-2xl' icon={faPhone} />
                    <a href={`tel:+493068908697`} className='hover:underline'>
                      +49 3068908697
                    </a>
                  </div>
                  <div className='md:text-lg text-sm flex items-center pt-3 md:pt-3'>
                    <FontAwesomeIcon className='mr-6 text-xl md:text-2xl' icon={faEnvelope} />
                    <a href={`mailto:marlene.langenbucher@bund-fib.de`} className='hover:underline'>
                      marlene.langenbucher@bund-fib.de
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='bundesfreiwilligendienst' className='pt-20 pb-32'>
            <Textbox
              section={'Mache ein Bundesfreiwilligendienst beim Bund-fiB'}
              slogan={'Bundesfreiwilligendienst'}
              styling={'w-full'}
              align={'left'}
            >
              <div className='mb-10 font-source leading-loose sm:mb-20 w-[80%]'>
                <p>
                  Du überlegst einen Bundesfreiwilligendienst zu machen? Du möchtest dich
                  engagieren, Praxiserfahrungen sammeln und neue Perspektiven gewinnen? Dann werde
                  Teil unseres Teams im Rahmen des Bundesfreiwilligendienstes!
                </p>
                <br />
                <p>
                  Bei uns kannst du eigene Ideen einbringen, Verantwortung übernehmen und dich
                  persönlich wie fachlich weiterentwickeln – sei es im pädagogischen Bereich, in der
                  Organisation oder bei kreativen Projekten. Wir sind eine offiziell anerkannte
                  Einsatzstelle im BFD und können dir viele spannende Einblicke in die gemeinnützige
                  Arbeit bieten
                </p>
                <br />
                <p>
                  Unser Schwerpunkt liegt auf der Umsetzung von Bildungs- und Integrationsprojekten,
                  besonders in der Arbeit mit geflüchteten Kindern und Jugendlichen. Wir sind ein
                  junges Unternehmen mit offener, kreativer Arbeitsatmosphäre.
                </p>
              </div>
            </Textbox>
            <div className={` flex flex-col justify-start w-full  items-start  `}>
              <div className='w-full  mb-10'>
                <h3 className='text-2xl font-bold mb-4'>Interesse geweckt?</h3>
                <p className='text-lg'>Unsere Ansprechpartner ist:</p>
              </div>
              <div className='flex flex-col sm:flex-row items-center bg-[rgba(255,255,255,0.3)] rounded-[30px] py-10 pl-10 pr-10 md:pr-20 shadow-[0_0_80px_rgba(0,0,0,0.05)] '>
                {/* Person Image */}
                <div className='rounded-full md:w-48 w-32 md:h-48 h-32'>
                  <Image
                    src={'/images/mitarbeiter/Mika.png'}
                    className='rounded-full md:w-full w-32 md:h-full h-32 object-cover object-top'
                    alt='Contact Person'
                    width={100}
                    height={100}
                  />
                </div>
                {/* Details */}
                <div className='flex flex-col mt-10 sm:mt-0 sm:ml-10 md:ml-20'>
                  <div className='md:text-2xl text-lg font-medium text-center sm:text-left'>
                    Mika Dombrowski
                  </div>
                  <div className='md:text-lg text-sm flex items-center pt-8 md:pt-5'>
                    <FontAwesomeIcon className='mr-6 text-xl md:text-2xl' icon={faPhone} />
                    <a href={`tel:+4915560572448`} className='hover:underline'>
                      +49 15560 572448
                    </a>
                  </div>
                  <div className='md:text-lg text-sm flex items-center pt-3 md:pt-3'>
                    <FontAwesomeIcon className='mr-6 text-xl md:text-2xl' icon={faEnvelope} />
                    <a href={`mailto:mika.dombrowski@bund-fib.de`} className='hover:underline'>
                      mika.dombrowski@bund-fib.de
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default AktivWerden;
