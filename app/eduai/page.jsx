'use client';

import NavBar from '../../components/Layout/NavBar';
import Footer from '../../components/Layout/Footer';
import Container from '../../components/Container';
import ContactPersonCard from '../../components/ContactPersonCard';
import ProjectTitleSection from '../../components/Layout/ProjectTitleSection';
import Image from 'next/image';

const partnerLogos = [
  {
    src: '/images/logos/eduaid/ESHA-logo-text.png',
    width: 100,
    height: 50,
    alt: 'ESHA Logo',
    link: null,
  },
  {
    src: '/images/logos/eduaid/Logo_salesiani_cnos-fap_italia_Poli_Orizz_Pos.png',
    width: 100,
    height: 50,
    alt: 'Salesiani CNOS-FAP Logo',
    link: null,
  },
  {
    src: '/images/logos/eduaid/MEI_Logo_Page1.png',
    width: 80,
    height: 50,
    alt: 'MEI Logo',
    link: null,
  },
  {
    src: '/images/logos/eduaid/mentortec_4.jpg',
    width: 100,
    height: 50,
    alt: 'Mentortec Logo',
    link: null,
  },
  {
    src: '/images/logos/eduaid/11.png',
    width: 80,
    height: 50,
    alt: 'Partner Logo 11',
    link: null,
  },
  {
    src: '/images/logos/eduaid/Carl_von_Ossietzky_Universitat_Oldenburg_2021_logo21.png',
    width: 100,
    height: 50,
    alt: 'Carl von Ossietzky Universität Oldenburg Logo',
    link: null,
  },
  {
    src: '/images/logos/eduaid/GimnazijaSmart-logo.png',
    width: 100,
    height: 50,
    alt: 'Gimnazija Smart Logo',
    link: null,
  },
  {
    src: '/images/logos/eduaid/OBSLogoneuExport.png',
    width: 100,
    height: 50,
    alt: 'OBS Logo',
    link: null,
  },
  {
    src: '/images/logos/eduaid/cropped-LogoBira_ver.preferente1.png',
    width: 100,
    height: 50,
    alt: 'Bira Logo',
    link: null,
  },
  {
    src: '/images/logos/eduaid/logo-couleur-trans1.png',
    width: 100,
    height: 50,
    alt: 'Logo Couleur',
    link: null,
  },
];
const EduAI = () => {
  return (
    <>
      <NavBar />
      <div className='bg-darkYellow pt-14'>
        {/* Title */}
        <ProjectTitleSection
          title='EduAId'
          subtitle='Pädagog*innen zu AI-integriertem Lernen befähigen'
          image='/images/eduaid-cover.jpg'
        />
        {/* Content */}
        <Container>
          {/* Text */}
          <p className='pb-10 pt-20  text-lg'>
            Das EduAId-Projekt strebt an, die Bildungslandschaft europaweit durch die Integration
            von KI-basierten Werkzeugen und Praktiken mittels eines MicroCredentials-Ansatzes zu
            transformieren. Es richtet sich an Lehrkräfte, Schulleitungen und Pädagog*innen mit dem
            Ziel, digitale Kompetenzen zu stärken, personalisierte Lernumgebungen zu fördern und
            kontinuierliche berufliche Weiterentwicklung zu unterstützen. Das Projekt und die daraus
            resultierenden Workshops werden in englischer Sprache durchgeführt.
          </p>
          <h3 className='text-xl py-5 font-bold'>Die wichtigsten Schritte der Implementierung</h3>
          <p className='text-lg pb-10'>
            Um die KI-Schulung so praktisch wie möglich zu gestalten, wird sich EduAId auf Folgendes
            konzentrieren:
          </p>
          <ol className='list-decimal pl-5 sm:pl-10 space-y-12 text-lg pb-10'>
            <li>
              Eine benutzerfreundliche digitale Plattform: Pädagog*innen können von einem Ort aus
              auf Schulungsmodule, Ressourcen und Zertifizierungsprogramme zugreifen.
            </li>
            <li>
              Ein strukturierter Rahmen für Mikro-Credentials: Lehrkräfte erhalten eine offizielle
              Anerkennung für ihre KI-Fähigkeiten, die ihnen bei der Karriereentwicklung und der
              schulweiten Umsetzung hilft.
            </li>
            <li>
              Tools wie spielerisches Lernen und Chatbots: Sie machen KI-Schulungen interaktiv und
              im Unterricht anwendbar.
            </li>
            <li>
              Pilotprogramme und Workshops: Reale Tests im Klassenzimmer stellen sicher, dass die
              KI-Tools für verschiedene Schulumgebungen nützlich und relevant sind.
            </li>
          </ol>
          <p className='text-lg pb-10'>
            Das Projekt läuft vom 1. November 2024 bis zum 31. Oktober 2027.
          </p>
          <p className='text-lg pb-10'>
            Alle weiteren Informationen und aktuellen Entwicklungen finden sich auf der offiziellen
            Website des Projekts oder über Instagram:
          </p>
          <p className='text-sm sm:text-lg pb-5 hover:underline sm:pl-10 '>
            <a href='https://eduaid.online/' target='_blank'>
              <span className='pr-4'>🔗</span> https://eduaid.online/
            </a>
          </p>
          <p className='text-sm sm:text-lg pb-32 hover:underline sm:pl-10'>
            <a href='https://www.instagram.com/eduaid_online/' target='_blank'>
              <span className='pr-4'>🔗</span> https://www.instagram.com/eduaid_online/
            </a>
          </p>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center pb-32'>
            {partnerLogos.map((logo, index) => (
              <div key={index} className='flex justify-center items-center px-3 py-3'>
                {logo.link ? (
                  <a href={logo.link} target='_blank' rel='noopener noreferrer'>
                    <Image
                      src={logo.src}
                      width={logo.width}
                      height={logo.height}
                      alt={logo.alt}
                      className='hover:opacity-80 transition-opacity'
                    />
                  </a>
                ) : (
                  <Image src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} />
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default EduAI;
