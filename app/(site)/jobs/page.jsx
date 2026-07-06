import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Container from '@/components/Container';
import Textbox from '@/components/Textbox';
import JobsBooking from './components/JobsBooking';

export const metadata = {
  title: 'Jobs',
  description:
    'Honorartätigkeiten, Stellenausschreibungen und Initiativbewerbungen beim Bund für integrative Bildung in Berlin, Leipzig, Hannover und Magdeburg.',
};

// Currently published job advertisements (PDFs live in
// public/stellenausschreibungen/). Add or remove entries here.
const stellenausschreibungen = [
  {
    href: '/stellenausschreibungen/Staendige_Stellenausschreibung_Praktikant_in_Bund-fiB.pdf',
    label:
      'Ständige Stellenausschreibung: Pflichtpraktikum im Bereich Bildung und Soziale Arbeit am Standort Berlin (m/w/d)',
  },
];

const contactPerson = {
  image: '/images/mitarbeiter/Ben.png',
  name: 'Benedict Hepp',
  phone: '+49 176 84919977',
  email: 'benedict.hepp@bund-fib.de',
};

const Jobs = () => {
  return (
    <div className='bg-darkYellow pt-14'>
      <Container>
        {/* Honorartätigkeiten */}
        <section id='honorartaetigkeiten' className='relative bg-darkYellow mt-28'>
          <div data-aos='fade-up' className='relative z-10 mt-10 flex w-full flex-wrap '>
            {/* Bild - linke Seite */}
            <div className='hidden w-full sm:w-2/5 lg:block'>
              <Image
                className='hidden h-full w-full  rounded-tl-3xl rounded-bl-3xl object-cover shadow-2xl lg:block'
                src={'/images/Bild30.jpeg'}
                width={500}
                height={500}
                alt='Honorartätigkeiten beim Bund-fiB'
              />
            </div>
            {/* Text - rechte Seite */}
            <div className='mb-12 flex w-full flex-col items-start rounded-3xl bg-white py-20 px-10 shadow-2xl sm:mb-0 sm:px-14 lg:w-3/5 lg:items-start lg:rounded-3xl lg:rounded-tl-none lg:rounded-bl-none'>
              <div className='font-poppins text-base sm:text-lg'>Ich möchte mitmachen</div>
              <div className='mt-5 h-[5px] w-10 bg-primary'></div>
              {/* Slogan */}
              <div className='my-10 text-left font-berlin text-3xl sm:text-5xl leading-tight'>
                Honorartätigkeiten bei uns
              </div>
              {/* Beschreibung */}
              <div className='mb-10 text-left font-source leading-tight lg:text-left'>
                Wir organisieren langfristig angelegte Projekte und möchten Lebenswege zum Positiven
                verändern. Dafür schreiben wir regelmäßig Honorartätigkeiten im Bereich der
                Lernförderung und der Unterstützung geflüchteter Kinder und Jugendliche aus. Du
                kannst dich bei dem unten angegebenen Button für ein erstes Vorstellungsgespräch
                einbuchen.
                <br />
                <br />
                <br />
              </div>
              <JobsBooking />
            </div>
          </div>
        </section>

        {/* Jobs */}
        <section id='jobs' className='relative bg-darkYellow pt-32'>
          <div data-aos='fade-up' className='relative z-10 mt-10 flex w-full flex-wrap '>
            {/* Bild - linke Seite */}
            <div className='hidden w-full sm:w-2/5 lg:block'>
              <Image
                className='hidden h-full w-full  rounded-tl-3xl rounded-bl-3xl object-cover shadow-2xl lg:block'
                src={'/images/Bild28.jpg'}
                width={500}
                height={500}
                alt='Jobs beim Bund-fiB'
              />
            </div>
            {/* Text - rechte Seite */}
            <div className='mb-12 flex w-full flex-col items-start rounded-3xl bg-white py-20 px-10 shadow-2xl sm:mb-0 sm:px-14 lg:w-3/5 lg:items-start lg:rounded-3xl lg:rounded-tl-none lg:rounded-bl-none'>
              <div className='font-poppins text-base sm:text-lg'>Ich möchte mitmachen</div>
              <div className='mt-5 h-[5px] w-10 bg-primary'></div>
              {/* Slogan */}
              <div className='my-10 text-left font-berlin text-3xl sm:text-5xl leading-tight'>
                Jobs bei uns
              </div>
              {/* Beschreibung */}
              <div className='mb-5 text-left font-source leading-tight lg:text-left'>
                Wir organisieren langfristig angelegte Projekte und möchten Lebenswege zum Positiven
                verändern. In den Standorten Berlin, Leipzig und Hannover sorgen kleine Teams dafür,
                dass alles reibungslos läuft. Stellenausschreibungen, um unser Team zu erweitern
                findest du hier:
                <br />
                <br />
                <br />
              </div>
              <div>
                <div className='text-lg font-semibold text-primary mb-4'>
                  Aktuelle Stellenangebote:
                </div>
                <ul className='space-y-3'>
                  {stellenausschreibungen.map((stelle) => (
                    <li key={stelle.href} className='flex items-start'>
                      <span className='text-primary mr-2'>•</span>
                      <a
                        href={stelle.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-base underline cursor-pointer'
                      >
                        {stelle.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Initiativbewerbung */}
        <section id='initiativbewerbung' className='mt-32'>
          <Textbox
            animation={'fade-up'}
            section={'Ich möchte mitmachen'}
            slogan={'Initiativbewerbung'}
            styling={'w-full '}
            align={'left'}
          >
            <div className='mb-10 font-source leading-loose sm:mb-20 w-[80%]'>
              Wir nehmen gerne Initiativbewerbung von motivierten Menschen entgegen. Auch wenn im
              Moment keine Stelle frei ist, können wir schauen, ob vielleicht trotzdem eine
              Zusammenarbeit möglich ist. Sende deine Unterlagen (Lebenslauf und ein Schreiben,
              warum du dich initiativ bewirbst) an unsere Ansprechperson.
            </div>
          </Textbox>
          {/* Contact Person Card */}
          <div className={` flex flex-col justify-start w-full  items-start pt-10 pb-32 `}>
            <div className='w-full  mb-20'>
              <h3 className='text-2xl font-bold mb-4'>Interesse geweckt?</h3>
              <p className='text-lg'>Unser Ansprechpartner ist:</p>
            </div>
            <div className='flex flex-col sm:flex-row items-center bg-[rgba(255,255,255,0.3)] rounded-[30px] py-10 pl-10 pr-10 md:pr-20 shadow-[0_0_80px_rgba(0,0,0,0.05)] '>
              {/* Person Image */}
              <div className='rounded-full md:w-48 w-32 md:h-48 h-32'>
                <Image
                  src={contactPerson.image}
                  className='rounded-full md:w-full w-32 md:h-full h-32 object-cover object-top'
                  alt={`Foto von ${contactPerson.name}`}
                  width={100}
                  height={100}
                />
              </div>
              {/* Details */}
              <div className='flex flex-col mt-10 sm:mt-0 sm:ml-10 md:ml-20'>
                <div className='md:text-2xl text-lg font-medium text-center sm:text-left'>
                  {contactPerson.name}
                </div>
                <div className='md:text-lg text-sm flex items-center pt-8 md:pt-5'>
                  <FontAwesomeIcon className='mr-6 text-xl md:text-2xl' icon={faPhone} />
                  <a href={`tel:${contactPerson.phone}`} className='hover:underline'>
                    {contactPerson.phone}
                  </a>
                </div>
                <div className='md:text-lg text-sm flex items-center pt-3 md:pt-3'>
                  <FontAwesomeIcon className='mr-6 text-xl md:text-2xl' icon={faEnvelope} />
                  <a href={`mailto:${contactPerson.email}`} className='hover:underline'>
                    {contactPerson.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Jobs;
