const Mitarbeiter = ({ bild, name, job }) => {
  return (
    <div className='lg:w-[17%] sm:w-[27%] w-[45%] flex flex-col items-center mt-8'>
      <img className='rounded-xl' src={bild} alt='' />
      <div className='text-xs mt-2 text-center'>
        <b>{name}</b>
      </div>
      <div className='text-xs'>{job}</div>
    </div>
  );
};

export default Mitarbeiter;
