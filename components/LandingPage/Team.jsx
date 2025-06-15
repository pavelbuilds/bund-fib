import Container from '../Container';
import Textbox from '../Textbox';
import Button from '../Button';
import Gruender from '../Gruender';
import Mitarbeiter from '../Mitarbeiter';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Team = () => {
  const [showTeam1Info, setTeam1Info] = useState(false);
  const [showTeam2Info, setTeam2Info] = useState(false);
  const [showTeam3Info, setTeam3Info] = useState(false);
  const [showTeam4Info, setTeam4Info] = useState(false);

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
            <div className='mb-10 text-center font-source leading-tight lg:text-left'>
              Das Bund-fiB Leitungsteam setzt sich aus Sören und Marlene in der Geschäftsführung,
              Lars als pädagogischer Leiter und Ben als Standortleiter in Hannover zusammen.
              Gemeinsam haben sie ihre Schwerpunkte in der Pädagogik und Sonderpädagogik, sowie der
              Anthropologie, Politikwissenschaft und Wirtschaft. Zusammen bringen sie Erfahrung,
              Herzblut und eine klare Vision mit: Bildung soll für alle zugänglich, inklusiv und
              chancengerecht sein
            </div>
          </Textbox>
          <Gruender />
        </div>

        {/* Mitarbeiter Übersicht */}
        <div className='mt-60 mb-20 flex flex-wrap justify-between sm:mt-72 sm:justify-start text-center'>
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
              {/* Team 1 Button */}
              <div
                onClick={() => setTeam1Info(!showTeam1Info)}
                className={`${
                  showTeam1Info ? 'bg-[rgba(0,0,0,0.7)]' : ''
                } absolute rotate-[3deg] top-[60%] left-[15%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all hover:scale-110 sm:text-[10px]`}
              >
                <FontAwesomeIcon className='text-2xl text-primary' icon={faCircle} />
                {showTeam1Info && (
                  <div className='ml-2'>
                    <b>Katrin Gorochov</b>
                    <br />
                    Duale Studentin der sozialen Arbeit
                  </div>
                )}
              </div>
              {/* Team 2 Button */}
              <div
                onClick={() => setTeam2Info(!showTeam2Info)}
                className={`${
                  showTeam2Info ? 'bg-[rgba(0,0,0,0.7)]' : ''
                } absolute rotate-[3deg] top-[50%] left-[35%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all hover:scale-110 sm:text-[10px]`}
              >
                <FontAwesomeIcon className='text-2xl text-primary' icon={faCircle} />
                {showTeam2Info && (
                  <div className='ml-2'>
                    <b>Sarah Hennig</b>
                    <br />
                    Standortleiterin Leipzig
                  </div>
                )}
              </div>
              {/* Team 3 Button */}
              <div
                onClick={() => setTeam3Info(!showTeam3Info)}
                className={`${
                  showTeam3Info ? 'bg-[rgba(0,0,0,0.7)]' : ''
                } absolute rotate-[3deg] top-[40%] left-[55%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all hover:scale-110 sm:text-[10px]`}
              >
                <FontAwesomeIcon className='text-2xl text-primary' icon={faCircle} />
                {showTeam3Info && (
                  <div className='ml-2'>
                    <b> Nathalie Thorleuchter</b>
                    <br />
                    Standortleiterin Leipzig
                  </div>
                )}
              </div>
              {/* Team 4 Button */}
              <div
                onClick={() => setTeam4Info(!showTeam4Info)}
                className={`${
                  showTeam4Info ? 'bg-[rgba(0,0,0,0.7)]' : ''
                } absolute top-[50%] left-[70%] rotate-[3deg] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all hover:scale-110 sm:text-[10px]`}
              >
                <FontAwesomeIcon className='text-2xl text-primary' icon={faCircle} />
                {showTeam4Info && (
                  <div className='ml-2'>
                    <b>Sören Dübel</b>
                    <br />
                    Geschäftsführung
                  </div>
                )}
              </div>
            </div>
            {/* Second image (right) */}
            <div className='relative h-[800px] md:h-96 w-full md:w-[55%] md:-ml-10 rotate-6 overflow-hidden rounded-xl shadow-xl'>
              <Image
                src='/images/team2.jpg'
                alt='Team Mitglieder'
                width={1000}
                height={1000}
                className='h-full w-full scale-110 rounded-xl bg-black object-cover object-top'
              />
            </div>
          </div>
        </div>
      </Container>{' '}
    </section>
  );
};

export default Team;
