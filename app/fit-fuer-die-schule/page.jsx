'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../components/Layout/NavBar';
import Footer from '../../components/Layout/Footer';
import Container from '../../components/Container';
import ContactPersonCard from '../../components/ContactPersonCard';
import ProjectTitleSection from '../../components/Layout/ProjectTitleSection';
import Image from 'next/image';

const FitFuerDieSchule = () => {
  return (
    <>
      <NavBar />
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        <ProjectTitleSection
          image='/images/fit-fuer-die-schule.jpeg'
          title={`Fit für die Schule plus Berliner Ferienschulen`}
        />
        {/* Content */}
        <Container>
          <h3 className='text-2xl pb-20 pt-28 font-bold'>Sprachförderung für einen guten Start</h3>
          <p className='text-lg pb-20'>
            Viele geflüchtete Kinder und Jugendliche müssen in Berlin lange auf einen Schulplatz
            warten – und damit auch auf die Möglichkeit, Deutsch zu lernen. Genau hier setzt das
            Programm "Fit für die Schule" an: In Lerngruppen können Kinder und Jugendliche
            unabhängig vom Regelunterricht ihre Sprachkenntnisse auf- und ausbauen.
          </p>

          <p className='text-lg pb-20'>
            Doch es geht um mehr als nur die Sprache. Die jungen Teilnehmenden sollen sich in ihrer
            neuen Umgebung wohlfühlen, Vertrauen fassen und mit Spaß lernen. Eine familiäre
            Atmosphäre und gemeinschaftliche Aktivitäten fördern nicht nur die Sprachentwicklung,
            sondern auch das Ankommen in der neuen Heimat. Unsere Arbeit begleitet die Kinder durch
            einen abwechslungsreichen Lernalltag – vom spielerischen Unterricht bis hin zu
            alltäglichen Situationen wie dem gemeinsamen Frühstück. Denn Sprache lernt man nicht nur
            aus Büchern, sondern auch im echten Leben.
          </p>

          <p className='text-lg pb-20'>
            Zusätzlich bieten wir ebenfalls das Programm "Berliner Ferienschulen" an, dass sowohl
            Kinder und Jugendliche ohne Schulplatz als auch Kindern und Jugendlichen, die bereits in
            Willkommensklassen sind, ein Ferienangebot schafft. Spielerisch wird das Deutsch lernen
            mit Ausflügen und Kreativworkshops verbunden, um auch in den Ferien das
            Selbstbewusstsein zu stärken und den Sozialraum erfahrbar zu machen.
          </p>
        </Container>
        {/* Image Gallery */}
        <Container>
          <div className='relative h-[600px] w-full flex justify-center items-center mt-20 md:mt-40 mb-10 md:mb-20'>
            <div className='grid grid-cols-2 gap-8 relative'>
              {/* Top Left Image */}
              <div className='relative transform rotate-[-5deg] hover:z-10 transition-all duration-300 '>
                <Image
                  src='/fit-fuer-die-schule/Bild6.jpg'
                  width={400}
                  height={300}
                  alt='Gallery Image 1'
                  className=' shadow-xl object-cover w-full h-[325px]'
                />
              </div>

              {/* Top Right Image */}
              <div className='relative transform rotate-[3deg] hover:z-10 transition-all duration-300 '>
                <Image
                  src='/fit-fuer-die-schule/Bild7.jpg'
                  width={400}
                  height={300}
                  alt='Gallery Image 2'
                  className=' shadow-xl object-cover w-full h-[325px]'
                />
              </div>

              {/* Bottom Left Image */}
              <div className='relative transform rotate-[4deg] hover:z-10 transition-all duration-300 '>
                <Image
                  src='/fit-fuer-die-schule/Bild8.jpg'
                  width={400}
                  height={300}
                  alt='Gallery Image 3'
                  className=' shadow-xl object-cover w-full h-[325px]'
                />
              </div>

              {/* Bottom Right Image */}
              <div className='relative transform rotate-[-3deg] hover:z-10 transition-all duration-300 '>
                <Image
                  src='/fit-fuer-die-schule/Bild9.jpg'
                  width={400}
                  height={300}
                  alt='Gallery Image 4'
                  className=' shadow-xl object-cover w-full h-[325px]'
                />
              </div>
            </div>
          </div>
        </Container>
        {/* Contact Person Card + Downloads */}
        <Container>
          <div className='flex justify-start flex-col lg:flex-row'>
            <ContactPersonCard
              person={{
                image: '/images/mitarbeiter/shabnaz_ansprechpartner.jpeg',
                name: 'Schabnaz Khadem Saba',
                phone: '+49 176 11842231',
                email: 'schabnaz.saba@bund-fib.de ',
              }}
              project='für das Projekt "Fit für die Schule" ist'
              className='!pb-20'
            />
            <div className='flex flex-col lg:pt-32'>
              <h3 className='text-2xl pb-20 pt-10 font-bold'>Downloads</h3>
              <div className='flex gap-14 pt-14 items-start flex-wrap pb-20'>
                <a
                  href='/Anmeldebogen.pdf'
                  target='_blank'
                  className='flex flex-col items-center justify-center text-center text-xs text-black sm:text-xs'
                >
                  <FontAwesomeIcon className='text-4xl pb-2  text-black' icon={faFilePdf} />
                  Anmeldebogen
                </a>

                <a
                  href='/familien_flyer.pdf'
                  target='_blank'
                  className='flex flex-col items-center justify-center text-center text-xs text-black sm:text-xs'
                >
                  <FontAwesomeIcon className='text-4xl pb-2  text-black' icon={faFilePdf} />
                  Flyer in <br /> unterschiedlichen <br /> Sprachen
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default FitFuerDieSchule;
