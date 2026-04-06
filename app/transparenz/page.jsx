'use client';

import NavBar from '../../components/Layout/NavBar';
import Footer from '../../components/Layout/Footer';
import Container from '../../components/Container';
import ProjectTitleSection from '../../components/Layout/ProjectTitleSection';
import Link from 'next/link';

const Transparenz = () => {
  return (
    <>
      <NavBar />
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        <ProjectTitleSection title='Transparenz' image='/images/title.jpg' />
        {/* Content */}
        <Container>
          <p className='pb-16 pt-20 text-lg'>
            Dem Bund-fiB ist Transparenz ein wichtiges Anliegen. Aus diesem Grund unterstützen wir
            die Initiative Transparente Zivilgesellschaft und folgen der freiwilligen
            Selbstverpflichtung zur Transparenz. Nach den Richtlinien der Initiative präsentieren
            wir an dieser Stelle eine Übersicht in zehn Punkten über die Herkunft unserer Mittel,
            deren Verwendung sowie Informationen zu unseren Entscheidungsträgern.
          </p>

          {/* 1. Name, Sitz, Anschrift und Gründungsjahr */}
          <div className='w-10 h-[5px] bg-primary mb-5'></div>
          <h3 className='text-2xl pb-6 font-bold'>1. Name, Sitz, Anschrift und Gründungsjahr</h3>
          <p className='text-lg'>
            Bund-fiB gUG
            <br />
            Schwedenstraße 17
            <br />
            13357 Berlin
            <br />
            Gründungsjahr: 2022
          </p>
          <p className='text-lg pt-4'>Registergericht: Amtsgericht Charlottenburg</p>
          <p className='text-lg pt-4'>Vereinsregisternummer: HRB 242170 B</p>
          <p className='text-lg pt-4 font-semibold'>Zuständige Ansprechpartner*in:</p>
          <p className='text-lg'>Sören Dübel (Gesellschafter und Geschäftsführung)</p>
          <p className='text-lg'>Benedict Hepp (Gesellschafter und Geschäftsführung)</p>
          <p className='text-lg pb-16'>Lars Mikeler (Gesellschafter und Geschäftsführung)</p>

          {/* 2. Vollständige Satzung sowie Angaben zu den Zielen unserer Organisation */}
          <div className='w-10 h-[5px] bg-primary mb-5'></div>
          <h3 className='text-2xl pb-6 font-bold'>
            2. Vollständige Satzung sowie Angaben zu den Zielen unserer Organisation
          </h3>
          <ul className='text-lg pb-16 list-disc pl-6'>
            <li>
              <a
                href='/SatzungBund-fiB.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:no-underline'
              >
                Satzung
              </a>
            </li>
            <li>
              <Link href='/#ueberuns' className='underline hover:no-underline'>
                Über uns
              </Link>
            </li>
            <li>
              <a
                href='/Leitbild_Bund-fiB.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:no-underline'
              >
                Leitbild Bund-fiB
              </a>
            </li>
          </ul>

          {/* 3. Angaben zur Steuerbegünstigung */}
          <div className='w-10 h-[5px] bg-primary mb-5'></div>
          <h3 className='text-2xl pb-6 font-bold'>3. Angaben zur Steuerbegünstigung</h3>
          <p className='text-lg font-semibold pb-2'>Feststellung:</p>
          <p className='text-lg pb-4'>Umfang der Steuerbefreiung</p>
          <p className='text-lg pb-4'>
            Die Körperschaft ist teilweise nach Paragraph 5 Abs. 1 Nr. 9 KStG von der
            Körperschaftssteuer befreit.
          </p>
          <p className='text-lg font-semibold pb-2'>Hinweise zu Steuer Begünstigten Zwecken:</p>
          <p className='text-lg pb-4'>
            Die Körperschaft fordert im Sinne der Paragraphe 51 ff. AO ausschließlich und
            unmittelbar folgende gemeinnützige Zwecke:
          </p>
          <ul className='text-lg pb-4 list-disc pl-6'>
            <li>Förderung der Erziehung (Paragraph 52 Abs. 2 Satz 1 Nummer 7 AO)</li>
            <li>
              Förderung der Volks- und Berufsbildung einschließlich der Studentenhilfe (Paragraph
              52 Abs. 2 Satz 1 Nummer 7 AO)
            </li>
          </ul>
          <p className='text-lg pb-16'>
            <a
              href='/Freistellungsbescheid_2026.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:no-underline'
            >
              Freistellungsbescheid
            </a>
          </p>

          {/* 4. Name und Funktion wesentlicher Entscheidungsträger */}
          <div className='w-10 h-[5px] bg-primary mb-5'></div>
          <h3 className='text-2xl pb-6 font-bold'>
            4. Name und Funktion wesentlicher Entscheidungsträger
          </h3>
          <p className='text-lg'>Sören Dübel (Gesellschafter und Geschäftsführung)</p>
          <p className='text-lg'>Benedict Hepp (Gesellschafter und Geschäftsführung)</p>
          <p className='text-lg pb-4'>Lars Mikeler (Gesellschafter und Geschäftsführung)</p>
          <p className='text-lg pb-16'>
            <Link href='/#ueberuns' className='underline hover:no-underline'>
              Unser Team
            </Link>
          </p>

          {/* 5. Tätigkeitsbericht */}
          <div className='w-10 h-[5px] bg-primary mb-5'></div>
          <h3 className='text-2xl pb-6 font-bold'>5. Tätigkeitsbericht</h3>
          <p className='text-lg pb-16'>
            <a
              href='/Taetigkeitsbericht_Bund-fiB_2023.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:no-underline'
            >
              Tätigkeitsbericht 2023
            </a>
          </p>

          {/* 6. Personalstruktur */}
          <div className='w-10 h-[5px] bg-primary mb-5'></div>
          <h3 className='text-2xl pb-6 font-bold'>6. Personalstruktur</h3>
          <p className='text-lg pb-16'>
            Stand März April hat der Bund-fiB 12 Festangestellte (davon 6 Werkstudierende) 5
            geringfügig Beschäftigte 2 Praktikantinnen.
          </p>

          {/* 7. Angaben zur Mittelherkunft */}
          <div className='w-10 h-[5px] bg-primary mb-5'></div>
          <h3 className='text-2xl pb-6 font-bold'>7. Angaben zur Mittelherkunft</h3>
          <ul className='text-lg pb-16 list-disc pl-6'>
            <li>
              <a
                href='/Taetigkeitsbericht_Bund-fiB_2023.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:no-underline'
              >
                Tätigkeitsbericht 2023
              </a>
            </li>
            <li>
              <a
                href='/Bilanz_Bund-fiB_2023.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:no-underline'
              >
                Bilanz Bund-fiB 2023
              </a>
            </li>
            <li>
              <Link
                href='/#Leistungsübersicht'
                className='underline hover:no-underline'
              >
                Projekte
              </Link>
            </li>
          </ul>

          {/* 8. Angaben zu Mittelverwendung */}
          <div className='w-10 h-[5px] bg-primary mb-5'></div>
          <h3 className='text-2xl pb-6 font-bold'>8. Angaben zu Mittelverwendung</h3>
          <ul className='text-lg pb-16 list-disc pl-6'>
            <li>
              <a
                href='/Taetigkeitsbericht_Bund-fiB_2023.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:no-underline'
              >
                Tätigkeitsbericht 2023
              </a>
            </li>
            <li>
              <a
                href='/Bilanz_Bund-fiB_2023.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:no-underline'
              >
                Bilanz Bund-fiB 2023
              </a>
            </li>
          </ul>

          {/* 9. Gesellschaftliche Verbundenheit mit Dritten */}
          <div className='w-10 h-[5px] bg-primary mb-5'></div>
          <h3 className='text-2xl pb-6 font-bold'>
            9. Gesellschaftliche Verbundenheit mit Dritten
          </h3>
          <p className='text-lg pb-16'>
            Der Bund-fiB ist rechtlich eigenständig und unterhält{' '}
            <b>keine gesellschaftsrechtliche Verbundenheit mit Dritten</b>, wie etwa Mutter- oder
            Tochtergesellschaften, Fördervereinen, ausgegliederten Wirtschaftsbetrieben oder
            Partnerorganisationen.
          </p>

          {/* 10. Namen von Personen... */}
          <div className='w-10 h-[5px] bg-primary mb-5'></div>
          <h3 className='text-2xl pb-6 font-bold'>
            10. Namen von Personen, deren jährliche Zahlungen mehr als 10 Prozent des
            Gesamtjahresbudgets ausmachen
          </h3>
          <p className='text-lg pb-32'>
            Im Jahr 2024 gab es keine Leistungsentgelte, die mehr als 10 Prozent des
            Gesamtjahresbudgets ausmachten. Die Bund-fiB gUG erhielt ebenfalls keine Zuwendungen
            von anderen Organisationen, die mehr als 10 Prozent des Gesamtbudgets ausmachten.
          </p>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Transparenz;
