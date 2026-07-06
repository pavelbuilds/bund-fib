'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className='relative  w-full flex justify-center items-center  pb-32'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative'>
        {/* Gallery Modal */}
        {modalImage && (
          <div className='fixed inset-0 bg-black bg-opacity-80 z-50'>
            <div className='flex items-center justify-center h-full'>
              <div className='relative'>
                <button
                  className='absolute top-4 right-4 text-white text-2xl bg-black rounded-full w-8 h-8 flex items-center justify-center'
                  onClick={() => setModalImage(null)}
                >
                  <FontAwesomeIcon icon={faXmark} className='text-sm' />
                </button>
                <img src={modalImage} alt='Gallery Preview' className='max-h-[90vh] max-w-[90vw]' />
              </div>
            </div>
          </div>
        )}

        {/* Top Left Image */}
        <div
          className='relative transform rotate-[-5deg] hover:z-10 transition-all duration-300 cursor-pointer hover:scale-105  '
          onClick={() => setModalImage('/ferienschule/Bild11.jpg')}
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
          onClick={() => setModalImage('/ferienschule/Bild12.jpg')}
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
          onClick={() => setModalImage('/ferienschule/Bild13.jpg')}
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
          onClick={() => setModalImage('/ferienschule/Bild14.jpg')}
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
          onClick={() => setModalImage('/ferienschule/Bild15.jpg')}
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
  );
};

export default Gallery;
