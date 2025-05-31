'use client';

import NavBar from '../../components/Layout/NavBar';
import Footer from '../../components/Layout/Footer';
import Container from '../../components/Container';
import ContactPersonCard from '../../components/ContactPersonCard';
import ProjectTitleSection from '../../components/Layout/ProjectTitleSection';

const LernfoerderungBerlin = () => {
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
          <p className='pb-20 pt-20  text-lg'>
            Manchmal brauchen Kinder zusätzliche Unterstützung, um in der Schule erfolgreich zu
            sein. Unsere ergänzende Lernförderung hilft gezielt dabei, Lernlücken zu schließen und
            schulische Herausforderungen zu meistern.
          </p>
          <h3 className='text-2xl py-10 font-bold'>Individuelle Förderung am vertrauten Lernort</h3>
          <p className='text-lg pb-20'>
            Unsere qualifizierten Fachkräfte unterstützen Schülerinnen und Schüler direkt an ihrer
            Schule – in kleinen Gruppen von maximal sechs Kindern. So wird das Lernen in einer
            gewohnten Umgebung erleichtert und zusätzliche Wege entfallen. Die Förderung kann
            während des Ganztags oder im Nachmittagsbereich stattfinden.
          </p>
          <h3 className='text-2xl py-10 font-bold'>Erfahrene Fachkräfte und bewährte Methoden</h3>
          <p className='text-lg pb-20'>
            Unsere Fachkräfte bringen umfangreiche pädagogische Erfahrung mit und nutzen Methoden
            aus der Montessoripädagogik, Lerntherapie und einer individuellen Stärkenorientierung,
            um gezielt auf die Fähigkeiten und Bedürfnisse der Kinder einzugehen. Dabei arbeiten sie
            eng mit den Lehrkräften der Schule zusammen und erstellen regelmäßig Lernberichte, um
            den Fortschritt transparent zu machen.
          </p>
          <h3 className='text-2xl py-10 font-bold'>Für wen ist die Förderung geeignet?</h3>
          <p className='text-lg pb-20'>
            Die ergänzende Lernförderung ist Teil des Bildungs- und Teilhabepakets und kann in
            Anspruch genommen werden, wenn ein gültiger &quot;berlinpass-BuT&quot; vorliegt und die
            Schulleitung den Bedarf bestätigt. In der Regel sind bis zu zwei Doppelstunden pro Woche
            möglich.
          </p>
          <h3 className='text-2xl py-10 font-bold'>Unser Standort in Berlin</h3>
          <p className='text-lg pb-10'>
            Unsere Räumlichkeiten in Berlin finden sich im Herzen der Stadt in dem Bezirk Mitte, in
            der Rheinsberger Straße 7. Von dort aus verwalten und gestalten wir die Projekte in
            Berlin und denken, da es sich um unser Hauptquartier handelt, den Bund-fiB weiter.
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
