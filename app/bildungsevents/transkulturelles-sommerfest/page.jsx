'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../../components/Layout/NavBar';
import Footer from '../../../components/Layout/Footer';
import Container from '../../../components/Container';
import ContactPersonCard from '../../../components/ContactPersonCard';
import ProjectTitleSection from '../../../components/Layout/ProjectTitleSection';
import Image from 'next/image';

const TranskulturellesSommerfest = () => {
  return (
    <>
      <NavBar />
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        <ProjectTitleSection
          title='Transkulturelles Sommerfest'
          subtitle='Sommerspaß in der Oase Berlin'
          image='/images/Sommerfest.jpg'
        />
        {/* Content */}
        <Container>
          <p className='text-lg pb-32  pt-32'>
            In unserer Arbeit in den Standorten Leipzig und Hannover begegnen wir jeden Sommer der
            langen Ferienzeit mit kleineren oder größeren Ferienangeboten. Von Ausflügen, Kreativ,-
            und Sportangeboten bis hin zu Workshops arbeiten wir eng mit den
            Gemeinschaftsunterkünften zusammen, um die sechs Wochen zu überbrücken und den
            Teilnehmenden Programm zu bieten.
          </p>
        </Container>
        {/* Image Gallery */}
        <Container>
          <div className='relative w-full flex justify-center items-center pb-32'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative'>
              {/* Top Left Image */}
              <div className='relative transform rotate-[-5deg]'>
                <Image
                  src='/images/Bild21.jpg'
                  width={400}
                  height={300}
                  alt='Gallery Image 1'
                  className='shadow-xl object-cover w-full h-[325px]'
                />
              </div>

              {/* Top Middle Image */}
              <div className='relative transform rotate-[3deg]'>
                <Image
                  src='/images/Sommerfest.jpg'
                  width={400}
                  height={300}
                  alt='Gallery Image 2'
                  className='shadow-xl object-cover w-full h-[325px]'
                />
              </div>

              {/* Top Right Image */}
              <div className='relative transform rotate-[-2deg]'>
                <Image
                  src='/images/Bild23.jpg'
                  width={400}
                  height={300}
                  alt='Gallery Image 3'
                  className='shadow-xl object-cover w-full h-[325px]'
                />
              </div>

              {/* Bottom Left Image */}
              <div className='relative transform rotate-[4deg]'>
                <Image
                  src='/images/Bild24.jpeg'
                  width={400}
                  height={300}
                  alt='Gallery Image 4'
                  className='shadow-xl object-cover w-full h-[325px]'
                />
              </div>

              {/* Bottom Middle Image */}
              <div className='relative transform rotate-[-3deg]'>
                <Image
                  src='/images/Bild25.jpeg'
                  width={400}
                  height={300}
                  alt='Gallery Image 5'
                  className='shadow-xl object-cover w-full h-[325px]'
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default TranskulturellesSommerfest;
