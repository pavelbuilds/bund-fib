import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown, faXmark, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import BurgerMenu from './BurgerMenu';

const NavigationsLeiste = ({ hamburgerClicked, toogleHamburgerMenu }) => {
  const [show, setShow] = useState(false);

  const showDropdown = () => {
    setShow(true);
  };
  const hideDropdown = () => {
    setShow(false);
  };

  return (
    <nav
      className='fixed z-50 min-w-full bg-lightYellow py-3
                shadow-md lg:py-0'
    >
      <div className='mx-auto flex max-w-screen-xl items-center justify-between px-5 sm:px-20'>
        {/* Logo */}
        <a href='#Titelseite'>
          <Image
            src='/images/logos/bund_fib_logo.webp'
            width={170}
            height={75}
            alt='bund fib logo'
          />
        </a>
        {/* Menu */}
        <ul className='hidden w-[400px] items-center justify-between font-source text-sm lg:flex'>
          <li>
            <a href='#ÜberUns'>Über Uns</a>
          </li>
          <li className='relative py-5' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            <a href='#Leistungsübersicht' className='flex'>
              Projekte <FontAwesomeIcon className='ml-2 w-2' icon={faCaretDown} />
              {show && (
                <ul className='absolute mt-10 -translate-x-1/3 rounded-b-xl bg-lightYellow pb-5 shadow-md'>
                  <a href='#Lernförderung'>
                    <li className='py-3 px-10 hover:bg-darkYellow'>Lernförderung</li>
                  </a>
                  <a href='#Privatunterricht'>
                    <li className='py-3 px-10 hover:bg-darkYellow'>Privatunterricht</li>
                  </a>
                  <a href='#Berufsvorbereitung'>
                    <li className='py-3 px-10 hover:bg-darkYellow'>Berufsvorbereitung</li>
                  </a>
                  <a href='#Bildungsprojekte'>
                    <li className='py-3 px-10 hover:bg-darkYellow'>Bildungsprojekte</li>
                  </a>
                </ul>
              )}
            </a>
          </li>
          <li>
            <a href='#Jobs'>Jobs</a>
          </li>
          <li>
            <a href='#Aktuelles'>Aktuelles</a>
          </li>
        </ul>
        {/* Social Media Icons */}
        <div className='hidden items-center gap-4 md:flex'>
          {/* Instagram */}
          <a
            href='https://www.instagram.com/bund_fib/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex h-10 w-10 items-center justify-center rounded-full bg-darkYellow text-black'
          >
            <FontAwesomeIcon className='w-5 text-black' icon={faInstagram} />
          </a>
          {/* LinkedIn */}
          <a
            href='https://www.linkedin.com/company/bund-f%C3%BCr-integrative-bildung/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex h-10 w-10 items-center justify-center rounded-full bg-darkYellow text-black'
          >
            <FontAwesomeIcon className='w-5 text-black' icon={faLinkedin} />
          </a>
          {/* Email */}
          <a
            href='mailto:verwaltung@bund-fib.de'
            className='flex h-10 w-10 items-center justify-center rounded-full bg-darkYellow text-black'
          >
            <FontAwesomeIcon className='w-5 ' icon={faEnvelope} />
          </a>
        </div>
        {/* Burger Menu */}
        <BurgerMenu state={hamburgerClicked} onClickFunc={toogleHamburgerMenu} />
        {/* <Button
          click={toggleKontaktieren}
          cta={
            kontaktieren ? (
              <FontAwesomeIcon className='w-3 text-white' icon={faXmark} />
            ) : (
              'Kontaktieren'
            )
          }
          styling={kontaktieren ? 'lg:block hidden w-22 mx-[38px]' : 'lg:block hidden w-40'}
        /> */}
      </div>
    </nav>
  );
};

export default NavigationsLeiste;
