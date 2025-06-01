import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactPersonCard = ({ person, project, className = '' }) => {
  return (
    <div className={`${className} flex flex-col justify-start w-full items-start pt-20 pb-32 `}>
      {/* Line */}
      <div className='w-10 h-[5px] bg-primary mb-20'></div>
      <div className='w-full  mb-20'>
        <h3 className='text-2xl font-bold mb-4'>Interesse geweckt?</h3>
        <p className='text-lg'>Unser Ansprechpartner {project ? project : ''}:</p>
      </div>
      <div className='flex w-full sm:w-auto flex-col sm:flex-row items-center bg-[rgba(255,255,255,0.3)] rounded-[30px] py-10 pl-10 pr-10 md:pr-20 shadow-[0_0_80px_rgba(0,0,0,0.05)] '>
        {/* Person Image */}
        <div className='rounded-full md:w-48 w-32 md:h-48 h-32'>
          <Image
            src={person.image}
            className='rounded-full md:w-full w-32 md:h-full h-32 object-cover object-top'
            alt='Contact Person'
            width={100}
            height={100}
          />
        </div>
        {/* Details */}
        <div className='flex flex-col mt-10 sm:mt-0 sm:ml-10 md:ml-20'>
          <div className='md:text-2xl text-lg font-medium text-center sm:text-left'>
            {person.name}
          </div>
          <div className='md:text-lg text-sm flex items-center pt-8 md:pt-5'>
            <FontAwesomeIcon className='mr-6 text-xl md:text-2xl' icon={faPhone} />
            <a href={`tel:${person.phone}`} className='hover:underline'>
              {person.phone}
            </a>
          </div>
          <div className='md:text-lg text-sm flex items-center pt-3 md:pt-3'>
            <FontAwesomeIcon className='mr-6 text-xl md:text-2xl' icon={faEnvelope} />
            <a href={`mailto:${person.email}`} className='hover:underline'>
              {person.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPersonCard;
