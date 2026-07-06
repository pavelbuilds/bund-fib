import Container from '@/components/Container';
import ProjectTitleSection from '@/components/Layout/ProjectTitleSection';
import Image from 'next/image';

export const metadata = {
  title: 'Transkulturelles Sommerfest',
  description:
    'Sommerspaß in der Oase Berlin: 2023 feierten wir mit der Kinder- und Jugendeinrichtung "die Oase" ein transkulturelles Sommerfest mit Pools, Wasserrutsche, Bastel- und Graffitiangebot, (Kinder)DJs und Tanzbühne.',
};

const TranskulturellesSommerfest = () => {
  return (
    <>
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        <ProjectTitleSection
          title='Transkulturelles Sommerfest'
          subtitle='Sommerspaß in der Oase Berlin'
          image='/images/Sommerfest.jpg'
        />
        {/* Content */}
        <Container>
          <p className='text-lg pb-32  pt-32'>
            Unsere transkulturellen Sommerfeste sind ein lebendiges Zeichen für Offenheit,
            Zusammenhalt und gelebte Vielfalt. 2023 feierten wir zusammen mit der Kinder- und
            Jugendeinrichtung &quot;die Oase&quot; ein Sommerfest mit Pools und Wasserrutsche,
            Bastel-, - und Grafittiangebot, (Kinder)DJs und einer Tanzbühne. Ziel war es einen Raum
            für Begegnung auf Augenhöhe zu schaffen, das Miteinander zu stärken und sich im
            Sozialraum zu vernetzen.
          </p>
        </Container>
        {/* Image Gallery */}
        <Container>
          <div className='relative w-full flex justify-center items-center pb-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 relative max-w-4xl'>
              {/* Top Left Image */}
              <div className='relative transform rotate-[-5deg]'>
                <Image
                  src='/images/Bild21.jpg'
                  width={400}
                  height={300}
                  alt='Eindrücke vom Transkulturellen Sommerfest – Bild 1'
                  className='shadow-xl object-cover w-full h-[325px]'
                />
              </div>

              {/* Top Right Image */}
              <div className='relative transform rotate-[-2deg]'>
                <Image
                  src='/images/Bild23.jpg'
                  width={400}
                  height={300}
                  alt='Eindrücke vom Transkulturellen Sommerfest – Bild 2'
                  className='shadow-xl object-cover w-full h-[325px]'
                />
              </div>

              {/* Bottom Left Image */}
              <div className='relative transform rotate-[4deg]'>
                <Image
                  src='/images/Bild24.jpeg'
                  width={400}
                  height={300}
                  alt='Eindrücke vom Transkulturellen Sommerfest – Bild 3'
                  className='shadow-xl object-cover w-full h-[325px]'
                />
              </div>

              {/* Bottom Right Image */}
              <div className='relative transform rotate-[-3deg]'>
                <Image
                  src='/images/Bild25.jpeg'
                  width={400}
                  height={300}
                  alt='Eindrücke vom Transkulturellen Sommerfest – Bild 4'
                  className='shadow-xl object-cover w-full h-[325px]'
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TranskulturellesSommerfest;
