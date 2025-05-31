'use client';

import { useEffect } from 'react';

export default function Flyer() {
  useEffect(() => {
    window.location.href = '/familien_flyer.pdf';
  }, []);

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <p className='text-xl'>Redirecting to PDF...</p>
    </div>
  );
}
