import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Container from '@/components/Container';
import FlyerFolder from './components/FlyerFolder';

export const metadata = {
  title: 'Material-fiB',
  description:
    'Downloads des Bund für integrative Bildung: Anmeldebögen, fiB-Heft, Kinderschutzkonzept, Verhaltensampel und Flyer in verschiedenen Sprachen.',
};

// Downloadable documents (PDFs live in public/). Add or remove entries here.
const documents = [
  { href: '/zusatzbogen.pdf', label: <>Zusatzbogen für <br /> Lernförderung <br /> <br /></> },
  { href: '/Heft-fiB.pdf', label: <>Unser fiB-Heft – <br /> Das Lerntagebuch <br /> <br /></> },
  {
    href: '/Bund-fiB_Bericht_Bildungskonferenz.pdf',
    label: <>Publikation <br /> Bildungskonferenz <br /> <br /></>,
  },
  {
    href: '/Kinderschutz-Konzept_Bund-fiB.pdf',
    label: <>Kinderschutzkonzept <br /> <br /> <br /></>,
  },
  { href: '/Bund-fiB_Verhaltensampel.pdf', label: <>Verhaltensampel <br /> <br /> <br /></> },
];

export default function Material() {
  return (
    <main className='fixed z-50 h-screen min-h-[600px] w-screen overflow-scroll bg-darkYellow transition-all duration-700 ease-out '>
      {/* Container */}
      <section id='Downloads' className='bg-darkYellow pt-20'>
        <Container styling={'pb-2 flex justify-center'}>
          {/* Karte */}
          <div className='relative z-10 mt-10 mb-28 flex w-full flex-col sm:flex-row'>
            {/* Text - linke Seite */}
            <div className='flex h-full w-full py-10 sm:py-0 items-center justify-center  rounded-tl-3xl rounded-tr-3xl rounded-bl-none  sm:rounded-tr-none sm:rounded-bl-3xl bg-navy px-14 shadow-2xl sm:block sm:w-2/5'>
              <div className='j flex h-full flex-col justify-center'>
                <div className='font-regular font-source text-lg text-white'>Material-fiB</div>
                <div className='mt-5 h-[5px] w-10 bg-primary'></div>
                <div className='font-pooppins mt-10 text-left text-xl font-bold leading-tight text-white sm:text-xl lg:text-3xl'>
                  Hier finden Sie alle Dokumente und Dateien
                </div>
              </div>
            </div>
            {/* Download Icons - rechte Seite */}
            <div className='downloadsCSS flex w-full flex-wrap items-start justify-center gap-4 rounded-br-3xl  sm:rounded-tr-3xl  rounded-bl-3xl py-20 sm:w-3/5 sm:rounded-bl-none'>
              {documents.map((doc) => (
                <a key={doc.href} href={doc.href} target='_blank' rel='noopener noreferrer'>
                  <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                    <FontAwesomeIcon
                      className='pb-2 text-white'
                      icon={faFilePdf}
                      style={{ fontSize: '2.5rem' }}
                    />
                    {doc.label}
                  </div>
                </a>
              ))}
              {/* Flyer Ordner (aufklappbar) */}
              <FlyerFolder />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
