import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
const testimonials = [
  {
    text: '"Die Zusammenarbeit mit fiB funktioniert problemlos. Es ist immer jemand erreichbar und hat ein offenes Ohr für unsere Anliegen. Die Organisation der Nachhilfe sowie alle damit verbundenen bürokratischen Angelegenheiten werden von den Mitarbeiter:innen von fiB übernommen. Der Kontakt ist stets sehr angenehm, und wir freuen uns, dass die Kinder in unserer Gemeinschaftsunterkunft durch fiB in der Nachhilfe unterstützt werden."',
    name: 'Sophie',
    company: 'Pandechaion – Herberge e.V.',
  },
  {
    text: '"Ich arbeite seit Mai 2024 als Sozialarbeiter und betreue viele Familien mit schulpflichtigen Kindern in der Gemeinschaftsunterkunft Toskastraße, die ständig Unterstützung beim Lernen benötigen. Gemeinsam mit dir habe ich zahlreiche Anträge auf Lernförderung für unsere Schüler gestellt, und fast alle haben durch dich Nachhilfeunterricht erhalten. Du hast mir in vielen Fällen geholfen und mich auch daran erinnert, dass die Anträge erneut gestellt werden müssen. Ich freue mich über unsere Zusammenarbeit und hoffe, dass sie weiterhin so gut bleibt. Vielen Dank!"',
    name: 'Habat',
    company: 'Pandechaion – Herberge e.V.',
  },
  {
    text: '"Die Zusammenarbeit mit dem Bund für integrative Bildung ist durch und durch positiv. Die Mitarbeiter*innen gehen proaktiv und offen auf die Kinder und Familien zu, um so einen möglichst schnellen und unkomplizierten Zugang zur Lernförderung zu gewährleisten. Wir freuen uns sehr, denn Bund-fiB als Kooperationspartner zu haben."',
    name: 'Lisa',
    company: 'European Homecare GmbH',
  },
];

const Testimonials = () => {
  return (
    <div className='w-full relative sm:mt-10'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-gray-400',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-gray-900',
        }}
        className='sm:pb-12'
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className='relative mb-2 w-[80%] rounded-md px-8 py-20 overflow-visible'>
              <div className='relative'>
                {/* Bottom left splash */}
                <div className='absolute -bottom-20 -left-24 scale-75 sm:scale-100 size-24'>
                  <Image
                    className='object-contain'
                    src='/images/splashes_bottom.svg'
                    alt='Testimonial'
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                {/* Top right splash */}
                <div className='absolute -top-20 -right-24 scale-75 sm:scale-100 size-24'>
                  <Image
                    className='object-contain'
                    src='/images/splashes_top.svg'
                    alt='Testimonial'
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div>
                  <p className='text-base text-left font-semibold text-gray-900'>
                    {testimonial.text}
                  </p>
                </div>
              </div>
              <div className='pt-32 sm:translate-y-0 sm:mt-6 flex items-center justify-end space-x-3 rtl:space-x-reverse'>
                <div className='flex items-center divide-x-2 divide-gray-300 rtl:divide-x-reverse dark:divide-gray-700'>
                  <div className='pr-3 font-medium text-left'>{testimonial.name}</div>
                  <div className='pl-3 text-sm text-left'>{testimonial.company}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
