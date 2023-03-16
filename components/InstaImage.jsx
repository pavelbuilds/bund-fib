import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const InstaImage = ({ src, link, alt }) => {
  // get the width of the anchor tag and set the height of the image to the same
  const ref = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(ref.current.offsetWidth);
    const handleResize = () => {
      setHeight(ref.current.offsetWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <a className='w-[30%] m-auto mx-1 my-1' href={link} target='_blank' rel='noreferrer'>
      <img
        ref={ref}
        style={{ height: height }}
        className='w-full object-cover object-top '
        src={src}
        alt={alt}
      />
    </a>
  );
};

export default InstaImage;
