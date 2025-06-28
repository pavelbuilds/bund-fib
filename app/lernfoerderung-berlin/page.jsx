'use client';

import NavBar from '../../components/Layout/NavBar';
import Footer from '../../components/Layout/Footer';
import Container from '../../components/Container';
import ContactPersonCard from '../../components/ContactPersonCard';
import ProjectTitleSection from '../../components/Layout/ProjectTitleSection';
import { useStore } from '../../src/store';

const LernfoerderungBerlin = () => {
  const { cookiesAccepted, setShowCookieConsent } = useStore();

  return (
    <>
      <NavBar />
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        <ProjectTitleSection
          title='Lernförderung Berlin'
          subtitle='Ergänzende Lernförderung – Unterstützung für Ihr Kind'
        />
        {/* Content */}
        <Container>
          {/* Text */}
          <p className='pb-10 pt-20  text-lg'>
            Manchmal brauchen Kinder zusätzliche Unterstützung, um in der Schule erfolgreich zu
            sein. Unsere ergänzende Lernförderung hilft gezielt dabei, Lernlücken zu schließen und
            schulische Herausforderungen zu meistern.
          </p>
          <h3 className='text-xl py-5 font-bold'>Individuelle Förderung am vertrauten Lernort</h3>
          <p className='text-lg pb-10'>
            Unsere qualifizierten Fachkräfte unterstützen Schülerinnen und Schüler direkt an ihrer
            Schule – in kleinen Gruppen von maximal sechs Kindern. So wird das Lernen in einer
            gewohnten Umgebung erleichtert und zusätzliche Wege entfallen. Die Förderung kann
            während des Ganztags oder im Nachmittagsbereich stattfinden.
          </p>
          <h3 className='text-xl py-5 font-bold'>Erfahrene Fachkräfte und bewährte Methoden</h3>
          <p className='text-lg pb-10'>
            Unsere Fachkräfte bringen umfangreiche pädagogische Erfahrung mit und nutzen Methoden
            aus der Montessoripädagogik, Lerntherapie und einer individuellen Stärkenorientierung,
            um gezielt auf die Fähigkeiten und Bedürfnisse der Kinder einzugehen. Dabei arbeiten sie
            eng mit den Lehrkräften der Schule zusammen und erstellen regelmäßig Lernberichte, um
            den Fortschritt transparent zu machen.
          </p>
          <h3 className='text-xl py-5 font-bold'>Für wen ist die Förderung geeignet?</h3>
          <p className='text-lg pb-10'>
            Die ergänzende Lernförderung ist Teil des Bildungs- und Teilhabepakets und kann in
            Anspruch genommen werden, wenn ein gültiger &quot;berlinpass-BuT&quot; vorliegt und die
            Schulleitung den Bedarf bestätigt. In der Regel sind bis zu zwei Doppelstunden pro Woche
            möglich.
          </p>
          <h3 className='text-xl py-5 font-bold'>Unser Standort in Berlin</h3>
          <p className='text-lg pb-10'>
            Unsere Räumlichkeiten in Berlin finden sich im Herzen der Stadt in dem Bezirk Mitte, in
            der Rheinsberger Straße 7. Von dort aus verwalten und gestalten wir die Projekte in
            Berlin und denken, da es sich um unser Hauptquartier handelt, den Bund-fiB weiter.
          </p>
        </Container>
        {/* Map */}
        <Container>
          {cookiesAccepted ? (
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.0488843559123!2d13.397145776939611!3d52.53262673527145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e6a8c5a6c7%3A0x3c7e7d1e0c6d6c0a!2sRheinsberger%20Str.%207%2C%2010115%20Berlin!5e0!3m2!1sen!2sde!4v1689324001882!5m2!1sen!2sde'
              width='100%'
              height='450'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='mb-10 mt-10'
            ></iframe>
          ) : (
            <div className='h-[450px] p-10 bg-gray-500 rounded-lg flex justify-center items-center mb-10 mt-10'>
              <p className='text-center'>
                Bitte akzeptieren Sie die Verwendung von Cookies, um die Google Maps-Karte
                anzuzeigen.{' '}
                <span
                  className='underline cursor-pointer'
                  onClick={() => setShowCookieConsent(true)}
                >
                  hier clicken um Cookie-Einstellungen zu ändern
                </span>
              </p>
            </div>
          )}
          <p className='text-lg pb-10'>
            Bund-fiB gUG <br />
            Rheinsberger Straße 7 b <br />
            10115 Berlin
          </p>
        </Container>
        {/* Contact Person Card */}
        <Container>
          <ContactPersonCard
            person={{
              image: '/images/mitarbeiter/soeren_ansprechpartner.jpeg',
              name: 'Sören Dübel',
              phone: '+49 15758756855',
              email: 'soeren.duebel@bund-fib.de',
            }}
            project='für die Lernförderung Berlin'
          />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default LernfoerderungBerlin;
