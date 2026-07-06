import Container from '@/components/Container';
import ProjectTitleSection from '@/components/Layout/ProjectTitleSection';
import Gallery from './components/Gallery';

export const metadata = {
  title: 'Ferienschule für integrative Bildung',
  description:
    'Ferienangebote für geflüchtete Kinder und Jugendliche an den Standorten Leipzig und Hannover: Mit Ausflügen, Kreativ- und Sportangeboten sowie Workshops überbrückt der Bund-fiB in enger Zusammenarbeit mit den Gemeinschaftsunterkünften die sechswöchige Sommerferienzeit.',
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
          <p className='text-lg pb-32  pt-32'>
            In unserer Arbeit in den Standorten Leipzig und Hannover begegnen wir jeden Sommer der
            langen Ferienzeit mit kleineren oder größeren Ferienangeboten. Von Ausflügen, Kreativ,-
            und Sportangeboten bis hin zu Workshops arbeiten wir eng mit den
            Gemeinschaftsunterkünften zusammen, um die sechs Wochen zu überbrücken und den
            Teilnehmenden Programm zu bieten.
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
