import Script from 'next/script';

const Custome404 = () => {
  return (
    <>
      <Script id='redirect'>
        {`
      document.location.href="/"
      `}
      </Script>
    </>
  );
};

export default Custome404;
