import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

/** White content card with cover image, used on the project pages. */
const Card = ({ imageSrc, title, subtitle, text, link = undefined }) => {
  return (
    <div data-aos='fade-up' className='rounded-3xl bg-white shadow-2xl  sm:w-[45%] relative'>
      <Image
        className='h-64 w-full rounded-t-3xl object-cover brightness-[0.6]'
        src={imageSrc}
        width={200}
        height={100}
        alt={title}
      />
      <div className='mx-7 font-poppins text-xl mt-10'>{title}</div>
      <div className='mx-7 font-poppins text-sm mt-2'>{subtitle}</div>
      <div className='mx-7 mt-10 font-source text-sm mb-20'>{text}</div>
      {link && (
        <Link
          href={link}
          className='absolute bottom-0 right-0 mt-10 flex rounded-tl-2xl rounded-br-2xl bg-primary px-4 py-2 text-sm font-semibold text-white'
        >
          mehr erfahren <FontAwesomeIcon className='ml-2 w-3' icon={faArrowRight} />
        </Link>
      )}
    </div>
  );
};

export default Card;
