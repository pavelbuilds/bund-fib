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
  const [activeTeam, setActiveTeam] = useState(null);

  const handleTeamClick = (teamId) => {
    setActiveTeam(activeTeam === teamId ? null : teamId);
  };

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
              Das Bund-fiB Leitungsteam setzt sich aus Sören und Marlene in der Geschäftsführung,
              Lars als pädagogischer Leiter und Ben als Standortleiter in Hannover zusammen.
              Gemeinsam haben sie ihre Schwerpunkte in der Pädagogik und Sonderpädagogik, sowie der
              Anthropologie, Politikwissenschaft und Wirtschaft. Zusammen bringen sie Erfahrung,
              Herzblut und eine klare Vision mit: Bildung soll für alle zugänglich, inklusiv und
              chancengerecht sein.
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
              {/* Team dot buttons deactivated
              <div
                onClick={() => handleTeamClick('team1')}
                className={`${
                  activeTeam === 'team1' ? 'bg-[rgba(0,0,0,0.7)] z-50' : ''
                } absolute rotate-[3deg] top-[60%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all sm:text-[14px] ${
                  activeTeam === 'team1'
                    ? 'left-1/2 sm:left-[15%] transform -translate-x-1/2 w-3/4 sm:transform-none sm:w-auto'
                    : 'left-[3%] sm:left-[15%]'
                }`}
              >
                <FontAwesomeIcon className='text-2xl text-primary' icon={faCircle} />
                {activeTeam === 'team1' && (
                  <div className='ml-2'>
                    <b>Katrin Gorochov</b>
                    <br />
                    Duale Studentin der sozialen Arbeit
                  </div>
                )}
              </div>
              <div
                onClick={() => handleTeamClick('team2')}
                className={`${
                  activeTeam === 'team2' ? 'bg-[rgba(0,0,0,0.7)] z-50' : ''
                } absolute rotate-[3deg] top-[50%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all sm:text-[14px] ${
                  activeTeam === 'team2'
                    ? 'left-1/2 sm:left-[35%] transform -translate-x-1/2 w-3/4 sm:transform-none sm:w-auto'
                    : 'left-[25%] sm:left-[35%]'
                }`}
              >
                <FontAwesomeIcon className='text-2xl text-primary' icon={faCircle} />
                {activeTeam === 'team2' && (
                  <div className='ml-2'>
                    <b>Sarah Hennig</b>
                    <br />
                    Standortleiterin Leipzig
                  </div>
                )}
              </div>
              <div
                onClick={() => handleTeamClick('team3')}
                className={`${
                  activeTeam === 'team3' ? 'bg-[rgba(0,0,0,0.7)] z-50' : ''
                } absolute rotate-[3deg] top-[40%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all sm:text-[14px] ${
                  activeTeam === 'team3'
                    ? 'left-1/2 sm:left-[55%] transform -translate-x-1/2 w-3/4 sm:transform-none sm:w-auto'
                    : 'left-[55%] sm:left-[55%]'
                }`}
              >
                <FontAwesomeIcon className='text-2xl text-primary' icon={faCircle} />
                {activeTeam === 'team3' && (
                  <div className='ml-2'>
                    <b> Nathalie Thorleuchter</b>
                    <br />
                    Standortleiterin Leipzig
                  </div>
                )}
              </div>
              <div
                onClick={() => handleTeamClick('team4')}
                className={`${
                  activeTeam === 'team4' ? 'bg-[rgba(0,0,0,0.7)] z-50' : ''
                } absolute top-[50%] rotate-[3deg] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all sm:text-[14px] ${
                  activeTeam === 'team4'
                    ? 'left-1/2 sm:left-[70%] transform -translate-x-1/2 w-3/4 sm:transform-none sm:w-auto'
                    : 'left-[80%] sm:left-[70%]'
                }`}
              >
                <FontAwesomeIcon className='text-2xl text-primary' icon={faCircle} />
                {activeTeam === 'team4' && (
                  <div className='ml-2'>
                    <b>Sören Dübel</b>
                    <br />
                    Geschäftsführung
                  </div>
                )}
              </div>
              */}
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
              {/* Team dot buttons deactivated
              <div
                onClick={() => handleTeamClick('team5')}
                className={`${
                  activeTeam === 'team5' ? 'bg-[rgba(0,0,0,0.7)] z-50' : ''
                } absolute top-[60%] rotate-[-6deg] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all sm:text-[14px] ${
                  activeTeam === 'team5'
                    ? 'left-1/2 sm:left-[15%] transform -translate-x-1/2 w-3/4 sm:transform-none sm:w-auto'
                    : 'left-[0%] sm:left-[15%]'
                }`}
              >
                <FontAwesomeIcon className='text-2xl text-primary' icon={faCircle} />
                {activeTeam === 'team5' && (
                  <div className='ml-2'>
                    <b>Sören Dübel</b>
                    <br />
                    Geschäftsführung & Projektleitung
                  </div>
                )}
              </div>
              <div
                onClick={() => handleTeamClick('team6')}
                className={`${
                  activeTeam === 'team6' ? 'bg-[rgba(0,0,0,0.7)] z-50' : ''
                } absolute rotate-[-6deg] top-[60%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all sm:text-[14px] ${
                  activeTeam === 'team6'
                    ? 'left-1/2 sm:left-[45%] transform -translate-x-1/2 w-3/4 sm:transform-none sm:w-auto'
                    : 'left-[35%] sm:left-[45%]'
                }`}
              >
                <FontAwesomeIcon className='text-2xl text-primary' icon={faCircle} />
                {activeTeam === 'team6' && (
                  <div className='ml-2'>
                    <b>Lars Mikeler</b>
                    <br />
                    Pädagogische Leitung
                  </div>
                )}
              </div>
              <div
                onClick={() => handleTeamClick('team7')}
                className={`${
                  activeTeam === 'team7' ? 'bg-[rgba(0,0,0,0.7)] z-50' : ''
                } absolute rotate-[-6deg] top-[35%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all sm:text-[14px] ${
                  activeTeam === 'team7'
                    ? 'left-1/2 sm:left-[15%] transform -translate-x-1/2 w-3/4 sm:transform-none sm:w-auto'
                    : 'left-[-2%] sm:left-[15%]'
                }`}
              >
                <FontAwesomeIcon className='text-2xl text-primary' icon={faCircle} />
                {activeTeam === 'team7' && (
                  <div className='ml-2'>
                    <b>Mika Dombrowski</b>
                    <br />
                    Bundesfreiwilligendienst Backoffice + Pädagogik
                  </div>
                )}
              </div>
              <div
                onClick={() => handleTeamClick('team8')}
                className={`${
                  activeTeam === 'team8' ? 'bg-[rgba(0,0,0,0.7)] z-50' : ''
                } absolute rotate-[-6deg] top-[35%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all sm:text-[14px] ${
                  activeTeam === 'team8'
                    ? 'left-1/2 sm:left-[40%] transform -translate-x-1/2 w-3/4 sm:transform-none sm:w-auto'
                    : 'left-[30%] sm:left-[40%]'
                }`}
              >
                <FontAwesomeIcon className='text-2xl text-primary' icon={faCircle} />
                {activeTeam === 'team8' && (
                  <div className='ml-2'>
                    <b>Marlene Langenbucher</b>
                    <br />
                    Geschäftsführung & Projektleitung
                  </div>
                )}
              </div>
              <div
                onClick={() => handleTeamClick('team9')}
                className={`${
                  activeTeam === 'team9' ? 'bg-[rgba(0,0,0,0.7)] z-50' : ''
                } absolute rotate-[-6deg] top-[25%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all sm:text-[14px] ${
                  activeTeam === 'team9'
                    ? 'left-1/2 sm:left-[30%] transform -translate-x-1/2 w-3/4 sm:transform-none sm:w-auto'
                    : 'left-[20%] sm:left-[30%]'
                }`}
              >
                <FontAwesomeIcon className='text-2xl text-primary' icon={faCircle} />
                {activeTeam === 'team9' && (
                  <div className='ml-2'>
                    <b>Schabnaz Khadem Saba</b>
                    <br />
                    Projektleitung Fit für die Schule
                  </div>
                )}
              </div>
              <div
                onClick={() => handleTeamClick('team10')}
                className={`${
                  activeTeam === 'team10' ? 'bg-[rgba(0,0,0,0.7)] z-50' : ''
                } absolute rotate-[-6deg] top-[25%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all sm:text-[14px] ${
                  activeTeam === 'team10'
                    ? 'left-1/2 sm:left-[55%] transform -translate-x-1/2 w-3/4 sm:transform-none sm:w-auto'
                    : 'left-[55%] sm:left-[55%]'
                }`}
              >
                <FontAwesomeIcon className='text-2xl text-primary' icon={faCircle} />
                {activeTeam === 'team10' && (
                  <div className='ml-2'>
                    <b>Johanna Nedelmann</b>
                    <br />
                    Praktikantin Öffentlichkeitsarbeit
                  </div>
                )}
              </div>
              <div
                onClick={() => handleTeamClick('team11')}
                className={`${
                  activeTeam === 'team11' ? 'bg-[rgba(0,0,0,0.7)] z-50' : ''
                } absolute rotate-[-6deg] top-[15%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all sm:text-[14px] ${
                  activeTeam === 'team11'
                    ? 'left-1/2 sm:left-[48%] transform -translate-x-1/2 w-3/4 sm:transform-none sm:w-auto'
                    : 'left-[48%] sm:left-[48%]'
                }`}
              >
                <FontAwesomeIcon className='text-2xl text-primary' icon={faCircle} />
                {activeTeam === 'team11' && (
                  <div className='ml-2'>
                    <b>Kristina Savichyte</b>
                    <br />
                    Praktikantin Fördermittel
                  </div>
                )}
              </div>
              <div
                onClick={() => handleTeamClick('team12')}
                className={`${
                  activeTeam === 'team12' ? 'bg-[rgba(0,0,0,0.7)] z-50' : ''
                } absolute rotate-[-6deg] top-[35%] flex cursor-pointer items-center rounded-2xl py-2 px-4 text-[14px] text-white transition-all sm:text-[14px] ${
                  activeTeam === 'team12'
                    ? 'left-1/2 sm:left-[70%] transform -translate-x-1/2 w-3/4 sm:transform-none sm:w-auto'
                    : 'left-[80%] sm:left-[70%]'
                }`}
              >
                <FontAwesomeIcon className='text-2xl text-primary' icon={faCircle} />
                {activeTeam === 'team12' && (
                  <div className='ml-2'>
                    <b>Gina Misselhorn</b>
                    <br />
                    Öffentlichkeitsarbeit und Backoffice
                  </div>
                )}
              </div>
              */}
            </div>
          </div>
          <p className='mt-4 text-center font-source text-sm italic'>Unser Team im Sommer 2025</p>
        </div>
      </Container>{' '}
    </section>
  );
};

export default Team;
