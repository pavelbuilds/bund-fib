const InstaImage = ({ src, link }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <img
        className='lg:w-72 lg:h-72 sm:w-48 sm:h-48 w-28 h-28 object-cover object-center m-auto mx-1 my-2'
        src={src}
        alt=''
      />
    </a>
  );
};

export default InstaImage;
