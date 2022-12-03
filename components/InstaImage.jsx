const InstaImage = ({ src }) => {
  return (
    <img
      className='lg:w-72 lg:h-72 sm:w-48 sm:h-48 w-28 h-28 object-cover m-auto mx-1 my-2'
      src={src}
      alt=''
    />
  );
};

export default InstaImage;
