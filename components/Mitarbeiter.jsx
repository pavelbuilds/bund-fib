import Image from 'next/image';

const Mitarbeiter = ({ bild, name, job }) => {
  return (
    <div className='mt-8 flex w-[45%] flex-col items-center sm:w-[27%] lg:w-[17%]'>
      <Image
        priority
        width='100'
        height='100'
        className='w-full rounded-xl object-cover'
        src={bild}
        alt={`Foto von ${name}`}
      />
      <div className='mt-2 text-center text-xs'>
        <b>{name}</b>
      </div>
      <div className='text-xs'>{job}</div>
    </div>
  );
};

export default Mitarbeiter;
