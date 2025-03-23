import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Container from '../components/Container';

const Datenschutz = () => {
  return (
    <div
      className={`fixed z-50 h-screen min-h-[600px] w-screen overflow-scroll bg-lightYellow pt-24 transition-all duration-700 ease-out sm:pt-36 lg:pt-24 
      `}
    >
      {/* Container */}
      <Container styling='overflow-scroll'>
        {/* Header */}
        <div className='flex justify-between'>
          <div className='text-center font-berlin text-2xl'>Satzung Bund-fiB gUG</div>
          {/* <FontAwesomeIcon
            // onClick={toggleDatenschutz}
            className='h-8 cursor-pointer'
            icon={faXmark}
          /> */}
        </div>
        {/* Text */}{' '}
        <div>
          <br />
          <br />
          <br />
          <br />
          Die Gesellschaft verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne des
          Abschnitts "Steuerbegünstigte Zwecke" der Abgabenordnung. Die Körperschaft ist selbstlos
          tätig; sie verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke. Zweck der
          Gesellschaft ist die Förderung der Erziehung, Volks- und Berufsbildung, einschließlich der
          Studentenhilfe. Die Gesellschaft verwirklicht ihre Satzungszwecke insbesondere durch
          Betrieb von einem Bildungsinstitut, die Organisation und Durchführung von Lernförderung
          von Schülern und Schülerinnen eine allgemeine und berufliche Schule, interne Fortbildungen
          der Tutoren und Tutorinnen, Übersetzungshilfen bei Verständnisproblemen durch
          Sprachbarrieren, Vereinfachung von Informationsmaterialien, Abbau von
          Kommunikationsbarrieren, durch Sprachmittlung, sowie die Entwicklung und Einsatz von
          digitalen Medien, Unterstützung bei offiziellen Antragsstellungen, Bereitstellung von
          Lehrmaterialien, Entwicklung von Lösungsvorschlägen für die Integration in den
          Regelunterricht, Bildung in einem engen demokratischen Verständnis, Aufklärungsgespräche
          mit den Erziehungsberechtigten.
        </div>
      </Container>
    </div>
  );
};

export default Datenschutz;
