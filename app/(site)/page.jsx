import TitleSection from '@/components/LandingPage/TitleSection';
import PartnerLogos from '@/components/LandingPage/PartnerLogos';
import ProjektUebersicht from '@/components/LandingPage/ProjektUebersicht';
import AboutUs from '@/components/LandingPage/AboutUs';
import Team from '@/components/LandingPage/Team';
import ContactForm from '@/components/LandingPage/ContactForm';

export const metadata = {
  // No own title: inherits the default from app/layout.jsx.
  description:
    'Als gemeinnützige Organisation stärken wir Kinder und Jugendliche nachhaltig: Lernförderung, Bildungsprojekte und Ferienschulen in Berlin, Leipzig, Hannover und Magdeburg.',
};

export default function Home() {
  return (
    <>
      <TitleSection />
      <PartnerLogos />
      <ProjektUebersicht />
      <AboutUs />
      <Team />

      {/* Wave divider between team and contact form */}
      <section className='relative bg-darkYellow'>
        <div className='wave-7 z-0'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              className='shape-fill'
            ></path>
          </svg>
        </div>
      </section>

      {/* Contact form (linked from the footer as /#ContactForm) */}
      <div id='ContactForm'>
        <ContactForm />
      </div>
    </>
  );
}
