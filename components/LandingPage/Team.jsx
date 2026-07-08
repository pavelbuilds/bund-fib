import Container from '../Container';
import Textbox from '../Textbox';
import Gruender from '../Gruender';
import Image from 'next/image';

/**
 * "Unser Team" section of the homepage: leadership intro with stacked
 * founder photos (Gruender) and two tilted team photos.
 *
 * An earlier version had clickable dots on the photos that revealed team
 * member names ("team dot buttons"); it was removed — see git history if
 * it should ever come back.
 */
const Team = () => {
  return (
    <section id='UnserTeam' className='bg-darkYellow pb-14 sm:pt-20'>
      <Container styling={'pt-32'}>
        {/* Text & Gründer */}
        <div
          data-aos={'fade-up'}
          className='flex flex-col items-center justify-between lg:flex-row'
        >
          <Textbox
            section={'Unser Team'}
            slogan={'Lerne unser Team kennen'}
            styling={'lg:w-2/5 sm:pb-0 pb-16'}
            align={'left'}
          >
            <div className='mb-10 text-center font-source leading-loose lg:text-left'>
              Das Bund-fiB Leitungsteam setzt sich aus Ben, Lars und Sören zusammen. Gemeinsam
              haben sie ihre Schwerpunkte in der Pädagogik und Sonderpädagogik, sowie der
              Bildungswissenschaft und Wirtschaft. Gemeinsam bringen sie Erfahrung, Herzblut und
              eine klare Vision mit: Bildung soll für alle zugänglich, inklusiv und chancengerecht
              sein.
            </div>
          </Textbox>
          <Gruender />
        </div>

        {/* Mitarbeiter Übersicht */}
        <div className='mt-60 mb-20 flex flex-wrap font-source leading-loose justify-between sm:mt-72 sm:justify-start text-center'>
          <div className='mb-16'>
            In den letzten Jahren sind unterschiedliche Menschen dazugekommen, die diese Vision
            unterstützen und kräftig voranbringen. Das Team vereint Expertise in den Bereichen der
            Erziehung, DaF/DaZ Spezialisierung im Lehramt, Kunstpädagogik, Sozialer Arbeit,
            Sexualpädagogik, nachhaltiger Bildung und Transkulturalität. Zusammen wollen wir Bildung
            zugänglicher machen und gemeinsam mit Kindern und Jugendlichen auf Augenhöhe nachhaltig
            weiterentwickeln!
          </div>

          {/* Side by side photos effect */}
          <div className='relative z-10 md:mt-20 h-[800px] md:h-96 w-full flex flex-col md:flex-row justify-center '>
            {/* First image (left) */}
            <div className='relative z-20 h-[800px] md:h-96 w-full md:w-[55%] rotate-[-3deg] overflow-hidden rounded-xl'>
              <Image
                src='/images/TeamLeipzig.jpg'
                alt='Team Mitglieder'
                width={1000}
                height={1000}
                className='h-full w-full scale-110 rounded-xl bg-black object-cover object-top'
              />
            </div>
            {/* Second image (right) */}
            <div className='relative h-[500px] md:h-96 w-full md:w-[55%] md:-ml-10 rotate-6 overflow-hidden rounded-xl shadow-xl'>
              <Image
                src='/images/mitarbeiterStein-min.jpg'
                alt='Team Mitglieder'
                width={1000}
                height={1000}
                className='h-full w-full scale-110 rounded-xl bg-black object-cover object-top'
              />
            </div>
          </div>
          <p className='mt-4 text-center font-source text-sm italic'>Unser Team im Sommer 2025</p>
        </div>
      </Container>
    </section>
  );
};

export default Team;
