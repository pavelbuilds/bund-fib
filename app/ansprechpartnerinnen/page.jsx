import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Container from '../../components/Container';
import Image from 'next/image';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ansprechpartnerinnen = [
  {
    name: 'Marlene Langenbucher de Olavarrieta',
    image: '/images/mitarbeiter/Marlene.png',
    role: 'Geschäftsführung, Projektleitung “Fit für die Schule” & Bewerbungen',
    phone: '+49 1575 8745856',
    email: 'marlene.langenbucher@bund-fib.de',
  },
  {
    name: 'Sören Dübel',
    image: '/images/mitarbeiter/Soeren.png',
    role: 'Geschäftsführung, Projektleitung “Fit für die Schule” & Lernförderung',
    phone: '+49 15758756855',
    email: 'soeren.duebel@bund-fib.de',
  },
  {
    name: 'Lars Mikeler',
    image: '/images/mitarbeiter/Lars.png',
    role: 'Pädagogische Leitung',
    phone: '+49 160 95736116',
    email: 'lars.mikeler@bund-fib.de',
  },
  {
    name: 'Benedict Hepp',
    image: '/images/mitarbeiter/Ben.png',
    role: 'Standortleiter Hannover & Lernförderung Hannover',
    phone: '+49 176 84919977',
    email: 'benedict.hepp@bund-fib.de',
  },
  {
    name: 'Nathalie Thorleuchter',
    image: '/images/mitarbeiter/Nathalie.png',
    role: 'Standortleiterin Leipzig & Lernförderung Leipzig',
    phone: '+49 176 11842230',
    email: 'nathalie.thorleuchter@bund-fib.de',
  },
  {
    name: 'Sarah Hennig',
    image: '/images/mitarbeiter/Sarah.png',
    role: 'Standortleiterin Leipzig & Lernförderung Leipzig',
    phone: '+49 155 60421249',
    email: 'sarah.hennig@bund-fib.de',
  },
  {
    name: 'Schabnaz Khadem Saba',
    image: '/images/mitarbeiter/Schabnaz.png',
    role: 'Projekt: “Fit für die Schule”',
    phone: '+49 176 11842231',
    email: 'schabnaz.saba@bund-fiB.de',
  },
  {
    name: 'Mika Dombrowski',
    image: '/images/mitarbeiter/Mika.png',
    role: 'Events, Öffentlichkeitsarbeit & Bundesfreiwilligendienst',
    phone: '+49 15560 572448',
    email: 'mika.dombrowski@bund-fib.de',
  },
];

export default function Ansprechpartnerinnen() {
  return (
    <main className='fixed z-50 h-screen min-h-[600px] w-screen overflow-scroll bg-darkYellow pt-24 transition-all duration-700 ease-out sm:pt-36 lg:pt-24'>
      {/* Container */}
      <Container styling={'pt-5'}>
        <div className='text-center font-berlin text-4xl mb-32'>Unsere Ansprechpartner:innen</div>
        <div className='flex flex-wrap items-center justify-evenly overflow-hidden mb-10 ' />
        {ansprechpartnerinnen.map((ansprechpartnerin, index) => (
          <div
            key={index}
            className='flex mb-20 flex-col sm:flex-row items-center bg-[rgba(255,255,255,0.3)] rounded-[30px] py-10 pl-10 pr-10 md:pr-20 shadow-[0_0_80px_rgba(0,0,0,0.05)] '
          >
            {/* Person Image */}
            <div className='rounded-full md:w-48 w-32 md:h-48 h-32'>
              <Image
                src={ansprechpartnerin.image}
                className='rounded-full md:w-full w-32 md:h-full h-32 object-cover object-top'
                alt='Contact Person'
                width={100}
                height={100}
              />
            </div>
            {/* Details */}
            <div className='flex flex-col items-center sm:items-start mt-10 sm:mt-0 sm:ml-10 md:ml-20'>
              <div className='md:text-2xl text-lg font-medium text-center sm:text-left'>
                {ansprechpartnerin.name}
              </div>
              <div className='md:text-xl text-lg font-light text-center sm:text-left'>
                {ansprechpartnerin.role}
              </div>
              {/* Line */}
              <div className='h-[5px] w-10 bg-primary my-8 '></div>
              <div className='md:text-lg text-lg flex items-center '>
                <FontAwesomeIcon className='mr-6  w-6 hidden sm:block' icon={faPhone} />
                <a href={`tel:${ansprechpartnerin.phone}`} className='hover:underline'>
                  {ansprechpartnerin.phone}
                </a>
              </div>
              <div className='md:text-lg text-lg flex items-center pt-3 md:pt-3'>
                <FontAwesomeIcon className='mr-6  w-6 hidden sm:block' icon={faEnvelope} />
                <a href={`mailto:${ansprechpartnerin.email}`} className='hover:underline'>
                  {ansprechpartnerin.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </main>
  );
}
