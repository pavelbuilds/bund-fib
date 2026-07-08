import Container from '@/components/Container';
import ProjectTitleSection from '@/components/Layout/ProjectTitleSection';
import Gallery from './components/Gallery';

export const metadata = {
  title: 'Ferienschule für integrative Bildung',
  description:
    'Als Träger der Berliner Ferienschulen bietet der Bund-fiB in den Oster-, Sommer- und Herbstferien kostenfreie Ferienprogramme für Kinder und Jugendliche mit Flucht- und Migrationserfahrung an – mit alltagsintegrierter Sprachförderung, kultureller Bildung und Gemeinschaft.',
};

const FerienschuleFuerIntegrativeBildung = () => {
  return (
    <>
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        <ProjectTitleSection
          title={`Ferienschulen für integrative Bildung `}
          image='/ferienschule/Bild11.jpg'
          imageStyle='center 50% '
        />
        {/* Content */}
        <Container>
          <p className='text-lg pt-32'>
            &quot;Fit für die Schule plus – Berliner Ferienschulen – Sprachförderung, Bildung und
            Teilhabe für geflüchtete Kinder und Jugendliche&quot; ist ein Programm der Deutschen
            Kinder- und Jugendstiftung, gefördert durch die Senatsverwaltung für Bildung, Jugend
            und Familie des Landes Berlin.
          </p>
          <p className='text-lg pt-10'>
            Als Träger der Berliner Ferienschulen bietet der Bund für integrative Bildung in den
            Oster-, Sommer- und Herbstferien kostenfreie Ferienprogramme für Kinder und Jugendliche
            mit Flucht- und Migrationserfahrung an. Im Mittelpunkt stehen eine alltagsintegrierte
            Sprachförderung durch qualifizierte DaZ-/DaF-Fachkräfte, gemeinsames Lernen und ein
            abwechslungsreiches Ferienprogramm.
          </p>
          <p className='text-lg pt-10'>
            Die Kinder verbringen täglich mehrere Stunden in einer festen Gruppe. Gemeinsam wird
            frisch gekocht, gespielt, kreativ gearbeitet und Berlin erkundet. Kunst-, Theater-,
            Musik- und Performanceangebote, Bewegungs- und Sportangebote sowie Ausflüge schaffen
            vielfältige Sprechanlässe und fördern sprachliche, soziale und kreative Kompetenzen
            gleichermaßen.
          </p>
          <p className='text-lg pt-10 pb-32'>
            Unsere Berliner Ferienschulen verbinden Sprachförderung, kulturelle Bildung und
            Gemeinschaft in einer wertschätzenden, diskriminierungssensiblen Lernumgebung, in der
            Kinder und Jugendliche ihre Stärken entdecken, neue Freundschaften schließen und ihre
            Ferien aktiv mitgestalten können.
          </p>
        </Container>
        {/* Image Gallery */}
        <Container>
          <Gallery />
        </Container>
      </div>
    </>
  );
};

export default FerienschuleFuerIntegrativeBildung;
