const TitleSection = () => {
  return (
    <section
      id='Titelseite'
      className='relative h-[78vh] bg-[url("/images/title.jpg")] bg-cover sm:h-[85vh]'
    >
      <div className='flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-60'>
        {/* Title Slogal */}
        <h1 className='text-center font-berlin text-4xl text-white sm:w-[600px] sm:text-6xl'>
          Kinder und Jugendliche nachhaltig stärken
        </h1>
        {/* Untertitle */}
        <div className='mt-10 px-5 text-center font-source text-2xl leading-tight text-white sm:w-full sm:px-0'>
          Als gemeinnützige Organisation bauen wir auf Bildung durch Wertschätzung.
        </div>
        {/* Buttons */}
        <div className='mt-10 flex flex-col items-center justify-center sm:flex-row'>
          {/* <Button
        className='umami--click--TitleSeite-Termin-buchen'
        cta={'Termin buchen'}
        click={toggleKontaktieren}
      ></Button> */}
          {/* <a href='#Leistungsübersicht'>
            <button className=' mt-5 rounded-full border-2 border-white px-9 py-1 font-source text-lg font-semibold text-white transition-all sm:ml-5 sm:mt-0 sm:h-8 sm:py-0 sm:text-sm lg:hover:scale-[102%]'>
              mehr erfahren
            </button>
          </a> */}
        </div>
      </div>
      {/* Wellen Teiler */}
      <div className='wave'>
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

export default TitleSection;
