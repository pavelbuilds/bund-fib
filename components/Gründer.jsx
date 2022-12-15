import { useState } from 'react';

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Gründer = ({ animation }) => {
  const [showBaselInfo, setShowBaselInfo] = useState(false);
  const [showLarsInfo, setLarsInfo] = useState(false);
  const [showSorenInfo, setSorenInfo] = useState(false);

  return (
    <div className='sm:w-[52.5%] w-full'>
      <div data-aos={animation} className='sm:w-full sm:mt-20 lg:mt-0 relative'>
        {/* Bild */}
        <div className='h-96 bg-black bg-[url(/images/founders.jpg)] bg-cover sm:[background-position-y:-100px] [background-position-y:-00px] rounded-xl'></div>
        {/* Basel Button */}
        <div
          onClick={() => {
            setShowBaselInfo(!showBaselInfo);
          }}
          className={`${
            showBaselInfo ? 'bg-[rgba(0,0,0,0.7)]' : ''
          } hover:scale-110 transition-all cursor-pointer py-2 px-4 absolute text-white sm:text-[10px] text-[14px] rounded-2xl flex items-center sm:top-[70%] top-[60%] left-[7%]`}
        >
          <FontAwesomeIcon className='w-8 text-primary' icon={faCircle} />
          {showBaselInfo && (
            <div className='ml-2'>
              <b>Basel</b>
              <br />
              Gründer & Geschäftsführer
            </div>
          )}
        </div>
        {/* Lars Button */}
        <div
          onClick={() => {
            setLarsInfo(!showLarsInfo);
          }}
          className={`${
            showLarsInfo ? 'bg-[rgba(0,0,0,0.7)]' : ''
          } transition-all hover:scale-110 cursor-pointer py-2 px-4 absolute text-white sm:text-[10px] text-[14px] rounded-2xl flex items-center sm:top-[55%] top-[45%] left-[35%]`}
        >
          <FontAwesomeIcon className='w-8 text-primary' icon={faCircle} />
          {showLarsInfo && (
            <div className='ml-2'>
              <b>Lars</b>
              <br />
              Gründer
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
          } transition-all hover:scale-110 cursor-pointer py-2 px-4 absolute text-white sm:text-[10px] text-[14px] rounded-2xl flex items-center sm:top-[65%] top-[50%] left-[70%]`}
        >
          <FontAwesomeIcon className='w-8 text-primary' icon={faCircle} />
          {showSorenInfo && (
            <div className='ml-2'>
              <b>Sören</b>
              <br />
              Gründer
            </div>
          )}
        </div>
      </div>
      {/* Text */}
      {/* <div className='sm:text-sm text-xl font-source mt-3'>
        <b>Die Gründer: </b>
        {gründer}
      </div> */}
    </div>
  );
};

export default Gründer;
