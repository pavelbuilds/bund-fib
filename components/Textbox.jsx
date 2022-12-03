const Textbox = ({ section, slogan, align, styling, children, animation }) => {
  const alignment = align == 'left' ? 'lg:items-start' : 'lg:items-center';

  return (
    <div
      data-aos={animation}
      className={`sm:w-[80%] flex flex-col ${alignment} items-center text-center ${
        align == 'left' ? 'lg:text-left' : ''
      } lg:pb-0 pb-16 lg:mx-0 sm:mx-auto ${styling}`}
    >
      <div className='font-poppins text-lg mt-7'>{section}</div>
      {/* Line */}
      <div className='w-10 h-[5px] bg-primary mt-5'></div>
      {/* Heading */}
      <div className='font-berlin text-5xl leading-tight my-10'>{slogan}</div>
      {children}
    </div>
  );
};

export default Textbox;
