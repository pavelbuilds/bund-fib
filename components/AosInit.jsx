'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Initialises the AOS ("animate on scroll") library once per page load.
 * Rendered from app/(site)/layout.jsx so every page can use `data-aos`
 * attributes without initialising the library itself.
 */
const AosInit = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return null;
};

export default AosInit;
