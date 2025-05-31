'use client';

import NavBar from '../../components/Layout/NavBar';
import Footer from '../../components/Layout/Footer';
import Container from '../../components/Container';
import ProjectTitleSection from '../../components/Layout/ProjectTitleSection';
import Card from '../../components/Card';

const Bildungsevents = () => {
  return (
    <>
      <NavBar />
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        {/* <ProjectTitleSection
          title='Bildungsevents'
          subtitle=''
          image='/images/fit-fuer-die-schule.jpeg'
        /> */}
        {/* Content */}
        <Container>
          {/* Aktuelle */}
          <h1 className='text-2xl font-bold mt-20 mb-10'>Aktuelles</h1>
          {/* aktuelle keine events */}
          <p className='text-lg '>Aktuell sind keine Events geplant.</p>
          {/* Vergangenes */}
          <h1 className='text-2xl font-bold mt-32 mb-14'>Vergangenes</h1>
          <div className='flex flex-wrap gap-14 pb-20'>
            <Card
              imageSrc='/images/bildungs-events.jpeg'
              title='Bildungskonferenz - Voneinander lernen '
              subtitle='Wege zu demokratischem Dialog - Impulse für
die Bildung '
              text='Mit einer Förderung der Berliner Landeszentrale für politische Bildung haben
wir eine Bildungskonferenz zu dem Thema "Voneinander lernen: Wege zu
demokratischem Dialog - Impulse für die Bildung" durchgeführt.
Bildungsinteressierte, Pädagog*innen und Expert *innen kamen zusammen,
um sich über demokratischen Dialog und die Rolle beziehungsweise auch die
Verantwortung des Bildungswesens auszutauschen.'
              link='/bildungsevents/bildungskonferenz'
            />
            <Card
              imageSrc='/images/Sommerfest.jpg'
              title='Transkulturelles Sommerfest'
              subtitle='Sommerspaß in der Oase Berlin'
              text='Unsere transkulturellen Sommerfeste sind ein lebendiges Zeichen für
Offenheit, Zusammenhalt und gelebte Vielfalt. 2023 feierten wir zusammen
mit der Kinder- und Jugendeinrichtung "die Oase" ein Sommerfest mit Pools
und Wasserrutsche, Bastel, - und Grafittiangebot, sowie (Kinder)DJs und einer
Tanzbühne.'
              link='/bildungsevents/transkulturelles-sommerfest'
            />
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Bildungsevents;
