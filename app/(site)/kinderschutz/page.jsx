import Container from '@/components/Container';
import ProjectTitleSection from '@/components/Layout/ProjectTitleSection';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'Kinderschutz',
  description:
    'Der Schutz des Kindeswohls ist zentraler Bestandteil der Arbeit des Bund-fiB. Unser Schutzkonzept nach § 8a SGB VIII schafft sichere Lern- und Begegnungsräume für Kinder und Jugendliche – hier finden Sie das Kinderschutzkonzept und unsere Ansprechpersonen.',
};

const contactPersons = [
  {
    name: 'Benedict Hepp',
    image: '/images/mitarbeiter/Ben.png',
    phone: '+49 176 84919977',
    email: 'benedict.hepp@bund-fib.de',
  },
  {
    name: 'Lars Mikeler',
    image: '/images/mitarbeiter/Lars.png',
    phone: '+49 1578 1284853',
    email: 'lars.mikeler@bund-fib.de',
  },
];

const Kinderschutz = () => {
  return (
    <>
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        <ProjectTitleSection title='Kinderschutz' image='/images/title.jpg' />
        {/* Content */}
        <Container>
          {/* Intro */}
          <p className='pb-10 pt-20 text-lg'>
            Kinder und Jugendliche gehören zu den besonders schutzbedürftigen Mitgliedern unserer
            Gesellschaft. Sie brauchen verlässliche Strukturen und Erwachsene, die aufmerksam
            handeln und Verantwortung übernehmen. Der Schutz ihres Wohls ist daher ein zentraler
            Bestandteil unserer Arbeit beim Bund-fiB.
          </p>
          <p className='pb-20 text-lg'>
            In unseren Angeboten möchten wir sichere Lern- und Begegnungsräume schaffen. Kinder und
            Jugendliche sollen sich bei uns respektiert, geschützt und ernst genommen fühlen. Wir
            achten darauf, mögliche Belastungen oder Gefährdungen frühzeitig wahrzunehmen und
            angemessen zu handeln. Dabei verstehen wir uns als Teil des Netzwerks der Kinder- und
            Jugendhilfe und arbeiten bei Bedarf mit weiteren Fachstellen zusammen.
          </p>

          {/* Unser Auftrag */}
          <div className='w-10 h-[5px] bg-primary mb-5'></div>
          <h3 className='text-2xl pb-10 pt-4 font-bold'>Unser Auftrag</h3>
          <p className='pb-20 text-lg'>
            Der Schutz des Kindeswohls ist eine zentrale Aufgabe der Kinder- und Jugendhilfe. Auch
            wir als Bund-fiB nehmen diesen Auftrag sehr ernst. Grundlage dafür ist § 8a SGB VIII,
            der freie Träger verpflichtet, mögliche Gefährdungen frühzeitig wahrzunehmen und
            fachlich einzuschätzen. Ziel ist es, Risiken rechtzeitig zu erkennen und gemeinsam mit
            den Personensorgeberechtigten passende Unterstützungsmöglichkeiten zu finden. Unsere
            Kinderschutzbeauftragten und insoweit erfahrenen Fachkräfte Ben und Lars unterstützen
            die Mitarbeitenden dabei, Situationen fachlich zu bewerten und verantwortungsvolle
            Schritte einzuleiten.
          </p>

          {/* Ein gelebtes Schutzkonzept */}
          <div className='w-10 h-[5px] bg-primary mb-5'></div>
          <h3 className='text-2xl pb-10 pt-4 font-bold'>Ein gelebtes Schutzkonzept</h3>
          <p className='pb-10 text-lg'>
            Unser Schutzkonzept basiert auf einer Risikoanalyse und klaren Leitlinien für den
            Umgang mit sensiblen Situationen. Dazu gehören verbindliche Verhaltensregeln sowie ein
            Ablaufplan für den Umgang mit möglichen Anzeichen einer Kindeswohlgefährdung. Das
            Konzept wird regelmäßig reflektiert und weiterentwickelt. Es soll unseren
            Mitarbeitenden Orientierung und Handlungssicherheit geben und gleichzeitig den Schutz
            der Kinder und Jugendlichen in unseren Angeboten stärken. So schaffen wir Transparenz,
            Verlässlichkeit und eine gemeinsame Verantwortung für den Kinderschutz.
          </p>

          {/* Download Button */}
          <div className='flex flex-col items-center justify-center py-10 my-10 bg-white rounded-3xl shadow-xl'>
            <h3 className='text-2xl font-bold mb-8 text-center px-6'>
              Kinderschutzkonzept des Bund-fiB
            </h3>
            <a
              href='/Kinderschutz-Konzept_Bund-fiB.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col items-center group'
            >
              <FontAwesomeIcon
                className='text-primary mb-6 group-hover:scale-110 transition-transform duration-300'
                icon={faFilePdf}
                style={{ fontSize: '5rem' }}
              />
              <button className='bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300'>
                Kinderschutzkonzept herunterladen
              </button>
            </a>
          </div>

          {/* Kontakt */}
          <div className='w-10 h-[5px] bg-primary mb-5 mt-20'></div>
          <h3 className='text-2xl pb-4 pt-4 font-bold'>Kontakt</h3>
          <p className='pb-10 text-lg'>Ben und Lars</p>

          <div className='flex flex-col gap-8 pb-32'>
            {contactPersons.map((person) => (
              <div
                key={person.name}
                className='flex w-full flex-col sm:flex-row items-center bg-[rgba(255,255,255,0.3)] rounded-[30px] py-10 px-10 shadow-[0_0_80px_rgba(0,0,0,0.05)]'
              >
                {/* Person Image */}
                <div className='w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0'>
                  <Image
                    src={person.image}
                    className='w-full h-full object-cover object-top'
                    alt={person.name}
                    width={128}
                    height={128}
                  />
                </div>
                {/* Details */}
                <div className='flex flex-col mt-10 sm:mt-0 sm:ml-8 md:ml-12'>
                  <div className='md:text-2xl text-lg font-medium text-center sm:text-left'>
                    {person.name}
                  </div>
                  <div className='md:text-lg text-sm flex items-center pt-8 md:pt-5'>
                    <FontAwesomeIcon className='mr-6 text-xl md:text-2xl' icon={faPhone} />
                    <a href={`tel:${person.phone}`} className='hover:underline'>
                      {person.phone}
                    </a>
                  </div>
                  <div className='md:text-lg text-sm flex items-center pt-3 md:pt-3'>
                    <FontAwesomeIcon className='mr-6 text-xl md:text-2xl' icon={faEnvelope} />
                    <a href={`mailto:${person.email}`} className='hover:underline'>
                      {person.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Kinderschutz;
