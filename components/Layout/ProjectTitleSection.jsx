import Container from '../Container';

const ProjectTitleSection = ({
  title,
  subtitle = '',
  image = '/images/title.jpg',
  imageStyle = '',
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: imageStyle || 'center 30%',
      }}
      className='text-center text-4xl font-bold font-berlin bg-no-repeat bg-center bg-cover text-white relative '
    >
      <div className='w-full h-full bg-black/70 pt-40 pb-40 md:pb-64 text-center'>
        <Container>
          <h1 className='text-4xl sm:text-5xl font-berlin text-white'>{title}</h1>
          <h2 className='text-2xl sm:text-3xl mt-10 font-normal font-source'>{subtitle}</h2>
        </Container>
      </div>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'
        className='absolute bottom-0 left-0 w-full block wave-one'
        // style={{ height: '120px' }}
      >
        <path
          d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
          className='fill-darkYellow'
          transform='scale(-1, -1) translate(-1200, -120)'
        ></path>
      </svg>
    </div>
  );
};

export default ProjectTitleSection;
