import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown, faXmark, faEnvelope, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import BurgerMenu from '../BurgerMenu';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

const dropdownVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [showLernfoerderung, setShowLernfoerderung] = useState(false);
  const [showBildungsprojekte, setShowBildungsprojekte] = useState(false);
  const [showMitmachen, setShowMitmachen] = useState(false);
  const [showJobs, setShowJobs] = useState(false);
  const [showAktivWerden, setShowAktivWerden] = useState(false);

  const showDropdown = () => {
    setShow(true);
  };
  const hideDropdown = () => {
    setShow(false);
  };

  const showLernfoerderungDropdown = () => {
    setShowLernfoerderung(true);
  };
  const hideLernfoerderungDropdown = () => {
    setShowLernfoerderung(false);
  };

  const showBildungsprojekteDropdown = () => {
    setShowBildungsprojekte(true);
  };
  const hideBildungsprojekteDropdown = () => {
    setShowBildungsprojekte(false);
  };

  const showMitmachenDropdown = () => {
    setShowMitmachen(true);
  };
  const hideMitmachenDropdown = () => {
    setShowMitmachen(false);
  };

  const showJobsDropdown = () => {
    setShowJobs(true);
  };
  const hideJobsDropdown = () => {
    setShowJobs(false);
  };

  const showAktivWerdenDropdown = () => {
    setShowAktivWerden(true);
  };
  const hideAktivWerdenDropdown = () => {
    setShowAktivWerden(false);
  };

  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [burgerLernfoerderungOpen, setBurgerLernfoerderungOpen] = useState(false);
  const [burgerBildungsprojekteOpen, setBurgerBildungsprojekteOpen] = useState(false);
  const [burgerProjekteOpen, setBurgerProjekteOpen] = useState(false);
  const [burgerMitmachenOpen, setBurgerMitmachenOpen] = useState(false);
  const [burgerJobsOpen, setBurgerJobsOpen] = useState(false);
  const [burgerAktivWerdenOpen, setBurgerAktivWerdenOpen] = useState(false);

  const toggleBurgerLernfoerderung = () => {
    setBurgerLernfoerderungOpen(!burgerLernfoerderungOpen);
  };

  const toggleBurgerBildungsprojekte = () => {
    setBurgerBildungsprojekteOpen(!burgerBildungsprojekteOpen);
  };

  const toggleBurgerProjekte = () => {
    setBurgerProjekteOpen(!burgerProjekteOpen);
  };

  const toggleBurgerMitmachen = () => {
    setBurgerMitmachenOpen(!burgerMitmachenOpen);
  };

  const toggleBurgerJobs = () => {
    setBurgerJobsOpen(!burgerJobsOpen);
  };

  const toggleBurgerAktivWerden = () => {
    setBurgerAktivWerdenOpen(!burgerAktivWerdenOpen);
  };

  const toogleHamburgerMenu = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

  return (
    <>
      <nav
        className='fixed z-50 min-w-full bg-lightYellow py-3
                shadow-md lg:py-0'
      >
        <div className='mx-auto flex max-w-screen-xl items-center justify-between px-5 sm:px-20'>
          {/* Logo */}
          <Link href='/'>
            <Image
              src='/images/logos/bund_fib_logo.webp'
              width={170}
              height={75}
              alt='bund fib logo'
            />
          </Link>
          {/* Menu */}
          <ul className='hidden w-[400px] items-center justify-between font-source text-sm lg:flex'>
            <li>
              <Link href='/#ueberuns' className='block'>
                Über Uns
              </Link>
            </li>
            <li className='relative py-5' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
              <Link href='/#Leistungsübersicht' className='flex items-center'>
                Projekte <FontAwesomeIcon className='ml-2 w-2' icon={faCaretDown} />
              </Link>
              {show && (
                <ul className='absolute mt-5 -translate-x-1/3 rounded-b-xl bg-lightYellow pb-5 shadow-md'>
                  <li
                    className='py-3 px-10 hover:bg-darkYellow relative'
                    onMouseEnter={showLernfoerderungDropdown}
                    onMouseLeave={hideLernfoerderungDropdown}
                  >
                    <div className='flex items-center'>
                      Lernförderung <FontAwesomeIcon className='ml-2 w-2' icon={faCaretRight} />
                    </div>
                    {showLernfoerderung && (
                      <ul className='absolute left-full top-0 rounded-xl bg-lightYellow pb-5 shadow-md'>
                        <li className='hover:bg-darkYellow rounded-t-xl'>
                          <Link href='/lernfoerderung-berlin' className='px-10 block py-3'>
                            Berlin
                          </Link>
                        </li>
                        <li className='hover:bg-darkYellow'>
                          <Link href='/lernfoerderung-hannover' className='px-10 block py-3'>
                            Hannover
                          </Link>
                        </li>
                        <li className='hover:bg-darkYellow'>
                          <Link href='/lernfoerderung-leipzig' className='px-10 block py-3'>
                            Leipzig
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className='hover:bg-darkYellow'>
                    <Link href='/fit-fuer-die-schule' className='block py-3 px-10 text-left'>
                      Fit für die Schule
                    </Link>
                  </li>
                  <li
                    className='py-3 px-10 hover:bg-darkYellow relative'
                    onMouseEnter={showBildungsprojekteDropdown}
                    onMouseLeave={hideBildungsprojekteDropdown}
                  >
                    <div className='flex items-center'>
                      Bildungsprojekte <FontAwesomeIcon className='ml-2 w-2' icon={faCaretRight} />
                    </div>
                    {showBildungsprojekte && (
                      <ul className='absolute left-full top-0 rounded-xl bg-lightYellow pb-5 shadow-md'>
                        <li className='hover:bg-darkYellow rounded-t-xl'>
                          <Link href='/eduai' className='block py-3 px-10 text-left'>
                            EduAid
                          </Link>
                        </li>
                        <li className='hover:bg-darkYellow'>
                          <Link href='/gemeinsam-handeln' className='block py-3 px-10 text-left'>
                            Gemeinsam Handeln
                          </Link>
                        </li>
                        <li className='hover:bg-darkYellow'>
                          <Link
                            href='/ferienschule-fuer-integrative-bildung'
                            className='block py-3 px-10 text-left'
                          >
                            Ferienschulen
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className='hover:bg-darkYellow'>
                    <Link href='/bildungsevents' className='block py-3 px-10 text-left'>
                      (Bildungs)Events
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Mitmachen */}
            <li
              className='relative py-5'
              onMouseEnter={showMitmachenDropdown}
              onMouseLeave={hideMitmachenDropdown}
            >
              <div className='flex items-center'>
                Mitmachen <FontAwesomeIcon className='ml-2 w-2' icon={faCaretDown} />
              </div>
              {showMitmachen && (
                <ul className='absolute mt-5 -translate-x-1/3 rounded-b-xl bg-lightYellow pb-5 shadow-md'>
                  <li
                    className='py-3 px-10 hover:bg-darkYellow relative'
                    onMouseEnter={showJobsDropdown}
                    onMouseLeave={hideJobsDropdown}
                  >
                    <div className='flex items-center'>
                      Jobs <FontAwesomeIcon className='ml-2 w-2' icon={faCaretRight} />
                    </div>
                    {showJobs && (
                      <ul className='absolute left-full top-0 rounded-xl bg-lightYellow pb-5 shadow-md'>
                        <Link href='/jobs#jobs'>
                          <li className='py-3 px-10 hover:bg-darkYellow hover:rounded-t-xl'>
                            Ausschreibung
                          </li>
                        </Link>
                        <Link href='/jobs#initiativbewerbung'>
                          <li className='py-3 px-10 hover:bg-darkYellow'>Initiativbewerbung</li>
                        </Link>
                      </ul>
                    )}
                  </li>
                  <li
                    className='py-3 px-10 hover:bg-darkYellow relative'
                    onMouseEnter={showAktivWerdenDropdown}
                    onMouseLeave={hideAktivWerdenDropdown}
                  >
                    <div className='flex items-center'>
                      Aktiv Werden <FontAwesomeIcon className='ml-2 w-2' icon={faCaretRight} />
                    </div>
                    {showAktivWerden && (
                      <ul className='absolute left-full top-0 rounded-xl bg-lightYellow pb-5 shadow-md'>
                        <Link href='/aktiv-werden#ehrenamt'>
                          <li className='py-3 px-10 hover:bg-darkYellow hover:rounded-t-xl'>
                            Ehrenamt
                          </li>
                        </Link>
                        <Link href='/aktiv-werden#praktikum'>
                          <li className='py-3 px-10 hover:bg-darkYellow'>Praktikum</li>
                        </Link>
                        <Link href='/aktiv-werden#bundesfreiwilligendienst'>
                          <li className='py-3 px-10 hover:bg-darkYellow'>
                            Bundesfreiwilligendienst
                          </li>
                        </Link>
                      </ul>
                    )}
                  </li>
                  <Link href='/duales-studium'>
                    <li className='py-3 px-10 hover:bg-darkYellow'>Duales Studium</li>
                  </Link>
                  <Link href='/berufsvorbereitung'>
                    <li className='py-3 px-10 hover:bg-darkYellow'>Berufsvorbereitung</li>
                  </Link>
                </ul>
              )}
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
              <FontAwesomeIcon className='w-5' icon={faEnvelope} />
            </a>
          </div>
          {/* Burger Menu */}
          <BurgerMenu
            hamburgerClicked={hamburgerClicked}
            toogleHamburgerMenu={toogleHamburgerMenu}
          />
        </div>
      </nav>

      {/* Burger Menu */}
      <div
        className={`fixed z-40 h-screen w-screen bg-lightYellow transition-all duration-700 ease-out lg:pt-24 ${
          hamburgerClicked ? '-translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Container */}
        <div className='flex h-full max-w-screen-xl flex-col items-start pl-14 justify-center font-berlin text-3xl sm:text-[40px]'>
          {/* Header */}
          <Link href='/#ueberuns' onClick={toogleHamburgerMenu} className='mb-10 sm:mb-16 block'>
            Über uns
          </Link>

          <div className='mb-10 sm:mb-16'>
            <div onClick={toggleBurgerProjekte} className='flex items-center cursor-pointer'>
              Projekte
              <motion.div
                animate={{ rotate: burgerProjekteOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FontAwesomeIcon className='mx-2 w-4' icon={faCaretDown} />
              </motion.div>
            </div>
            <AnimatePresence>
              {burgerProjekteOpen && (
                <motion.ul
                  className='ml-4 mt-4'
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  variants={dropdownVariants}
                >
                  <li className='text-2xl'>
                    <div
                      onClick={toggleBurgerLernfoerderung}
                      className='flex items-center cursor-pointer'
                    >
                      Lernförderung
                      <motion.div
                        animate={{ rotate: burgerLernfoerderungOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FontAwesomeIcon className='mx-2 w-4' icon={faCaretDown} />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {burgerLernfoerderungOpen && (
                        <motion.ul
                          className='ml-4 mt-2 text-xl'
                          initial='hidden'
                          animate='visible'
                          exit='hidden'
                          variants={dropdownVariants}
                        >
                          <li>
                            <Link href='/lernfoerderung-berlin' onClick={toogleHamburgerMenu}>
                              Berlin
                            </Link>
                          </li>
                          <li>
                            <Link href='/lernfoerderung-hannover' onClick={toogleHamburgerMenu}>
                              Hannover
                            </Link>
                          </li>
                          <li>
                            <Link href='/lernfoerderung-leipzig' onClick={toogleHamburgerMenu}>
                              Leipzig
                            </Link>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                  <li className='mt-4'>
                    <Link
                      href='/fit-fuer-die-schule'
                      onClick={toogleHamburgerMenu}
                      className='text-2xl'
                    >
                      Fit für die Schule
                    </Link>
                  </li>
                  <li className='mt-4'>
                    <div
                      onClick={toggleBurgerBildungsprojekte}
                      className='flex items-center cursor-pointer text-2xl'
                    >
                      Bildungsprojekte
                      <motion.div
                        animate={{ rotate: burgerBildungsprojekteOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FontAwesomeIcon className='mx-2 w-4' icon={faCaretDown} />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {burgerBildungsprojekteOpen && (
                        <motion.ul
                          className='ml-4 mt-2 text-xl'
                          initial='hidden'
                          animate='visible'
                          exit='hidden'
                          variants={dropdownVariants}
                        >
                          <li>
                            <Link href='/eduai' onClick={toogleHamburgerMenu}>
                              EduAid
                            </Link>
                          </li>
                          <li>
                            <Link href='/gemeinsam-handeln' onClick={toogleHamburgerMenu}>
                              Gemeinsam Handeln
                            </Link>
                          </li>
                          <li>
                            <Link
                              href='/ferienschule-fuer-integrative-bildung'
                              onClick={toogleHamburgerMenu}
                            >
                              Ferienschulen
                            </Link>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <div className='mb-10 sm:mb-16'>
            <div onClick={toggleBurgerMitmachen} className='flex items-center cursor-pointer'>
              Mitmachen
              <motion.div
                animate={{ rotate: burgerMitmachenOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FontAwesomeIcon className='mx-2 w-4' icon={faCaretDown} />
              </motion.div>
            </div>
            <AnimatePresence>
              {burgerMitmachenOpen && (
                <motion.ul
                  className='ml-4 mt-4'
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  variants={dropdownVariants}
                >
                  <li className='text-2xl'>
                    <div onClick={toggleBurgerJobs} className='flex items-center cursor-pointer'>
                      Jobs
                      <motion.div
                        animate={{ rotate: burgerJobsOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FontAwesomeIcon className='mx-2 w-4' icon={faCaretDown} />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {burgerJobsOpen && (
                        <motion.ul
                          className='ml-4 mt-2 text-xl'
                          initial='hidden'
                          animate='visible'
                          exit='hidden'
                          variants={dropdownVariants}
                        >
                          <li>
                            <Link href='/jobs#jobs' onClick={toogleHamburgerMenu}>
                              Ausschreibung
                            </Link>
                          </li>
                          <li>
                            <Link href='/jobs#initiativbewerbung' onClick={toogleHamburgerMenu}>
                              Initiativbewerbung
                            </Link>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                  <li className='text-2xl mt-4'>
                    <div
                      onClick={toggleBurgerAktivWerden}
                      className='flex items-center cursor-pointer'
                    >
                      Aktiv Werden
                      <motion.div
                        animate={{ rotate: burgerAktivWerdenOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FontAwesomeIcon className='mx-2 w-4' icon={faCaretDown} />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {burgerAktivWerdenOpen && (
                        <motion.ul
                          className='ml-4 mt-2 text-xl'
                          initial='hidden'
                          animate='visible'
                          exit='hidden'
                          variants={dropdownVariants}
                        >
                          <li>
                            <Link href='/aktiv-werden#ehrenamt' onClick={toogleHamburgerMenu}>
                              Ehrenamt
                            </Link>
                          </li>
                          <li>
                            <Link href='/aktiv-werden#praktikum' onClick={toogleHamburgerMenu}>
                              Praktikum
                            </Link>
                          </li>
                          <li>
                            <Link
                              href='/aktiv-werden#bundesfreiwilligendienst'
                              onClick={toogleHamburgerMenu}
                            >
                              Bundesfreiwilligendienst
                            </Link>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                  <li className='text-2xl mt-4'>
                    <Link href='/duales-studium' onClick={toogleHamburgerMenu} className='block'>
                      Duales Studium
                    </Link>
                  </li>
                  <li className='text-2xl mt-4'>
                    <Link
                      href='/berufsvorbereitung'
                      onClick={toogleHamburgerMenu}
                      className='block'
                    >
                      Berufsvorbereitung
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
