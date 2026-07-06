import Image from 'next/image';

/**
 * Stacked, tilted photos of the founders/Gesellschafter, used in the
 * homepage team section. A previous interactive "dot buttons" overlay was
 * removed — see git history if it should ever come back.
 */
const Gruender = ({ animation }) => {
  return (
    <div className='w-full sm:w-[52.5%]'>
      <div data-aos={animation} className='relative sm:mt-20 sm:w-full lg:mt-0'>
        {/* Stacked photos effect */}
        <div className='relative h-96'>
          {/* First image (bottom) */}
          <div className='absolute -top-20 h-96 w-full rotate-[-3deg] overflow-hidden rounded-xl'>
            <Image
              src='/images/GesellschafterArbeiten.jpg'
              alt='Gesellschafter'
              width={1000}
              height={1000}
              className='h-full w-full scale-110 rounded-xl bg-black object-cover object-top'
            />
          </div>
          {/* Second image (top) */}
          <div className='absolute top-52 md:left-8 h-96 w-full rotate-6 overflow-hidden rounded-xl shadow-xl'>
            <Image
              src='/images/Gesellschafter.jpg'
              alt='Gesellschafter'
              width={1000}
              height={1000}
              className='h-full w-full scale-110 rounded-xl bg-black object-cover object-top'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gruender;
