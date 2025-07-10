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
  image: '/images/mitarbeiter/Marlene.png',
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
          <section className='w-full flex flex-col items-center pb-20'>
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
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Berufsvorbereitung;
