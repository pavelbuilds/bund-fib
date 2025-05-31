import { useState } from 'react';

const BurgerMenu = ({ hamburgerClicked, toogleHamburgerMenu }) => {
  return (
    <>
      <button
        onClick={toogleHamburgerMenu}
        className={`lg:hidden hamburger hamburger--slider ${hamburgerClicked ? 'is-active' : ''}`}
        type='button'
      >
        <span className='hamburger-box'>
          <span className='hamburger-inner'></span>
        </span>
      </button>
    </>
  );
};

export default BurgerMenu;
