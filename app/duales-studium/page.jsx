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

const DualesStudium = () => {
  return (
    <>
      <NavBar />
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        <ProjectTitleSection
          image='/images/Bild32.jpeg'
          imageStyle='center'
          title={`Duales Studium`}
        />
        {/* Content */}
        <Container>
          <section className='pt-32 '>
            <div className='mb-10 font-source leading-loose sm:mb-20 w-[80%]'>
              <h2 className='text-lg font-bold'>Duales Studium bei uns - Theorie trifft Praxis</h2>

              <p>
                Du willst studieren und gleichzeitig praktische Erfahrungen sammeln? Dann starte
                dein duales Studium bei uns!
              </p>
              <p className='mb-10'>
                Wir bieten dir die Möglichkeit, dein Wissen direkt in der Praxis anzuwenden, eigene
                Projekte zu übernehmen und in einem engagierten Team mitzuwirken.{' '}
              </p>

              <h2 className='text-lg font-bold'>Was dich erwartet:</h2>

              <ul className='list-disc pl-5 mb-10'>
                <li className='mb-2'>
                  Ein abwechslungsreicher Arbeitsalltag in einem offenen, kreativen Umfeld
                </li>
                <li className='mb-2'>Enge Betreuung und Unterstützung während deines Studiums</li>
                <li className='mb-2'>Raum für Eigeninitiative und persönliche Weiterentwicklung</li>
                <li className='mb-2'>Flexible Arbeitszeiten und Arbeitsgerät (Laptop/ Handy)</li>
                <li className='mb-2'>Eine monatliche Vergütung.</li>
              </ul>

              <h2 className='text-lg font-bold'>Neugierig geworden?</h2>

              <p>
                Dann freuen wir uns auf deine Bewerbung oder deine Fragen – werde Teil unseres
                Teams!
              </p>
              <br />
              <br />
            </div>

            <div className={` flex flex-col justify-start w-full  items-start pb-32 `}>
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
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default DualesStudium;
