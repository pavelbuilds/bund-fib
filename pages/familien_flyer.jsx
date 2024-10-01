function Flyer() {
  return (
    <div>
      <iframe
        src='/familien_flyer.pdf'
        width='100%'
        height='100%'
        className='h-screen w-screen'
        style={{ border: 'none' }}
      />
    </div>
  );
}

export default Flyer;
