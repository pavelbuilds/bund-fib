import { useEffect } from 'react';

const Calender = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src =
      'https://cdn.jsdelivr.net/gh/meetergo/meetergo-integration/dist/esbuild/browser.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{ minWidth: '330px', height: "620px'" }}
      className='meetergo-iframe bg-black w-96 h-96 bg-black'
      link='https://my.meetergo.com/book/u/pavel-kickler/new-meeting/pavel-kickler'
    ></div>
  );
};

export default Calender;
