import Image from 'next/image';
import Container from '../Container';
import { useRouter } from 'next/navigation';
const partnerLogos = [
  {
    src: '/images/logos/supportLogo-1-removebg-preview.png',
    width: 180,
    height: 50,
    alt: 'Berliner Senat Logo',
    link: 'https://european-union.europa.eu/index_de',
  },
  // {
  //   src: '/images/logos/BerlinerLandeszentrale.png',
  //   width: 180,
  //   height: 50,
  //   alt: 'Berliner Senat Logo',
  // },
  {
    src: '/images/logos/weißes_berlin_logo.webp',
    width: 180,
    height: 50,
    alt: 'Berliner Senat Logo',
    link: 'https://www.berlin.de/',
  },
  {
    src: '/images/logos/leipzig.png',
    width: 150,
    height: 50,
    alt: 'Stadt Leipzig Logo',
    link: 'https://www.leipzig.de/',
  },
  {
    src: '/images/logos/Landeshauptstadt-Hannover.png',
    width: 180,
    height: 50,
    alt: 'Berliner Senat Logo',
    link: 'https://www.hannover.de/',
  },
  {
    src: '/images/logos/deutsche_kinder_und_jugendstiftung.png',
    width: 240,
    height: 80,
    alt: 'Deutsche Kinder und Jugendstiftung Logo',
    link: 'https://www.dkjs.de/',
  },
  // {
  //   src: '/images/logos/MindsEurope.png',
  //   width: 100,
  //   height: 50,
  //   alt: 'Berliner Senat Logo',
  // },
  // {
  //   src: '/images/logos/universiteDePau.png',
  //   width: 180,
  //   height: 50,
  //   alt: 'Berliner Senat Logo',
  // },
  {
    src: '/images/logos/UnivesitaetOldenburg.png',
    width: 130,
    height: 50,
    alt: 'Berliner Senat Logo',
    link: 'https://uol.de/',
  },
  {
    src: '/images/logos/bundesvereinigung_nachhaltigkeit.svg',
    width: 170,
    height: 80,
    alt: 'Bundesvereinigung Nachhaltigkeit Logo',
    link: 'https://nachhaltigkeit.bvng.org/',
  },
  {
    src: '/images/logos/Basique.png',
    width: 140,
    height: 50,
    alt: 'Berliner Senat Logo',
    link: 'https://birabira.org/',
  },

  // {
  //   src: '/images/logos/haus_der_jugend.webp',
  //   width: 120,
  //   height: 80,
  //   alt: 'Haus der Jugend Logo',
  // },
];

const PartnerLogos = () => {
  const router = useRouter();
  return (
    <>
      <section className='bg-lightYellow pt-5'>
        <Container styling={'pt-5'}>
          <div className='flex flex-wrap items-center justify-evenly overflow-hidden'>
            {partnerLogos.map((logo, index) => (
              <a
                key={index}
                className='flex w-1/2 justify-center px-5 py-3 md:py-0 sm:w-1/2 md:w-1/4'
                href={logo.link}
                target='_blank'
              >
                <Image src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} />
              </a>
            ))}
          </div>
          <div className='flex justify-center w-full mt-16'>
            <button
              onClick={() => window.open('/partner', '_blank')}
              className='mt-5 px-5 rounded-full border-2 border-black  font-source text-lg font-semibold text-black transition-all sm:ml-5 sm:mt-0 sm:h-8 sm:py-0 sm:text-sm lg:hover:scale-[102%]'
            >
              Alle Kooperationspartner:innen
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PartnerLogos;
