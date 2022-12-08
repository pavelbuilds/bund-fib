import { useState } from 'react';

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Gründer = ({ animation }) => {
  const [gründer, setGründer] = useState(
    `Wir sind langjährige Freunde, entdeckungsfreudig und in jeder Hinsicht stehen wir für Chancengleichheit und Bildungsteilhabe. Uns eint der Wunsch, mit dem Bund-fiB Kinder und Jugendliche über den Tellerrand blicken zu lassen und ihnen ihre Talente vor Augen zu führen.`
  );

  return (
    <div className='sm:w-[52.5%] w-full'>
      <div data-aos={animation} className='sm:w-full sm:mt-20 lg:mt-0 relative'>
        {/* Bild */}
        <div className='h-96 bg-black bg-[url(/images/founders.jpg)] bg-cover sm:[background-position-y:-100px] [background-position-y:-00px]  rounded-xl'></div>
        {/* Basel Button */}
        <div
          onClick={() => {
            setGründer(`Das ist Basel Seido und das ist eine kurze Beschreibung über ihn`);
          }}
          className='hover:scale-110 transition-all cursor-pointer bg-[rgba(0,0,0,0.7)] py-2 px-3 absolute text-white sm:text-[10px] text-[14px] rounded-md flex items-center sm:top-[60%] top-[80%] left-[5%]'
        >
          Basel Seido
          <FontAwesomeIcon className='w-3 ml-2' icon={faCircleInfo} />
        </div>
        {/* Lars Button */}
        <div
          onClick={() => {
            setGründer(`Das ist Lars Mikeler und das ist eine kurze Beschreibung über ihn`);
          }}
          className='hover:scale-110 transition-all cursor-pointer bg-[rgba(0,0,0,0.7)] py-2 px-3 absolute text-white sm:text-[10px] text-[14px] rounded-md flex items-center sm:top-[45%] top-[50%] left-[40%]'
        >
          Lars Mikeler
          <FontAwesomeIcon className='w-3 ml-2' icon={faCircleInfo} />
        </div>
        {/* Sören Button */}
        <div
          onClick={() => {
            setGründer(`Das ist Sören Dübel und das ist eine kurze Beschreibung über ihn`);
          }}
          className='hover:scale-110 transition-all cursor-pointer bg-[rgba(0,0,0,0.7)] py-2 px-3 absolute text-white sm:text-[10px] text-[14px] rounded-md flex items-center sm:top-[65%] sm:left-[75%] top-[70%] left-[60%]'
        >
          Sören Dübel
          <FontAwesomeIcon className='w-3 ml-2' icon={faCircleInfo} />
        </div>
      </div>
      {/* Text */}
      <div className='sm:text-sm text-xl font-source mt-3'>
        <b>Die Gründer: </b>
        {gründer}
      </div>
    </div>
  );
};

export default Gründer;
