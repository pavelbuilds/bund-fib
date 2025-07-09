'use client';

import NavBar from '../../components/Layout/NavBar';
import Footer from '../../components/Layout/Footer';
import Container from '../../components/Container';
import ContactPersonCard from '../../components/ContactPersonCard';
import ProjectTitleSection from '../../components/Layout/ProjectTitleSection';
import { useStore } from '../../src/store';

const LernfoerderungHannover = () => {
  return (
    <>
      <NavBar />
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        <ProjectTitleSection
          title='Lernförderung Hannover'
          subtitle='Individuelle Lernförderung an Schulen und in privaten Haushalten'
          image='/images/Bild2LernförderungHannover.jpg'
        />
        {/* Content */}
        <Container>
          {/* Text */}
          <p className='pb-10 pt-20 text-lg'>
            Direkt vor Ort, mittendrin im Schulalltag: Unsere Lernförderung in Hannover findet
            direkt an den Schulen statt – in kleinen Gruppen mit maximal vier Kindern. So schaffen
            wir eine gezielte Förderung in einer vertrauten Umgebung. Manche Kinder brauchen aber
            noch mehr Fokus, deshalb bieten wir auch Einzelförderung an. Ob im Klassenraum oder bei
            einem Lernspaziergang auf dem Schulhof – wir gestalten Lernen flexibel und wirkungsvoll.
            Gemeinsam mit den Lehrkräften setzen wir genau da an, wo Unterstützung gebraucht wird.
          </p>
          <h3 className='text-xl py-5 font-bold'>Lernförderung im eigenen Zuhause</h3>
          <p className='text-lg pb-10'>
            Zu Hause lernt es sich manchmal einfach am besten! In enger Abstimmung mit Schule und
            Eltern fördern wir Kinder in ihrem gewohnten Umfeld. Dabei schaffen wir eine
            strukturierte Lernatmosphäre, die nachhaltige Fortschritte ermöglicht. Die
            Terminplanung? Ganz flexibel in Absprache mit den Eltern!
          </p>
          <h3 className='text-xl py-5 font-bold'>
            Unsere Tutor*innen – engagiert, qualifiziert & flexibel
          </h3>
          <p className='text-lg pb-10'>
            Unsere Tutorinnen bringen nicht nur Wissen mit, sondern auch Herzblut! Sie arbeiten
            eigenverantwortlich, ohne starre Dienstpläne, und organisieren ihre Stunden flexibel.
            Gemeinsam sorgen wir dafür, dass Lernen nachhaltig wirkt – und mehr ist als reine
            Nachhilfe.
          </p>
          <h3 className='text-xl py-5 font-bold'>
            Bildung als Erlebnis – Ferienprogramme für Kinder
          </h3>
          <p className='text-lg pb-10'>
            Ferien sind zum Erleben da! Deshalb bieten wir spannende Programme an, die Kinder ihre
            Stadt und Umgebung neu entdecken lassen. Ob Sealife, Kegeln oder kreative Workshops –
            wir verbinden Spaß mit wertvollen Lernmomenten.
          </p>
          <h3 className='text-xl py-5 font-bold'>Unser Standort in Hannover</h3>
          <p className='text-lg pb-10'>
            Du findest uns mitten in der Calenberger Neustadt, in einem gemütlichen Hinterhof im
            Co-Working-Space Studiö. Hier tüfteln wir an neuen Projekten und tauschen uns in
            kreativer Atmosphäre aus – immer mit dem Ziel, Kindern die bestmögliche Förderung zu
            ermöglichen.
          </p>
        </Container>
        {/* Contact Person Card with Map */}
        <Container>
          <ContactPersonCard
            person={{
              image: '/images/mitarbeiter/Ben.png',
              name: 'Benedict Hepp',
              phone: '+49 176 84919977',
              email: 'benedict.hepp@bund-fib.de',
            }}
            project='für die Lernförderung Hannover'
            address='Oeltzenstraße 13a, 30169 Hannover, Germany'
          />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default LernfoerderungHannover;
