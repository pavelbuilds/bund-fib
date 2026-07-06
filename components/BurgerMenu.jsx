/** Animated hamburger toggle button (mobile only); styling in styles/hamburger.css. */
const BurgerMenu = ({ hamburgerClicked, toogleHamburgerMenu }) => {
  return (
    <button
      onClick={toogleHamburgerMenu}
      aria-label='Menü öffnen/schließen'
      aria-expanded={hamburgerClicked}
      className={`lg:hidden hamburger hamburger--slider ${hamburgerClicked ? 'is-active' : ''}`}
      type='button'
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </button>
  );
};

export default BurgerMenu;
