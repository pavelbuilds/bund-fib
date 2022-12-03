import { useState } from 'react';

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Gründer = ({ animation }) => {
  const [gründer, setGründer] = useState(
    'Die drei Gründen Basen Seido, Lars Mikeler und Sören Dübel.'
  );

  return (
    <div
      data-aos={animation}
      className='flex flex-col lg:w-3/5 sm:w-full lg:ml-20 sm:mt-20 lg:mt-0 relative'
    >
      <div className='h-96 bg-black bg-[url(/images/founders.jpg)] bg-cover sm:[background-position-y:-100px] [background-position-y:-00px]  rounded-xl'></div>
      <div className='sm:text-lg text-xl font-source text-center mt-3'>{gründer}</div>
      <div
        onClick={() => {
          setGründer(`Das ist Basel Seido und das ist eine kurze Beschreibung über ihn`);
        }}
        className='hover:scale-110 transition-all cursor-pointer bg-[rgba(0,0,0,0.7)] py-2 px-3 absolute text-white sm:text-[10px] text-[14px] rounded-md flex items-center top-[75%] left-[5%]'
      >
        Basel Seido
        <FontAwesomeIcon className='w-3 ml-2' icon={faCircleInfo} />
      </div>
      <div
        onClick={() => {
          setGründer(`Das ist Lars Mikeler und das ist eine kurze Beschreibung über ihn`);
        }}
        className='hover:scale-110 transition-all cursor-pointer bg-[rgba(0,0,0,0.7)] py-2 px-3 absolute text-white sm:text-[10px] text-[14px] rounded-md flex items-center sm:top-[55%] top-[45%] left-[40%]'
      >
        Lars Mikeler
        <FontAwesomeIcon className='w-3 ml-2' icon={faCircleInfo} />
      </div>
      <div
        onClick={() => {
          setGründer(`Das ist Sören Dübel und das ist eine kurze Beschreibung über ihn`);
        }}
        className='hover:scale-110 transition-all cursor-pointer bg-[rgba(0,0,0,0.7)] py-2 px-3 absolute text-white sm:text-[10px] text-[14px] rounded-md flex items-center top-[65%] sm:left-[75%] left-[60%]'
      >
        Sören Dübel
        <FontAwesomeIcon className='w-3 ml-2' icon={faCircleInfo} />
      </div>
    </div>
  );
};

export default Gründer;
