'use client';

import NavBar from '../../components/Layout/NavBar';
import Footer from '../../components/Layout/Footer';
import Container from '../../components/Container';
import ContactPersonCard from '../../components/ContactPersonCard';
import ProjectTitleSection from '../../components/Layout/ProjectTitleSection';
import { useStore } from '../../src/store';

const LernfoerderungLeipzig = () => {
  return (
    <>
      <NavBar />
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        <ProjectTitleSection
          title='Lernförderung Leipzig'
          subtitle='Individuelle Lernförderung – Zuhause, flexibel & nachhaltig'
          image='/images/Bild3LernförerungLeipzig.jpeg'
        />
        {/* Content */}
        <Container>
          {/* Text */}
          <p className='pb-10 pt-20  text-lg'>
            Lernen, wo man sich wohlfühlt: In enger Abstimmung mit Schule und Eltern findet unsere
            Einzelförderung direkt bei den Familien zu Hause statt. Dabei bauen wir auf eine
            strukturierte Lernatmosphäre, die nachhaltige Fortschritte ermöglicht. Mit 90 Minuten
            pro Woche schaffen wir eine feste Lernroutine, stärken das Verständnis und lockern das
            Ganze mit spielerischen Elementen auf. Die Eltern sind selbstverständlich miteingebunden
            – die Terminplanung klären Tutor*in und Eltern direkt.
          </p>
          <h3 className='text-xl py-5 font-bold'>
            Flexibilität für unsere Tutor*innen & Lernen auf Augenhöhe
          </h3>
          <p className='text-lg pb-10'>
            Keine starren Dienstpläne, sondern selbstbestimmtes Arbeiten: Unsere Tutor*innen
            organisieren ihre Stunden eigenverantwortlich. Ob Studierende, Quereinsteiger*innen oder
            erfahrene Pädagog*innen – alle bringen ihre Stärken ein. Noten sind nicht alles – wir
            setzen auf nachhaltiges Lernen. Unsere Tutor*innen gehen individuell auf die Kinder ein,
            unterstützen sie in verschiedenen Fächern oder bei praktischen Fragen des Alltags. Dabei
            entsteht oft mehr als Nachhilfe: Eine verlässliche Bezugsperson, die den Bildungsweg
            langfristig begleitet.
          </p>
          <h3 className='text-xl py-5 font-bold'>Bildung als Erlebnis</h3>
          <p className='text-lg pb-10'>
            Lernen hört nicht an der Schultür auf! In den Ferien organisieren wir Ausflüge, in und
            um Leipzig, um die Umgebung auf spannende Weise zu entdecken – von Natur bis Kultur.
            Denn Bildung soll Spaß machen und Neugier wecken! Auch Kreativ, - oder Sportworkshops
            sind Teil des wiederkehrenden Ferienprogrammes.
          </p>

          <h3 className='text-xl py-5 font-bold'>Unser Standort in Leipzig</h3>
          <p className='text-lg pb-10'>
            Bildung funktioniert am besten gemeinsam! In unserem Office am Floßplatz 11 gibt es
            regelmäßige Treffen, Materialsammlungen und fachliche Begleitung. Hier tauschen sich
            unsere Tutor*innen aus und holen sich Inspiration und Unterstützung.
          </p>
        </Container>
        {/* Contact Person Card with Map */}
        <Container>
          <ContactPersonCard
            person={{
              image: '/images/mitarbeiter/NathalieThorleuchter.jpeg',
              name: 'Nathalie Thorleuchter',
              phone: '+49 17611842230',
              email: 'nathalie.thorleuchter@bund-fib.de',
            }}
            project='für die Lernförderung Leipzig'
            address='Floßplatz 11, 04107 Leipzig, Germany'
          />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default LernfoerderungLeipzig;
