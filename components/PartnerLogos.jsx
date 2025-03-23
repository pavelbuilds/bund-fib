import Image from 'next/image';
import Container from './Container';

const partnerLogos = [
  {
    src: '/images/logos/EU.jpg',
    width: 180,
    height: 50,
    alt: 'Berliner Senat Logo',
  },
  {
    src: '/images/logos/BerlinerLandeszentrale.png',
    width: 180,
    height: 50,
    alt: 'Berliner Senat Logo',
  },
  {
    src: '/images/logos/weißes_berlin_logo.webp',
    width: 180,
    height: 50,
    alt: 'Berliner Senat Logo',
  },
  {
    src: '/images/logos/MindsEurope.png',
    width: 100,
    height: 50,
    alt: 'Berliner Senat Logo',
  },
  {
    src: '/images/logos/universiteDePau.png',
    width: 180,
    height: 50,
    alt: 'Berliner Senat Logo',
  },
  {
    src: '/images/logos/UnivesitaetOldenburg.png',
    width: 130,
    height: 50,
    alt: 'Berliner Senat Logo',
  },
  {
    src: '/images/logos/Basique.png',
    width: 140,
    height: 50,
    alt: 'Berliner Senat Logo',
  },

  {
    src: '/images/logos/leipzig.png',
    width: 150,
    height: 50,
    alt: 'Stadt Leipzig Logo',
  },
  {
    src: '/images/logos/haus_der_jugend.webp',
    width: 120,
    height: 80,
    alt: 'Haus der Jugend Logo',
  },
  {
    src: '/images/logos/bundesvereinigung_nachhaltigkeit.svg',
    width: 170,
    height: 80,
    alt: 'Bundesvereinigung Nachhaltigkeit Logo',
  },
  {
    src: '/images/logos/deutsche_kinder_und_jugendstiftung.png',
    width: 240,
    height: 80,
    alt: 'Deutsche Kinder und Jugendstiftung Logo',
  },
];

const PartnerLogos = () => {
  return (
    <>
      <Container styling={'pt-5'}>
        <div className='flex flex-wrap items-center justify-evenly overflow-hidden'>
          {partnerLogos.map((logo, index) => (
            <div key={index} className='flex w-1/2 justify-center p-5 pt-5 sm:w-1/2 md:w-1/4'>
              <Image src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default PartnerLogos;
