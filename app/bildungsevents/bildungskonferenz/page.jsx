'use client';

import NavBar from '../../../components/Layout/NavBar';
import Footer from '../../../components/Layout/Footer';
import Container from '../../../components/Container';
import ProjectTitleSection from '../../../components/Layout/ProjectTitleSection';
import Image from 'next/image';

const panelSpeakers = [
  {
    image: '/images/RebeccaWienhold.jpeg',
    name: 'Rebecca Wienhold',
    occupation:
      'Medienpädagogin, Trainerin für Diversity: Fokus auf Rassismuskritik und Empowerment',
  },
  {
    image: '/images/AhmadDakhnous.jpeg',
    name: 'Ahmad Dakhnous',
    occupation:
      'Referent der politischen Bildung mit Fokus auf Rassismus- und Antisemitismuskritik, Flucht/ Migration & Ankommensprozesse sowie Israel/ Palästina',
  },
  {
    image: '/images/Harald.jpeg',
    name: 'Dr. Harald Weilnböck',
    occupation:
      'Mitbegründer von cultures interactive e.V., Fokus auf Konzeption und Praxis intensivpädagogischer Rechtsextremismusprävention',
  },
];

const panelModerator = {
  image: '/images/Marlene.jpeg',
  name: 'Marlene Langenbucher de Olavarrieta',
  occupation:
    'Anthropologin mit Schwerpunkt Flucht und Migration und Geschäftsführerin vom Bund-fiB ',
};

const partnerLogos = [
  {
    src: '/images/logos/Logo Berliner Landeszentrale für pol. Bildung.png',
    alt: 'Berliner Landeszentrale für politische Bildung',
    width: 200,
    height: 200,
  },
  {
    src: '/images/logos/Pulsraum-Logo-2024-Entwurf-1a.png',
    alt: 'Pulsraum',
    width: 200,
    height: 200,
  },
  {
    src: '/images/logos/BVNG-Logo-removebg-preview.png',
    alt: 'Bundesvereinigung Nachhaltigkeit',
    width: 200,
    height: 200,
  },
];

const Bildungskonferenz = () => {
  return (
    <>
      <NavBar />
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        <ProjectTitleSection
          title='Bildungskonferenz'
          subtitle='Wege zu demokratischem Dialog - Impulse für die Bildung '
          image='/images/bildungs-events.jpeg'
        />
        {/* Content */}
        <Container>
          <p className='text-lg pb-20 pt-28'>
            Mit einer Förderung der Berliner Landeszentrale für politische Bildung haben wir eine
            Bildungskonferenz zu dem Thema &quot;Voneinander lernen: Wege zu demokratischem Dialog -
            Impulse für die Bildung&quot;. Bildungsinteressierte, Pädagog*innen und Expert *innen
            kamen zusammen, um sich über demokratischen Dialog und die Rolle beziehungsweise auch
            die Verantwortung des Bildungswesens auszutauschen.
          </p>
          <div className='relative w-full flex justify-center items-center mt-10 mb-10'>
            <div className='grid grid-cols-2 gap-20 relative'>
              {/* Left Image */}
              <div className='relative transform rotate-[-4deg] hover:z-10 transition-all duration-300'>
                <Image
                  src='/images/Bildungskonferenz.jpg'
                  width={400}
                  height={300}
                  alt='Bildungskonferenz Impression 1'
                  className='shadow-xl object-cover w-[400px] h-auto'
                />
              </div>

              {/* Right Image */}
              <div className='relative transform rotate-[5deg] hover:z-10 transition-all duration-300'>
                <Image
                  src='/images/bildungs-events.jpeg'
                  width={400}
                  height={300}
                  alt='Bildungskonferenz Impression 2'
                  className='shadow-xl object-cover w-[400px] h-auto'
                />
              </div>
            </div>
          </div>

          <h3 className='text-2xl pb-20 pt-28 font-bold'>
            Impulse und Inspiration: Das Programm der Konferenz
          </h3>
          <p className='text-lg pb-10'>Wir sind mit einem Paneltalk zu der Frage</p>
          <p className='text-lg pb-10 italic'>
            &quot;Wie kann man im Bildungskontext Räume für einen respektvollen Diskurs öffnen und
            den Grundstein für einen demokratischen Dialog legen?&quot;
          </p>
          <p className='text-lg pb-14'>in den Tag gestartet. Zu Gast waren:</p>
          {panelSpeakers.map((speaker) => (
            <PanelSpeaker key={speaker.name} {...speaker} />
          ))}
          <p className='text-lg pb-10 pt-10'>unter der Moderation von:</p>
          <PanelSpeaker {...panelModerator} />
          <p className='text-lg pb-32 pt-10'>
            Sie thematisierten unter anderem, wie Bildung einen Beitrag zu gesellschaftlichem
            Zusammenhalt und demokratischen Prozessen leisten kann.{' '}
          </p>
          <p className='text-lg pb-14'>
            Anschließend gab es zwei Workshops, die verschiedene für Pädagog*innen und die Bildung
            relevante Themen vertieften.
          </p>
          <p className='text-lg pb-14 '>
            Im Workshop <b>„Diskriminierungskritische Medienbildung“</b> wurde mit Rebecca Wienhold
            erarbeitet, wie diversitätsbewusste Ansätze in der Bildungsarbeit integriert werden
            können und wie sich aktuell Rassismus in den sozialen Medien verbreitet.
          </p>
          <p className='text-lg pb-14 '>
            Der Workshop <b>„Raum für Dialog: Israel und Palästina im Bildungskontext“</b> mit Ahmad
            Dakhnous und Christoph Dinkelaker schuf einen sensiblen und reflektierten Austausch über
            Herausforderungen und Chancen der Thematisierung von Israel und Palästina in
            Bildungssettings.
          </p>
          <p className='text-lg pb-32 '>
            Beide Workshops sollten den Teilnehmenden ermöglichten neue Perspektiven kennenzulernen
            und praxisnahe Methoden für ihre eigene Arbeit zu entwickeln und sich selbst auch
            kritisch zu hinterfragen.
          </p>
          <p className='text-lg pb-14 '>
            In der <b>abschließenden</b> Reflexionsrunde kamen alle Teilnehmenden zusammen, um
            Ergebnisse zusammenzutragen und offene Fragen, aber auch politische Forderungen zu
            formulieren.
          </p>
          <p className='text-lg pb-32 '>
            In der Publikation zur Bildungskonferenz, kann man die Ergebnisse der Reflexionsrunde,
            sowie eine Aufbereitung des gesamten Tages und weiterführendes Material finden.
          </p>
          <h3 className='text-2xl pb-20 font-bold'>Ausblick: Wie geht es weiter?</h3>
          <p className='text-lg pb-14 '>
            Die Bildungskonferenz hat gezeigt, dass das Interesse an diesen Themen groß ist und der
            Bedarf an Austausch und Weiterbildung stetig wächst. Dies bestärkt uns in unserer Arbeit
            und motiviert uns, weitere Veranstaltungen und Projekte zu planen
          </p>
          <p className='text-lg pb-32 '>
            Vielen Dank an die Berliner Landeszentrale für politische Bildung für die Förderung der
            Bildungskonferenz und dem Pulsraum sowie der Bundesvereinigung Nachhaltigkeit für die
            großartigen Räumlichkeiten!
          </p>
          <div className='flex justify-center items-center pb-32 '>
            {partnerLogos.map((logo, index) => (
              <div key={index} className='flex w-1/2 justify-center px-5 py-3 '>
                <Image src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} />
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Bildungskonferenz;

const PanelSpeaker = ({ image, name, occupation }) => {
  return (
    <div className='flex justify-start items-center py-5'>
      {/* Image */}
      <Image
        src={image}
        width={100}
        height={100}
        alt={name}
        className='rounded-full size-32 object-cover'
      />
      <div className='ml-10 w-2/3'>
        {/* Name */}
        <p className='text-lg font-bold'>{name}</p>
        {/* Occupation */}
        <p>{occupation}</p>
      </div>
    </div>
  );
};
