'use client';

const Standort = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='flex items-center justify-center rounded-xl bg-primary p-6 text-center font-berlin text-xl text-white shadow-xl transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer aspect-square'
    >
      Standort {name}
    </button>
  );
};

export default Standort;
