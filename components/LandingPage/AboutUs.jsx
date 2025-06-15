import Container from '../Container';
import Textbox from '../Textbox';
import PartnerLogos from './PartnerLogos';
import Testimonials from '../Testimonials';

const AboutUs = () => {
  return (
    <section id='ueberuns' className='relative bg-darkYellow  md:pt-52  pt-[600px] '>
      <Container styling={'flex items-center flex-col'}>
        <Textbox
          animation={'fade-up'}
          section={'Über Uns'}
          slogan={'Was uns als Partner besonders macht'}
          styling={'lg:w-4/5 -mt-1'}
        >
          <div className='mb-10 font-source leading-loose sm:mb-20 text-justify'>
            Der Bund-fiB ist eine gemeinnützige Organisation tätig in Berlin, Leipzig und Hannover.
            Wir bieten verschiedene Bildungsprojekte an Schulen, Gemeinschaftsunterkünften und in
            privaten Haushalten an. Unsere Projektpalette variiert von inklusiven Schulprojekten bis
            hin zur individuellen Lernförderung von Kindern und Jugendlichen. Wir glauben an Bildung
            durch Wertschätzung, wo jedes Kind so akzeptiert wird, wie es ist. Deshalb schaffen wir
            einen geschützten Raum, in dem sie sich frei entfalten, ihre Potenziale entdecken und
            ihre Persönlichkeit entwickeln können. Unser Safer Space gibt ihnen die Möglichkeit,
            ohne Angst vor Ausgrenzung oder Diskriminierung zu lernen und zu wachsen. Uns ist es
            wichtig, gesellschaftliche und kulturelle Teilhabe zu ermöglichen. Dabei verfolgen wir
            einen ganzheitlichen Ansatz, der nicht nur die Integration durch Sprache und Kultur
            fördert, sondern auch bei bürokratischen und rechtlichen Herausforderungen unterstützt.
          </div>
        </Textbox>
        {/* Partner Logos */}
      </Container>{' '}
      <div
        data-aos='fade-up'
        className='relative z-10 flex w-full flex-wrap items-center justify-evenly overflow-hidden'
      >
        <Testimonials />
      </div>
      {/* Wave */}
      <div className='wave-5 relative z-0'>
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
  );
};

export default AboutUs;
