'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../components/Layout/NavBar';
import Footer from '../../components/Layout/Footer';
import Container from '../../components/Container';
import ContactPersonCard from '../../components/ContactPersonCard';
import ProjectTitleSection from '../../components/Layout/ProjectTitleSection';
import Image from 'next/image';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const FerienschuleFuerIntegrativeBildung = () => {
  return (
    <>
      <NavBar />
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        <ProjectTitleSection title={`Ferienschulen für integrative Bildung `} />
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
          <div className='relative  w-full flex justify-center items-center  pb-32'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative'>
              {/* Gallery Modal */}
              <div className='fixed inset-0 bg-black bg-opacity-80 z-50 hidden' id='galleryModal'>
                <div className='flex items-center justify-center h-full'>
                  <div className='relative'>
                    <button
                      className='absolute top-4 right-4 text-white text-2xl bg-black rounded-full w-8 h-8 flex items-center justify-center'
                      onClick={() =>
                        document.getElementById('galleryModal').classList.add('hidden')
                      }
                    >
                      <FontAwesomeIcon icon={faXmark} className='text-sm' />
                    </button>
                    <img
                      id='modalImage'
                      src={null}
                      alt='Gallery Preview'
                      className='max-h-[90vh] max-w-[90vw]'
                    />
                  </div>
                </div>
              </div>

              {/* Top Left Image */}
              <div
                className='relative transform rotate-[-5deg] hover:z-10 transition-all duration-300 cursor-pointer hover:scale-105  '
                onClick={() => {
                  document.getElementById('modalImage').src = '/ferienschule/Bild11.jpg';
                  document.getElementById('galleryModal').classList.remove('hidden');
                }}
              >
                <Image
                  src='/ferienschule/Bild11.jpg'
                  width={400}
                  height={300}
                  alt='Gallery Image 1'
                  className='shadow-xl object-cover w-full h-[325px]'
                />
              </div>

              {/* Top Middle Image */}
              <div
                className='relative transform rotate-[3deg] hover:z-10 transition-all duration-300 cursor-pointer hover:scale-105 '
                onClick={() => {
                  document.getElementById('modalImage').src = '/ferienschule/Bild12.jpg';
                  document.getElementById('galleryModal').classList.remove('hidden');
                }}
              >
                <Image
                  src='/ferienschule/Bild12.jpg'
                  width={400}
                  height={300}
                  alt='Gallery Image 2'
                  className='shadow-xl object-cover w-full h-[325px]'
                />
              </div>

              {/* Top Right Image */}
              <div
                className='relative transform rotate-[-2deg] hover:z-10 transition-all duration-300 cursor-pointer hover:scale-105  '
                onClick={() => {
                  document.getElementById('modalImage').src = '/ferienschule/Bild13.jpg';
                  document.getElementById('galleryModal').classList.remove('hidden');
                }}
              >
                <Image
                  src='/ferienschule/Bild13.jpg'
                  width={400}
                  height={300}
                  alt='Gallery Image 3'
                  className='shadow-xl object-cover w-full h-[325px]'
                />
              </div>

              {/* Bottom Left Image */}
              <div
                className='relative transform rotate-[4deg] hover:z-10 transition-all duration-300 cursor-pointer hover:scale-105 '
                onClick={() => {
                  document.getElementById('modalImage').src = '/ferienschule/Bild14.jpg';
                  document.getElementById('galleryModal').classList.remove('hidden');
                }}
              >
                <Image
                  src='/ferienschule/Bild14.jpg'
                  width={400}
                  height={300}
                  alt='Gallery Image 4'
                  className='shadow-xl object-cover w-full h-[325px]'
                />
              </div>

              {/* Bottom Middle Image */}
              <div
                className='relative transform rotate-[-3deg] hover:z-10 transition-all duration-300 cursor-pointer hover:scale-105  '
                onClick={() => {
                  document.getElementById('modalImage').src = '/ferienschule/Bild15.jpg';
                  document.getElementById('galleryModal').classList.remove('hidden');
                }}
              >
                <Image
                  src='/ferienschule/Bild15.jpg'
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

export default FerienschuleFuerIntegrativeBildung;
