import Container from '../Container';
import Textbox from '../Textbox';
import Button from '../Button';
import Gruender from '../Gruender';
import Mitarbeiter from '../Mitarbeiter';

const Team = () => {
  return (
    <section id='UnserTeam' className='bg-darkYellow pb-14 sm:pt-20'>
      <Container styling={'pt-32'}>
        {/* Text & Gründer */}
        <div
          data-aos={'fade-up'}
          className='flex flex-col items-center justify-between lg:flex-row'
        >
          <Textbox
            section={'Unser Team'}
            slogan={'Lerne unser Team kennen'}
            styling={'lg:w-2/5 sm:pb-0 pb-16'}
            align={'left'}
          >
            <div className='mb-10 text-center font-source leading-tight lg:text-left'>
              Das Bund-fiB Leitungsteam setzt sich aus Sören und Marlene in der Geschäftsführung,
              Lars als pädagogischer Leiter und Ben als Standortleiter in Hannover zusammen.
              Gemeinsam haben sie ihre Schwerpunkte in der Pädagogik und Sonderpädagogik, sowie der
              Anthropologie, Politikwissenschaft und Wirtschaft. Zusammen bringen sie Erfahrung,
              Herzblut und eine klare Vision mit: Bildung soll für alle zugänglich, inklusiv und
              chancengerecht sein
            </div>
          </Textbox>
          <Gruender />
        </div>

        {/* Mitarbeiter Übersicht */}
        <div className='mt-60 flex flex-wrap justify-between sm:mt-72 sm:justify-start text-center'>
          <div className='mt-20 mb-16'>
            In den letzten Jahren sind unterschiedliche Menschen dazugekommen, die diese Vision
            unterstützen und kräftig voranbringen. Das Team vereint Expertise in den Bereichen der
            Erziehung, DaF/DaZ Spezialisierung im Lehramt, Kunstpädagogik, Sozialer Arbeit,
            Sexualpädagogik, nachhaltiger Bildung und Transkulturalität. Zusammen wollen wir Bildung
            zugänglicher machen und gemeinsam mit Kindern und Jugendlichen auf Augenhöhe nachhaltig
            weiterentwickeln!
          </div>
          <Mitarbeiter
            bild={'/images/mitarbeiter/Katrin_neu.jpeg'}
            name={'Katrin'}
            // job={'Alle Teams'}
          />
          <Mitarbeiter
            bild={'/images/mitarbeiter/Lika_neu.jpeg'}
            name={'Lika'}
            // job={'Alle Teams'}
          />
          <Mitarbeiter
            bild={'/images/mitarbeiter/Schabnaz_neu.jpeg'}
            name={'Schabnaz'}
            // job={'Alle Teams'}
          />
          <Mitarbeiter
            bild={'/images/mitarbeiter/Nathalie_neu.jpeg'}
            name={'Nathalie'}
            // job={'Alle Teams'}
          />
          <Mitarbeiter
            bild={'/images/mitarbeiter/Mika_neu.jpeg'}
            name={'Mika'}
            // job={'Alle Teams'}
          />
          {/*             
            <Mitarbeiter
              bild={'/images/mitarbeiter/marlene.jpg'}
              name={'Marlene'}
              job={'Koordination & Projektleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/maddy.jpg'}
              name={'Maddy'}
              job={'Betreuung & Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/teodora.jpg'}
              name={'Teodora'}
              job={'Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/lukas.jpg'}
              name={'Lukas'}
              job={'Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/willi.jpg'}
              name={'Willi'}
              job={'Lehrkraft & Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/pauline.jpg'}
              name={'Pauline'}
              job={'Lehrkraft & Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/rim.jpg'}
              name={'Rim'}
              job={'Betreuung & Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/julia.jpg'}
              name={'Julia'}
              job={'Betreuung & Workshopleitung'}
            />

            <Mitarbeiter
              bild={'/images/mitarbeiter/lika.jpg'}
              name={'Lika'}
              job={'Betreuung & Dokumentation'}
            />
            <Mitarbeiter bild={'/images/mitarbeiter/rosa.jpg'} name={'Rosa'} job={'Lehrkraft'} />
            <Mitarbeiter bild={'/images/mitarbeiter/maggy.jpg'} name={'Maggy'} job={'Betreuung'} />
            <Mitarbeiter bild={'/images/mitarbeiter/paul.jpg'} name={'Paul'} job={'Lehrkraft'} />
            <Mitarbeiter bild={'/images/mitarbeiter/musa.jpg'} name={'Musa'} job={'Lehrkraft'} />
            <Mitarbeiter
              bild={'/images/mitarbeiter/adriana.jpg'}
              name={'Adriana'}
              job={'Lehrkraft & Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/felix.jpg'}
              name={'Felix'}
              job={'Lehrkraft & Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/ara.jpg'}
              name={'Ara'}
              job={'Lehrkraft & Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/luisa.jpg'}
              name={'Luisa'}
              job={'Lehrkraft & Workshopleitung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/katherina.jpg'}
              name={'Katherina'}
              job={'Betreuung'}
            />
            <Mitarbeiter
              bild={'/images/mitarbeiter/julius.jpg'}
              name={'Julius'}
              job={'Lehrkraft'}
            /> */}
        </div>
      </Container>{' '}
    </section>
  );
};

export default Team;
