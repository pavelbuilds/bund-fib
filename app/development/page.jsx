'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Import Components
import Container from '../../components/Container';
import Textbox from '../../components/Textbox';
import Button from '../../components/Button';
import BurgerMenu from '../../components/BurgerMenu';
import Mitarbeiter from '../../components/Mitarbeiter';
import Gruender from '../../components/Gruender';
import KontaktFormular from '../../components/KontaktFormular';

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCaretDown,
  faFilePdf,
  faSquarePhone,
  faEnvelope,
  faXmark,
  faColonSign,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';

// Import Animation Library
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Calendly
import { InlineWidget } from 'react-calendly';
import InstaImage from '../../components/InstaImage';

export default function Development({ feed }) {
  const images = feed?.data || [];

  // Initialize AOS Animation Library
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Instagram loadMore Button
  const [end, setEnd] = useState(8);
  const loadMore = () => {
    if (end >= 23) {
      // forward to Instagram
      window.open('https://www.instagram.com/bund_fib/', '_blank');
    } else {
      setEnd(end + 3);
    }
  };

  // Angebot Hover Dropdown
  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(true);
  };
  const hideDropdown = () => {
    setShow(false);
  };

  // Swiper Slider Einstellungen
  const pagination = {
    clickable: true,
  };

  // Kontaktieren PopUp Einstellungen
  const [kontaktieren, setKonktaktieren] = useState(false);
  const toggleKontaktieren = () => {
    setKonktaktieren(!kontaktieren);
  };

  // Burger Menu Einstellungen
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const toogleHamburgerMenu = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

  // Impressum PopUp Einstellungen
  const [impressum, setImpressum] = useState(false);
  const toggleImpressum = () => {
    setImpressum(!impressum);
  };

  // Datenschutz PopUp Einstellungen
  const [datenschutz, setDateschutz] = useState(false);
  const toggleDatenschutz = () => {
    setDateschutz(!datenschutz);
  };

  // Jobs Video PopUp Einstellungen
  const [jobsVideo, setJobsVideo] = useState(false);
  const toggleJobsVideo = () => {
    setJobsVideo(!jobsVideo);
  };

  return (
    <main>
      {/* Kontaktieren Popup */}
      <div
        className={`fixed z-50 h-screen min-h-[600px] w-screen bg-lightYellow pt-24 transition-all duration-700 ease-out sm:pt-[10vh] lg:pt-24 ${
          kontaktieren ? '-translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Container */}
        <div className='mx-auto flex max-w-screen-xl flex-col justify-center'>
          {/* Header */}
          <div className='text-center font-berlin text-2xl'>
            Buchen Sie ein Gespräch mit uns oder schreiben Sie uns eine Nachricht
          </div>
          {/* Kalender */}
          <div className='mt-20 mb-20 flex w-full flex-col justify-center sm:mt-[5vh] sm:mb-[10vh] md:flex-row lg:mt-10 lg:mb-10'>
            <div className='ml-5 mr-5 rounded-xl bg-white p-1 text-center shadow-xl lg:my-4'>
              <div className='hidden md:block'>Standort Leipzig</div>
              <a
                href='https://calendly.com/bundfib/kennenlerngesprach-lehkraft-in-leipzig'
                target='_blank'
                rel='noreferrer'
              >
                <div className='mb-5 mt-5 block md:hidden'>
                  <u>Standort Leipzig</u>
                </div>
              </a>
              <div className='hidden md:block'>
                <InlineWidget
                  styles={{
                    width: '50vh',
                    height: '50vh',
                  }}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: true,
                    hideLandingPageDetails: true,
                    primaryColor: 'F9B233',
                    textColor: '4d5055',
                  }}
                  url='https://calendly.com/bundfib/kennenlerngesprach-lehkraft-in-leipzig'
                />
              </div>
            </div>
          </div>
          {/* Icons */}
          <div className='flex justify-center'>
            <a className='umami--click--menu-email-button' href='mailto:verwaltung@bund-fib.de'>
              <div className='text-center font-poppins text-[10px]'>
                <FontAwesomeIcon className='mx-10 mb-2 w-7' icon={faEnvelope} />
                E-Mail
              </div>
            </a>
            <a className='umami--click--menu-phone-button' href='tel:+4915758745855'>
              <div className='text-center font-poppins text-[10px]'>
                <FontAwesomeIcon className='mx-10 mb-2 w-6' icon={faSquarePhone} />
                Telefon
              </div>
            </a>
            <a
              className='umami--click--menu-insta-button'
              href='https://www.instagram.com/bund_fib/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='text-center font-poppins text-[10px]'>
                <FontAwesomeIcon className='mx-10 mb-2 w-6' icon={faInstagram} />
                Instagram
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Add your other components here */}
    </main>
  );
}
