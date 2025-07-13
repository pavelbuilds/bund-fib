import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '../src/store';

const ContactPersonCard = ({ person, project, address = undefined, className = '' }) => {
  const { cookiesAccepted, setShowCookieConsent } = useStore();

  return (
    <div className={`${className} flex flex-col justify-start w-full items-start pt-20 pb-32 `}>
      {/* Line */}
      <div className='w-10 h-[5px] bg-primary mb-20'></div>
      <div className='w-full  mb-20'>
        <h3 className='text-2xl font-bold mb-4'>Interesse geweckt?</h3>
        <p className='text-lg'>Unser Ansprechpartner {project ? project : ''}:</p>
      </div>

      {/* Two-column layout: Contact Info and Map */}
      <div className='flex w-full flex-col lg:flex-row gap-6'>
        {/* Contact Info Section */}
        <div className={`${address ? 'lg:w-1/2' : 'lg:w-2/3'} w-full`}>
          <div className='flex w-full sm:w-auto flex-col sm:flex-row items-center bg-[rgba(255,255,255,0.3)] rounded-[30px] py-10 px-10 shadow-[0_0_80px_rgba(0,0,0,0.05)] h-[300px] justify-center'>
            {/* Person Image */}
            <div className='w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0'>
              <Image
                src={person.image}
                className='w-full h-full object-cover object-top'
                alt='Contact Person'
                width={128}
                height={128}
              />
            </div>
            {/* Details */}
            <div className='flex flex-col mt-10 sm:mt-0 sm:ml-8 md:ml-12'>
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

        {/* Map Section */}
        {address && (
          <div className='lg:w-1/2 w-full'>
            {cookiesAccepted ? (
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(address)}`}
                width='100%'
                height='300'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='rounded-[30px] shadow-[0_0_80px_rgba(0,0,0,0.05)]'
              ></iframe>
            ) : (
              <div className='h-[300px] p-10 bg-gray-500 rounded-[30px] flex justify-center items-center shadow-[0_0_80px_rgba(0,0,0,0.05)]'>
                <p className='text-center'>
                  Bitte akzeptieren Sie die Verwendung von Cookies, um die Google Maps-Karte
                  anzuzeigen.{' '}
                  <span
                    className='underline cursor-pointer'
                    onClick={() => setShowCookieConsent(true)}
                  >
                    hier clicken um Cookie-Einstellungen zu ändern
                  </span>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPersonCard;
