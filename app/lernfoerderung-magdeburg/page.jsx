'use client';

import NavBar from '../../components/Layout/NavBar';
import Footer from '../../components/Layout/Footer';
import Container from '../../components/Container';
import ContactPersonCard from '../../components/ContactPersonCard';
import ProjectTitleSection from '../../components/Layout/ProjectTitleSection';
import { useStore } from '../../src/store';

const LernfoerderungMagdeburg = () => {
  return (
    <>
      <NavBar />
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        <ProjectTitleSection
          title='Lernförderung Magdeburg'
          subtitle='Individuelle Deutsch- und Leseförderung im Rahmen des BuT-Packetes und des Startchancenprogramm'
        />
        {/* Content */}
        <Container>
          {/* Text */}
          <p className='pb-10 pt-20 text-lg'>
            Unsere ergänzende Lernförderung hilft gezielt dabei, Lernlücken zu schließen und
            schulische Herausforderungen zu meistern – mit starken Partnern an unserer Seite!
          </p>
          <h3 className='text-xl py-5 font-bold'>
            Starke Kooperationen für bessere Bildung
          </h3>
          <p className='text-lg pb-10'>
            In Magdeburg arbeiten wir Hand in Hand mit verlässlichen Partnern: In enger
            Zusammenarbeit mit der Stadt Magdeburg, der Integrationsbeauftragten der Stadt und der
            Universität Magdeburg arbeiten wir daran Bildungsgerechtigkeit und Chancengleichheit
            herzustellen. Besonders wichtig ist daher auch unsere Kooperation mit der Universität,
            die uns qualifizierte Tutor*innen zur Seite stellt.
          </p>
          <h3 className='text-xl py-5 font-bold'>
            Individuelle Förderung am vertrauten Lernort
          </h3>
          <p className='text-lg pb-10'>
            Unsere qualifizierten Fachkräfte und Tutor*innen unterstützen Kinder und Jugendliche
            direkt in der Schule – in kleinen Gruppen von maximal fünf Schüler*innen. So wird das
            Lernen in einer gewohnten Umgebung erleichtert und zusätzliche Wege entfallen. Die
            Förderung kann während des Ganztags oder im Nachmittagsbereich stattfinden. Die enge
            Kooperation mit den Schulen ermöglicht, die zusätzliche Lernförderung nahtlos an den
            Schulalltag anzupassen und Lernlücken effektiv zu schließen.
          </p>
          <p className='text-lg pb-10'>
            Außerdem haben wir in der Lübecker Straße ein Lernstudio, dass Kindern und Jugendlichen
            auch ermöglicht außerschulische Lernförderangebote wahrzunehmen.
          </p>
          <h3 className='text-xl py-5 font-bold'>
            Erfahrene Fachkräfte und bewährte Methoden
          </h3>
          <p className='text-lg pb-10'>
            Unsere Fachkräfte und universitären Tutor*innen bringen umfangreiche pädagogische
            Erfahrung mit und nutzen Methoden aus der Montessoripädagogik, Lerntherapie und einer
            individuellen Stärkenorientierung, um gezielt auf die Fähigkeiten und Bedürfnisse der
            Kinder einzugehen. Dabei arbeiten sie eng mit den Lehrkräften der Schule zusammen.
          </p>
          <h3 className='text-xl py-5 font-bold'>
            Unser Lerntagebuch – Erfolge sichtbar machen
          </h3>
          <p className='text-lg pb-10'>
            Eine besondere Innovation unserer Arbeit ist das eigens entwickelte Lerntagebuch. Damit
            dokumentieren wir nicht nur den Lernstand und die Fortschritte der Kinder, sondern geben
            sowohl den Schülerinnen als auch den Tutorinnen ein gutes Gefühl für das Erlernte.
            Regelmäßige Lernberichte machen den Fortschritt für alle Beteiligten transparent und
            schaffen eine solide Grundlage für die weitere Förderung.
          </p>
          <h3 className='text-xl py-5 font-bold'>
            Für wen ist die Förderung geeignet?
          </h3>
          <p className='text-lg pb-10'>
            Die ergänzende Lernförderung ist Teil des Bildungs- und Teilhabepakets und kann in
            Absprache mit der Schulleitung Anspruch genommen werden, wenn die entsprechenden
            Voraussetzungen vorliegen.
          </p>
          <h3 className='text-xl py-5 font-bold'>Unser Standort Magdeburg</h3>
          <p className='text-lg pb-10'>
            Unser Büro sowie das Lernstudio befinden sich in der Lübecker Straße 10 im Zentrum von
            Magdeburg.
          </p>
        </Container>
        {/* Contact Person Card with Map */}
        <Container>
          <ContactPersonCard
            person={{
              image: '/images/mitarbeiter/Soeren.png',
              name: 'Sören Dübel',
              phone: '015758745855',
              email: 'soeren.duebel@bund-fib.de',
            }}
            project='für die Lernförderung Magdeburg'
            address='Lübecker Straße 10, 39124 Magdeburg, Germany'
          />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default LernfoerderungMagdeburg;
