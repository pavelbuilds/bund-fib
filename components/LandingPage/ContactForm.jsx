import KontaktFormular from '../KontaktFormular';
import Textbox from '../Textbox';
import Container from '../Container';

const ContactForm = () => {
  return (
    <section className='relative bg-darkYellow'>
      <Container
        styling={'pt-32 pb-12 flex lg:flex-row flex-col-reverse justify-between items-center'}
      >
        {/* Formular */}
        <KontaktFormular styling={'lg:w-[450px]  flex  flex-col w-full'} />
        {/* Text */}
        <Textbox
          section={'Schreib uns jetzt'}
          slogan={'Wir freuen uns auf deine Nachricht'}
          align={'left'}
          styling={'lg:w-[40%]  sm:pb-16 pb-16'}
        >
          <div className='font-source leading-tight'>
            Du hast Fragen oder ist etwas unklar? Schreib uns! Wir versuchen dir schnellst möglichst
            zu antworten.
          </div>
        </Textbox>
      </Container>
    </section>
  );
};

export default ContactForm;
