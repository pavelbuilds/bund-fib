'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import BurgerMenu from '../BurgerMenu';
import SocialLinks from './SocialLinks';
import { navigation } from '../../lib/navigation';

const dropdownVariants = {
  hidden: { opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeInOut' } },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeInOut' } },
};

/** Second-level flyout that opens to the right of a desktop dropdown entry. */
const DesktopFlyout = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className='relative py-3 px-10 hover:bg-darkYellow'
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className='flex items-center'>
        {item.label} <FontAwesomeIcon className='ml-2 w-2' icon={faCaretRight} />
      </div>
      {open && (
        <ul className='absolute left-full top-0 rounded-xl bg-lightYellow pb-5 shadow-md'>
          {item.children.map((child, index) => (
            <li
              key={child.label}
              className={`hover:bg-darkYellow ${index === 0 ? 'rounded-t-xl' : ''}`}
            >
              <Link href={child.href} className='block py-3 px-10 whitespace-nowrap'>
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

/** Top-level desktop menu entry; renders a hover dropdown when it has children. */
const DesktopNavItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <li>
        <Link href={item.href} className='block'>
          {item.label}
        </Link>
      </li>
    );
  }

  const trigger = (
    <span className='flex items-center'>
      {item.label} <FontAwesomeIcon className='ml-2 w-2' icon={faCaretDown} />
    </span>
  );

  return (
    <li
      className='relative py-5'
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {item.href ? <Link href={item.href}>{trigger}</Link> : trigger}
      {open && (
        <ul className='absolute mt-5 -translate-x-1/3 rounded-b-xl bg-lightYellow pb-5 shadow-md'>
          {item.children.map((child) =>
            child.children ? (
              <DesktopFlyout key={child.label} item={child} />
            ) : (
              <li key={child.label} className='hover:bg-darkYellow'>
                <Link href={child.href} className='block py-3 px-10 text-left whitespace-nowrap'>
                  {child.label}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </li>
  );
};

/**
 * Entry of the mobile burger menu. Items with children become an animated
 * accordion; plain links close the burger menu on navigation.
 */
const BurgerNavItem = ({ item, depth = 0, onNavigate }) => {
  const [open, setOpen] = useState(false);

  const textSize = ['', 'text-2xl', 'text-xl'][depth] || 'text-xl';

  if (!item.children) {
    return (
      <li className={depth > 0 ? `mt-4 ${textSize}` : ''}>
        <Link href={item.href} onClick={onNavigate} className='block'>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className={depth > 0 ? `mt-4 ${textSize}` : ''}>
      <button
        type='button'
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className='flex items-center cursor-pointer'
      >
        {item.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <FontAwesomeIcon className='mx-2 w-4' icon={faCaretDown} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            className='ml-4 mt-2 overflow-hidden'
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={dropdownVariants}
          >
            {item.children.map((child) => (
              <BurgerNavItem
                key={child.label}
                item={child}
                depth={depth + 1}
                onNavigate={onNavigate}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

/**
 * Fixed page header: logo, desktop menu with hover dropdowns, social links
 * and the full-screen mobile burger menu. Menu entries live in
 * lib/navigation.js.
 */
const NavBar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => setBurgerOpen((value) => !value);
  const closeBurger = () => setBurgerOpen(false);

  return (
    <>
      <nav className='fixed z-50 min-w-full bg-lightYellow py-3 shadow-md lg:py-0'>
        <div className='mx-auto flex max-w-screen-xl items-center justify-between px-5 sm:px-20'>
          {/* Logo */}
          <Link href='/'>
            <Image
              src='/images/logos/bund_fib_logo.webp'
              width={170}
              height={75}
              alt='Bund-fiB Logo'
            />
          </Link>
          {/* Desktop menu */}
          <ul className='hidden w-[500px] items-center justify-between font-source text-sm lg:flex'>
            {navigation.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </ul>
          {/* Social media icons */}
          <div className='hidden items-center gap-4 md:flex'>
            <SocialLinks />
          </div>
          {/* Burger toggle (mobile only) */}
          <BurgerMenu hamburgerClicked={burgerOpen} toogleHamburgerMenu={toggleBurger} />
        </div>
      </nav>

      {/* Full-screen burger menu */}
      <div
        className={`fixed z-40 h-screen w-screen bg-lightYellow transition-all duration-700 ease-out lg:pt-24 ${
          burgerOpen ? '-translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='flex h-full max-w-screen-xl flex-col items-start justify-center font-berlin text-3xl sm:text-[40px]'>
          <ul className='flex flex-col items-start [&>li]:mb-10 [&>li]:sm:mb-16 [&>li]:pl-14'>
            {navigation.map((item) => (
              <BurgerNavItem key={item.label} item={item} onNavigate={closeBurger} />
            ))}
          </ul>
          {/* Social media icons (small screens only) */}
          <div className='mt-10 flex w-full items-center justify-center gap-4 md:hidden'>
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
