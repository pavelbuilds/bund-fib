const testimonials = [
  {
    text: 'Die Zusammenarbeit mit fiB funktioniert problemlos. Es ist immer jemand erreichbar und hat ein offenes Ohr für unsere Anliegen. Die Organisation der Nachhilfe sowie alle damit verbundenen bürokratischen Angelegenheiten werden von den Mitarbeiter:innen von fiB übernommen. Der Kontakt ist stets sehr angenehm, und wir freuen uns, dass die Kinder in unserer Gemeinschaftsunterkunft durch fiB in der Nachhilfe unterstützt werden.',
    name: 'Sophie',
    company: 'Pandechaion – Herberge e.V.',
  },
  {
    text: 'Ich arbeite seit Mai 2024 als Sozialarbeiter und betreue viele Familien mit schulpflichtigen Kindern in der Gemeinschaftsunterkunft Toskastraße, die ständig Unterstützung beim Lernen benötigen. Gemeinsam mit dir habe ich zahlreiche Anträge auf Lernförderung für unsere Schüler gestellt, und fast alle haben durch dich Nachhilfeunterricht erhalten. Du hast mir in vielen Fällen geholfen und mich auch daran erinnert, dass die Anträge erneut gestellt werden müssen. Ich freue mich über unsere Zusammenarbeit und hoffe, dass sie weiterhin so gut bleibt. Vielen Dank!',
    name: 'Habat',
    company: 'Pandechaion – Herberge e.V.',
  },
  {
    text: 'Die Zusammenarbeit mit dem Bund für integrative Bildung ist durch und durch positiv. Die Mitarbeiter*innen gehen proaktiv und offen auf die Kinder und Familien zu, um so einen möglichst schnellen und unkomplizierten Zugang zur Lernförderung zu gewährleisten. Wir freuen uns sehr, denn Bund-fiB als Kooperationspartner zu haben.',
    name: 'Lisa',
    company: 'European Homecare GmbH',
  },
];

const Testimonials = () => {
  return (
    <>
      {testimonials.map((testimonial, index) => (
        <figure key={index} className='mt-28'>
          <blockquote>
            <p className='text-base font-semibold text-gray-900'>&quot;{testimonial.text}&quot;</p>
          </blockquote>
          <figcaption className='mt-6 flex items-center justify-end space-x-3 rtl:space-x-reverse'>
            <div className='flex items-center divide-x-2 divide-gray-300 rtl:divide-x-reverse dark:divide-gray-700'>
              <cite className='pr-3 font-medium'>{testimonial.name}</cite>
              <cite className='pl-3 text-sm'>{testimonial.company}</cite>
            </div>
          </figcaption>
        </figure>
      ))}
    </>
  );
};

export default Testimonials;
