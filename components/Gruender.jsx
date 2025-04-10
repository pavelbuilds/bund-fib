import { useState } from 'react';
import Image from 'next/image';

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Gruender = ({ animation }) => {
  const [showBaselInfo, setShowBaselInfo] = useState(false);
  const [showLarsInfo, setLarsInfo] = useState(false);
  const [showMarleneInfo, setMarleneInfo] = useState(false);
  const [showSorenInfo, setSorenInfo] = useState(false);
  const [showBenedictInfo, setBenedictInfo] = useState(false);
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
          <div className='absolute top-52 left-8 h-96 w-full rotate-6 overflow-hidden rounded-xl shadow-xl'>
            <Image
              src='/images/Gesellschafter.jpg'
              alt='Gesellschafter'
              width={1000}
              height={1000}
              className='h-full w-full scale-110 rounded-xl bg-black object-cover object-top'
            />
          </div>
        </div>

        {/* Lars Button */}
        <div
          onClick={() => {
            setLarsInfo(!showLarsInfo);
          }}
          className={`${
            showLarsInfo ? 'bg-[rgba(0,0,0,0.7)]' : ''
          } absolute top-[75%] left-[25%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all hover:scale-110 sm:top-[85%] sm:text-[10px]`}
        >
          <FontAwesomeIcon className='w-8 text-primary' icon={faCircle} />
          {showLarsInfo && (
            <div className='ml-2'>
              <b>Lars Mikeler</b>
              <br />
              Gesellschafter und <br /> pädagogische Leitung
            </div>
          )}
        </div>
        {/* Benedict Button */}
        <div
          onClick={() => {
            setBenedictInfo(!showBenedictInfo);
          }}
          className={`${
            showBenedictInfo ? 'bg-[rgba(0,0,0,0.7)]' : ''
          } absolute top-[90%] left-[37%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all hover:scale-110 sm:top-[100%] sm:text-[10px]`}
        >
          <FontAwesomeIcon className='w-8 text-primary' icon={faCircle} />
          {showBenedictInfo && (
            <div className='ml-2'>
              <b>Benedict Hepp</b>
              <br />
              Gesellschafter und <br /> Standortleiter Hannover
            </div>
          )}
        </div>
        {/* Marlene Button */}
        <div
          onClick={() => {
            setMarleneInfo(!showMarleneInfo);
          }}
          className={`${
            showMarleneInfo ? 'bg-[rgba(0,0,0,0.7)]' : ''
          } absolute top-[75%] left-[58%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all hover:scale-110 sm:top-[85%] sm:text-[10px]`}
        >
          <FontAwesomeIcon className='w-8 text-primary' icon={faCircle} />
          {showMarleneInfo && (
            <div className='ml-2'>
              <b>Marlene Langenbucher de Olavarrieta</b>
              <br />
              Geschäftsführerin und Projektleiterin
            </div>
          )}
        </div>
        {/* Sören Button */}
        <div
          onClick={() => {
            setSorenInfo(!showSorenInfo);
          }}
          className={`${
            showSorenInfo ? 'bg-[rgba(0,0,0,0.7)]' : ''
          } absolute top-[105%] left-[73%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all hover:scale-110 sm:top-[100%] sm:text-[10px]`}
        >
          <FontAwesomeIcon className='w-8 text-primary' icon={faCircle} />
          {showSorenInfo && (
            <div className='ml-2'>
              <b>Sören Dübel</b>
              <br />
              Geschäftsführer und Projektleiter
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gruender;
