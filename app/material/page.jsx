import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Container from '../../components/Container';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

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
            <div className='downloadsCSS flex w-full flex-wrap items-center justify-center gap-4 rounded-br-3xl  sm:rounded-tr-3xl  rounded-bl-3xl py-14 sm:w-3/5 sm:rounded-bl-none'>
              <a href='zusatzbogen.pdf' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='w-12 pb-2 text-white ' icon={faFilePdf} />
                  Zusatzbogen für <br /> Lernförderung <br /> <br />
                </div>
              </a>
              <a href='FIB-Heft.pdf' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='w-12 pb-2 text-white ' icon={faFilePdf} />
                  Unser fiB-Heft – <br /> Das Lerntagebuch <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_arabisch.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='w-12 pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Arabisch <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_deutsch.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='w-12 pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Deutsch <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_englisch.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='w-12 pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Englisch <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_farsi.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='w-12 pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Farsi <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_franzosisch.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='w-12 pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Französisch <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_kurdisch.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='w-12 pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Kurdisch <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_russisch.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='w-12 pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Russisch <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_spanisch.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='w-12 pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Spanisch <br /> <br />
                </div>
              </a>
              <a href='/images/flyer/F_türkisch.png' target='_blank'>
                <div className='flex flex-col items-center justify-center text-center text-xs text-white sm:text-sm'>
                  <FontAwesomeIcon className='w-12 pb-2  text-white' icon={faFilePdf} />
                  Fit für die Schule <br /> Türkisch <br /> <br />
                </div>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
