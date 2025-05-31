'use client';

import NavBar from '../../components/Layout/NavBar';
import Footer from '../../components/Layout/Footer';
import Container from '../../components/Container';
import ContactPersonCard from '../../components/ContactPersonCard';
import ProjectTitleSection from '../../components/Layout/ProjectTitleSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const GemeinsamHandeln = () => {
  return (
    <>
      <NavBar />
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        <ProjectTitleSection
          title='Gemeinsam handeln'
          subtitle='Gemeinsam stark – Geflüchtete Kinder unterstützen'
          image='/images/fit-fuer-die-schule.jpeg'
        />
        {/* Content */}
        <Container>
          {/* Text */}
          <p className='pb-20 pt-20  text-lg'>
            Geflüchtete Kinder und Jugendliche stehen vor vielen Herausforderungen: belastende
            Erfahrungen, ein neues Schulsystem und Sprachbarrieren erschweren das Ankommen.
            <b>"Gemeinsam handeln"</b> hilft Schulen, diese Kinder gezielt zu unterstützen.
          </p>
          <p className='pb-20   text-lg'>
            Das Programm vermittelt Wissen und Strategien zur psychosozialen Unterstützung,
            Resilienzförderung und Selbstfürsorge. Pädagogische Fachkräfte und Engagierte erhalten
            praktische Ansätze, um sowohl die Bedürfnisse der Kinder als auch ihre eigene mentale
            Gesundheit im Blick zu behalten.
          </p>
          <p className='pb-20   text-lg'>
            Zudem werden Beteiligungsformate angeboten, in denen Kinder und Jugendliche aktiv
            mitgestalten und Selbstwirksamkeit erfahren. So entsteht eine unterstützende Umgebung,
            die ihnen Sicherheit gibt und das Ankommen erleichtert.
          </p>
          <p className='pb-20  text-lg'>
            2024 führte der Bund für integrative Bildung in kleinem Rahmen Beteiligungsund
            Workshopangebote an Berliner Schulen unter dem eigenen Konzept &quot;Integratives Lernen
            & Lehren&quot; durch.
          </p>
          <p className='pb-20  text-lg'>
            <b>&quot;Gemeinsam handeln&quot;</b> ist ein Programm von <b>Save the Children</b> und
            der
            <b> Deutschen Kinder- und Jugendstiftung (DKJS)</b>.
          </p>

          <p className='text-lg pb-5 hover:underline pl-10'>
            <a href='https://eduaid.online/' target='_blank'>
              <span className='pr-4'>🔗</span>https://www.dkjs.de/programm/gemeinsam-handeln/
            </a>
          </p>
          <p className='text-lg pb-40 hover:underline pl-10'>
            <a href='https://www.instagram.com/eduaid_online/' target='_blank'>
              <span className='pr-4'>🔗</span>
              https://www.savethechildren.de/informieren/einsatzorte/deutschland/bildung/gemeinsam-handeln/
            </a>
          </p>
          <div className='w-10 h-[5px] bg-primary mb-5'></div>
          <h3 className='text-2xl pb-16 pt-10 font-bold'>Downloads</h3>
          <div className='flex gap-14  items-start flex-wrap pb-20'>
            <a
              href='/integrativ-lernen-lehren-konzept.pdf'
              target='_blank'
              className='flex flex-col items-center justify-center text-center text-xs text-black sm:text-xs'
            >
              <FontAwesomeIcon className='text-4xl pb-2  text-black' icon={faFilePdf} />
              Integrativ lernen <br /> und lehren - Konzept
            </a>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default GemeinsamHandeln;
