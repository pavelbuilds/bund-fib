const Button = ({ cta, styling, click }) => {
  return (
    <button
      onClick={click}
      className={`${styling} lg:hover:scale-[104%] transition-transform bg-primary font-source px-9 sm:py-0 py-1  rounded-full text-white sm:text-sm text-lg sm:h-8 font-semibold`}
    >
      {cta}
    </button>
  );
};

export default Button;
