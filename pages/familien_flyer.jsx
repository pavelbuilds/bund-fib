import { useEffect } from 'react';

function Flyer() {
  useEffect(() => {
    // This will open the PDF in a new tab automatically when the component mounts
    window.open('/familien_flyer.pdf', 'noopener,noreferrer');
  }, []);

  return (
    <div>
      <p>Redirecting to PDF...</p>
    </div>
  );
}

export default Flyer;
