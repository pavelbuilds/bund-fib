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
import { faPhone, faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const contactPerson = {
  image: '/images/mitarbeiter/Bild27.jpg',
  name: 'Marlene Langenbucher de Olavarrieta',
  phone: '+49 3068908697',
  email: 'marlene.langenbucher@bund-fib.de ',
};

const Berufsvorbereitung = () => {
  const [kontaktieren, setKontaktieren] = useState(false);

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
          <section className='w-full flex flex-col items-center'>
            <Textbox
              animation={'fade-up'}
              section={''}
              slogan={'Zusatzqualifikationen für Auszubildende der Sozialen Berufe:'}
              align={'center'}
              styling={'w-[75%] mt-20'}
              devider={false}
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
                  sprachliche Kompetenzen zu vermitteln, sondern auch interkulturelle Sensibilität
                  zu entwickeln, um auf die Vielfalt der Schülerinnen und Schüler angemessen
                  einzugehen und ein förderliches Lernumfeld zu schaffen. Dies fördert nicht nur den
                  Lernprozess, sondern stärkt auch das gegenseitige Verständnis und die Akzeptanz
                  innerhalb der Lerngruppen.
                </div>
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
                  trägt zur Schaffung einer unterstützenden Umgebung bei, die sowohl den
                  Geflüchteten als auch den Auszubildenden zugutekommt und langfristig zur
                  erfolgreichen Integration beiträgt.
                </div>
              </div>
            </div>
          </section>
          <div className={`py-32  flex flex-col justify-start w-full  items-start  `}>
            <div className='w-full  mb-10'>
              <h3 className='text-2xl font-bold mb-4'>Interesse geweckt?</h3>
              <p className='text-lg'>Unsere Ansprechpartnerin ist:</p>
            </div>
            <div className='flex flex-col sm:flex-row items-center bg-[rgba(255,255,255,0.3)] rounded-[30px] py-10 pl-10 pr-10 md:pr-20 shadow-[0_0_80px_rgba(0,0,0,0.05)] '>
              {/* Person Image */}
              <div className='rounded-full md:w-48 w-32 md:h-48 h-32'>
                <Image
                  src={'/images/mitarbeiter/Bild27.jpg'}
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
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Berufsvorbereitung;
