import { useEffect } from 'react';

function Flyer() {
  useEffect(() => {
    window.location.href = '/familien_flyer.pdf';
  }, []);

  return (
    <div>
      <p>Redirecting to PDF...</p>
    </div>
  );
}

export default Flyer;
