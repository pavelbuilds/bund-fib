import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Container from '../Container';
import Textbox from '../Textbox';
import Link from 'next/link';
import Button from '../Button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ProjektUebersicht = () => {
  const [showLocations, setShowLocations] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const router = useRouter();

  return (
    <section
      id='Leistungsübersicht'
      className='relative bg-lightYellow pb-[650px] pt-20 sm:pb-28 sm:pt-32 lg:pb-10'
    >
      <Container styling={'pb-40 flex lg:flex-row flex-col lg:items-center lg:justify-between'}>
        {/* Textabschnitt */}
        <Textbox
          section={'Projektübersicht'}
          slogan={'Unsere Projektpalette im Überblick'}
          align={'left'}
          styling={'lg:w-1/3'}
        >
          {/* Text */}
          <div className='mb-10 font-source leading-tight'>
            Schulische Förderprogramme im Berliner Kiez, Bildungs- und Integrationsprojekte mit
            geflüchteten Familien, Einzel- und Gruppennachhilfe in Berlin, Hannover und Leipzig und
            Projekte mit internationalen Partner:innen auf europäischer Ebene.
          </div>
        </Textbox>
        {/* Übersichtskarten */}
        <div className='relative z-10 flex h-[780px] w-full flex-col items-start justify-between bg-purple-500 bg-opacity-0 sm:flex-row sm:flex-wrap lg:w-[60%]'>
          {/* Lernförderung Karte*/}
          <div
            data-aos='fade-up'
            className='w-full rounded-2xl bg-white shadow-2xl transition-all sm:w-[45%] lg:hover:scale-[102%]'
          >
            <Image
              className='h-48 w-full rounded-t-3xl object-cover brightness-[0.6]'
              src='/images/schule.webp'
              width={200}
              height={100}
              alt='Schule'
            />
            <div className='mx-7 mt-12 font-poppins text-xl lg:mt-7'>Lernförderung</div>
            {!showLocations ? (
              <>
                <div className='mx-7 mt-8 font-source text-sm lg:mt-5'>
                  Wir führen an Schulen und in privaten Haushalten Lernförderung durch und fördern
                  Schülerinnen und Schüler individuell und auf Augenhöhe, um Wissenslücken zu
                  schließen und Lernziele zu erreichen.
                </div>
                <div
                  className='float-right mt-10 flex rounded-tl-2xl rounded-br-2xl bg-primary px-4 py-2 text-sm font-semibold text-white lg:mt-5 cursor-pointer'
                  onClick={() => setShowLocations(true)}
                >
                  mehr erfahren <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
                </div>
              </>
            ) : (
              <>
                <div className='mx-7 mt-8'>Bitte wähle einen Standort:</div>
                <div className='flex flex-col gap-2 w-full px-7 py-5'>
                  <Button click={() => router.push('/lernfoerderung-berlin')} cta='Berlin' />
                  <Button click={() => router.push('/lernfoerderung-hannover')} cta='Hannover' />
                  <Button click={() => router.push('/lernfoerderung-leipzig')} cta='Leipzig' />
                </div>
              </>
            )}
          </div>

          {/* Fit für die Schule */}
          <div
            data-aos='fade-up'
            className='mt-16 rounded-2xl bg-white shadow-2xl transition-all sm:-mt-10 sm:w-[45%] lg:mt-20 lg:hover:scale-[102%]'
          >
            <Image
              className='h-48 w-full rounded-t-3xl object-cover brightness-[0.6]'
              src='/images/fit-fuer-die-schule.jpeg'
              width={200}
              height={100}
              alt='Privatunterricht'
            />
            {/* <img className='rounded-t-3xl brightness-[0.6]' src='/images/privat.webp' alt='' /> */}
            <div className='mx-7 mt-12 font-poppins text-xl lg:mt-7'>Fit für die Schule</div>
            <div className='mx-7 mt-8 font-source text-sm lg:mt-5'>
              Viele geflüchtete Kinder und Jugendliche müssen in Berlin lange auf einen Schulplatz
              nach ihrer Ankunft in der Stadt warten – und damit auch auf die Möglichkeit, Deutsch
              zu lernen. Genau hier setzt das Programm <b>&quot;Fit für die Schule&quot;</b> an.
            </div>
            <Link href='/fit-fuer-die-schule'>
              <div className='float-right mt-10 flex rounded-tl-2xl rounded-br-2xl bg-primary px-4 py-2 text-sm font-semibold text-white lg:mt-5'>
                mehr erfahren <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
              </div>
            </Link>
          </div>

          {/* Bildungsprojekte */}
          <div
            data-aos='fade-up'
            className='mt-16 rounded-2xl bg-white shadow-2xl transition-all sm:w-[45%] lg:-mt-10 lg:hover:scale-[102%]'
          >
            <Image
              className='h-48 w-full rounded-t-3xl object-cover brightness-[0.6]'
              src='/images/projekte.webp'
              width={200}
              height={100}
              alt='Bildungsprojekte'
            />

            <div className='mx-7 mt-12 font-poppins text-xl lg:mt-7'>Bildungsprojekte</div>
            {!showProjects ? (
              <>
                <div className='mx-7 mt-8 font-source text-sm lg:mt-5'>
                  Mit nationalen und internationalen Partner:innen führen wir unterschiedliche
                  Bildungsprojekte für Kinder und Jugendliche durch, die lokal greifen und
                  Bildungslücken schließen.
                </div>
                <div
                  className='float-right mt-10 flex rounded-tl-2xl rounded-br-2xl bg-primary px-4 py-2 text-sm font-semibold text-white lg:mt-5 cursor-pointer'
                  onClick={() => setShowProjects(true)}
                >
                  mehr erfahren <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
                </div>
              </>
            ) : (
              <>
                <div className='mx-7 mt-8'>Bitte wähle ein Projekt:</div>
                <div className='flex flex-col gap-2 w-full px-7 py-5'>
                  <Button click={() => router.push('/eduai')} cta='EduAid' />
                  <Button click={() => router.push('/gemeinsam-handeln')} cta='Gemeinsam Handeln' />
                  <Button
                    click={() => router.push('/ferienschule-fuer-integrative-bildung')}
                    cta='Ferienschule'
                  />
                </div>
              </>
            )}
          </div>
          {/* Bildungsevents*/}
          <div
            data-aos='fade-up'
            className='mt-16 rounded-2xl bg-white shadow-2xl transition-all sm:mt-10 sm:w-[45%] lg:mt-10 lg:hover:scale-[102%]'
          >
            <Image
              className='h-48 w-full rounded-t-3xl object-cover brightness-[0.6]'
              src='/images/bildungs-events.jpeg'
              width={200}
              height={100}
              alt='Privatunterricht'
            />
            {/* <img className='rounded-t-3xl brightness-[0.6]' src='/images/privat.webp' alt='' /> */}
            <div className='mx-7 mt-12 font-poppins text-xl lg:mt-7'>Bildungsevents</div>
            <div className='mx-7 mt-8 font-source text-sm lg:mt-5'>
              In regelmäßigen Abständen veranstalten wir Bildungsevents und Feste, entweder um mit
              (angehenden) Pädagog:innen und Bildungsinteressierten gemeinsam Bildung weiter zu
              denken oder um transkulturelle sowie altersübergreifende Brücken zu bauen.
            </div>
            <Link href='/bildungsevents'>
              <div className='float-right mt-10 flex rounded-tl-2xl rounded-br-2xl bg-primary px-4 py-2 text-sm font-semibold text-white lg:mt-5'>
                mehr erfahren <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
              </div>
            </Link>
          </div>
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
  );
};

export default ProjektUebersicht;
