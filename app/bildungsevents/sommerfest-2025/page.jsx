'use client';
import NavBar from '../../../components/Layout/NavBar';
import Footer from '../../../components/Layout/Footer';
import Container from '../../../components/Container';
import ProjectTitleSection from '../../../components/Layout/ProjectTitleSection';
import Image from 'next/image';

const Sommerfest2025 = () => {
  return (
    <>
      <NavBar />
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        <ProjectTitleSection
          title='Sommer, Sonne, Strand – das Kulturfest für alle'
          image='/images/sommerfest-2025/Bild_2_Sommerfest_web.jpg'
        />
        {/* Content */}
        <Container>
          <div className='pt-32 pb-10 font-source leading-loose text-lg'>
            <p>
              Am 14. August verwandelten wir den Plötzensee in einen bunten Begegnungsort für Jung und
              Alt! Unser Sommerfest brachte Menschen unterschiedlicher Kulturen zusammen und schuf einen
              Raum für gemeinsame Erlebnisse.
            </p>
          </div>

          <div className='pb-10'>
            <h2 className='text-2xl font-bold mb-4'>Von Kindern und Jugendlichen mitgestaltet</h2>
            <p className='font-source leading-loose text-lg'>
              Besonders wichtig war uns, dass die Kinder und Jugendlichen von Anfang an mitwirken. Schon
              in der Planungsphase haben wir in unseren Fit für die Schule-Gruppen nachgefragt: Was
              wünscht ihr euch? Wie soll unser Fest aussehen?
            </p>
            <br />
            <p className='font-source leading-loose text-lg'>
              Die Kinder und Jugendlichen haben bei der Dekoration geholfen und somit stark dazu
              beigetragen, dass wir so ein schönes Sommerfest feiern konnten.
            </p>
          </div>

          <div className='pb-10'>
            <h2 className='text-2xl font-bold mb-4'>Ein Fest, das verbindet</h2>
            <p className='font-source leading-loose text-lg'>
              Unser Sommerfest hat gezeigt, wie kraftvoll einfache, gemeinsam entwickelte Ideen sein
              können. Menschen verschiedenster Herkunft kamen zusammen, lernten sich kennen und erlebten
              einen unvergesslichen Tag am Wasser.
            </p>
          </div>

          <div className='pb-10'>
            <p className='font-source leading-loose text-lg'>
              Einen Eindruck vom Fest gibt es auf unserem{' '}
              <a
                href='https://www.instagram.com/bundfib/'
                target='_blank'
                rel='noopener noreferrer'
                className='underline font-semibold'
              >
                Instagram-Kanal
              </a>
              .
            </p>
          </div>

          <div className='pb-16'>
            <p className='font-source leading-loose text-lg italic'>
              Vielen Dank an unsere beiden Förderer: Die Kreuzberger Kinderstiftung und den Allianz
              Kinderhilfsfond, die dieses Projekt unterstützt haben.
            </p>
          </div>
        </Container>

        {/* Image Gallery */}
        <Container>
          <div className='relative w-full flex justify-center items-center pb-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 relative max-w-4xl'>
              <div className='relative transform rotate-[-5deg]'>
                <Image
                  src='/images/sommerfest-2025/Bild_1_Sommerfest_web.jpg'
                  width={400}
                  height={300}
                  alt='Kinder spielen Fußball auf dem Rasen'
                  className='shadow-xl object-cover w-full h-[325px]'
                />
              </div>
              <div className='relative transform rotate-[2deg]'>
                <Image
                  src='/images/sommerfest-2025/Bild_2_Sommerfest_web.jpg'
                  width={400}
                  height={300}
                  alt='Begegnung unter dem Zelt am Plötzensee'
                  className='shadow-xl object-cover w-full h-[325px]'
                />
              </div>
              <div className='relative transform rotate-[4deg] md:col-span-2 flex justify-center'>
                <Image
                  src='/images/sommerfest-2025/Bild_3_Sommerfest_web.jpg'
                  width={400}
                  height={300}
                  alt='Sommerfest Banner'
                  className='shadow-xl object-cover w-full max-w-lg h-[325px]'
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Sommerfest2025;
