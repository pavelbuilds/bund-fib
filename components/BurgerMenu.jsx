import { useState } from 'react';

const BurgerMenu = ({ state, onClickFunc }) => {
  const [isClicked, setIsClicked] = useState(false);
  const toogleHamburgerMenu = () => {
    setIsClicked(!isClicked);
  };
  return (
    <button
      onClick={onClickFunc}
      className={`lg:hidden hamburger hamburger--slider ${state ? 'is-active' : ''}`}
      type='button'
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </button>
  );
};

export default BurgerMenu;
