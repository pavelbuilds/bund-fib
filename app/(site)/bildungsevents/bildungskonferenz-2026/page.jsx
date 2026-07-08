import Container from '@/components/Container';
import ProjectTitleSection from '@/components/Layout/ProjectTitleSection';
import Image from 'next/image';

export const metadata = {
  title: 'Bildungsgerechtigkeit schaffen!',
  description:
    'Rückblick auf die Bildungskonferenz "Bildungsgerechtigkeit schaffen! Chancengerechtigkeit im Kontext von Flucht und Migration" mit Paneltalk, Workshops und Reflexion – gefördert von der Doris-Wuppermann-Stiftung.',
};

const referentInnen = [
  {
    image: '/images/bildungskonferenz-2026/MohammedJouni.jpg',
    name: 'Mohammed Jouni',
    occupation:
      'Mohammed Jouni ist freiberuflicher Bildner und Dozent an einer Hochschule für Soziale Arbeit. Er lehrt zu den Themen Flucht, Migration, postkoloniale Theorie und Rassismusforschung und begleitet Schulen über mehrere Jahre in Prozessen der inklusiven Schulentwicklung.',
  },
  {
    image: '/images/bildungskonferenz-2026/MiloAlEzairej.jpg',
    name: 'Milo Al Ezairej',
    occupation:
      'Milo Al Ezairej ist Künstlerin und Bildungsreferentin mit Schwerpunkten auf Empowerment, Identität, Zugehörigkeit und kreativen Ausdrucksformen.',
  },
];

const partnerLogos = [
  {
    src: '/images/logos/doris-wuppermann-stiftung.png',
    alt: 'Doris-Wuppermann-Stiftung – Junge Menschen für soziale Demokratie',
    width: 250,
    height: 109,
  },
  {
    src: '/images/logos/Pulsraum-Logo-2024-Entwurf-1a.png',
    alt: 'Pulsraum',
    width: 200,
    height: 200,
  },
];

const Bildungskonferenz2026 = () => {
  return (
    <div className='bg-darkYellow pt-14'>
      {/* Title */}
      <ProjectTitleSection
        title='Bildungsgerechtigkeit schaffen!'
        subtitle='Chancengerechtigkeit im Kontext von Flucht und Migration'
        image='/images/bildungskonferenz-2026/Bild_1_Bildungskonferenz_web.jpg'
      />
      {/* Content */}
      <Container>
        <p className='text-lg pb-20 pt-28'>
          Mit einer Förderung der Doris-Wuppermann-Stiftung sind wir in Runde zwei unseres
          Formats <i>Bildungskonferenz</i>{' '}gestartet. Dieses Jahr haben wir uns unter dem Titel
          &quot;Bildungsgerechtigkeit schaffen! Chancengerechtigkeit im Kontext von Flucht und
          Migration&quot; versammelt und gemeinsam diskutiert und Lösungsansätze erarbeitet. Was
          bedeutet Bildungsgerechtigkeit oder auch Ungerechtigkeit? Wie können wir dieser
          Herausforderung begegnen?
        </p>

        {/* Impressionen */}
        <div className='relative w-full flex justify-center items-center mt-10 mb-10'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10 relative'>
            <div className='relative transform rotate-[-4deg] hover:z-10 transition-all duration-300'>
              <Image
                src='/images/bildungskonferenz-2026/Bild_1_Bildungskonferenz_web.jpg'
                width={400}
                height={300}
                alt='Paneltalk der Bildungskonferenz'
                className='shadow-xl object-cover w-[400px] h-auto'
              />
            </div>
            <div className='relative transform rotate-[3deg] hover:z-10 transition-all duration-300'>
              <Image
                src='/images/bildungskonferenz-2026/Bild_2_Bildungskonferenz_web.jpg'
                width={400}
                height={300}
                alt='Gemeinsames Arbeiten im Workshop'
                className='shadow-xl object-cover w-[400px] h-auto'
              />
            </div>
            <div className='relative transform rotate-[-3deg] hover:z-10 transition-all duration-300'>
              <Image
                src='/images/bildungskonferenz-2026/Bild_3_Bildungskonferenz_web.jpg'
                width={400}
                height={300}
                alt='Austausch der Teilnehmenden'
                className='shadow-xl object-cover w-[400px] h-auto'
              />
            </div>
          </div>
        </div>

        {/* Das Programm */}
        <h3 className='text-xl pb-10 pt-28 font-bold'>Das Programm</h3>
        <p className='text-lg pb-14'>
          Den Auftakt dieser Bildungskonferenz bildete ein <b>Paneltalk</b> zur Leitfrage{' '}
          <i>
            &quot;Wie kann Chancengerechtigkeit im Kontext von Flucht und Migration erreicht
            werden?&quot;
          </i>
          , mit Carolina Kecskemethy, Mohammed Jouni und Heike Kammer. Im Gespräch wurden
          strukturelle Hürden, pädagogische Antworten und politische Handlungsbedarfe beleuchtet.
        </p>
        <p className='text-lg pb-14'>
          Im Anschluss luden zwei <b>Workshops</b> zur Vertiefung ein: Mohammed Jouni gestaltete
          einen Workshop zu diskriminierungskritischer Bildungsarbeit – mit Fokus auf Machtkritik
          und Sprache. Milo Al Ezairej führte durch <i>Performing Identity</i> – einen Workshop, der
          Drag, Bewegung und Storytelling als kreative Werkzeuge für Fragen von Identität,
          Zugehörigkeit und Ausdruck von Gefühlen nutzte.
        </p>
        {referentInnen.map((referent) => (
          <PanelSpeaker key={referent.name} {...referent} />
        ))}

        {/* Reflexion */}
        <h3 className='text-xl pb-10 pt-28 font-bold'>Reflexion</h3>
        <p className='text-lg pb-10'>
          Drei Leitfragen begleiteten uns durch den Tag und luden zur kontinuierlichen Reflexion
          ein:
        </p>
        <p className='text-lg pb-10 italic'>
          Wo begegnet uns Ungerechtigkeit in der eigenen Arbeit – und was bedeutet
          (Un-)Gerechtigkeit überhaupt?
        </p>
        <p className='text-lg pb-10'>
          Diese erste Frage öffnete den Raum für eine gemeinsame Begriffsklärung und den Blick auf
          gelebte Realitäten im pädagogischen Alltag.
        </p>
        <p className='text-lg pb-10'>
          Die zweite Frage richtete den Fokus auf die konkret-praktische Ebene:
        </p>
        <p className='text-lg pb-10 italic'>
          Welche Handlungsmöglichkeiten nehmt ihr aus dem heutigen Tag mit?
        </p>
        <p className='text-lg pb-10'>
          Die dritte schließlich weitete den Blick über den individuellen Handlungsrahmen hinaus:
        </p>
        <p className='text-lg pb-10 italic'>
          Welche Forderungen ergeben sich aus den Erkenntnissen des Tages an Politik und
          Institutionen?
        </p>
        <p className='text-lg pb-14'>
          Damit verknüpfte die Konferenz drei Ebenen – das eigene Verständnis, das konkrete Handeln
          und den strukturellen Wandel – und machte deutlich, dass Bildungsgerechtigkeit auf allen
          drei zugleich gedacht und umgesetzt werden muss.
        </p>
        <p className='text-lg pb-14'>
          Unser herzlicher Dank gilt der <b>Doris-Wuppermann-Stiftung</b> für die Förderung, dem{' '}
          <b>Pulsraum</b> für die Gastfreundschaft sowie allen Mitwirkenden und Teilnehmenden, die
          diesen Tag mit Leben gefüllt haben.
        </p>

        {/* Partner Logos */}
        <div className='flex justify-center items-center pb-32'>
          {partnerLogos.map((logo, index) => (
            <div key={index} className='flex w-1/2 justify-center px-5 py-3'>
              <Image src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Bildungskonferenz2026;

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
