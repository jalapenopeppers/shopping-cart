import React, {useState, useEffect} from 'react';

import cartIcon from '../icons/cart-icon.svg';

const ShowCartButton = () => {
  const [cartShown, setCartShown] = useState(false);
  useEffect(() => {
    toggleCart('hide');
  }, []);

  // Toggles cart state. Forcestate can = 'hide' or 'show' to force state
  const toggleCart = (forceState) => {
    // NOTE: forceState will sometimes equal synthetic event e when toggleCart is called with no args
    if (forceState !== 'show' && forceState !== 'hide') forceState = null;

    const cartElem = document.querySelector('div.cart');
    if (cartElem === null) return;
    const posInfo = cartElem.getBoundingClientRect();
    const currWidth = posInfo.width;

    const navButtons = document.querySelector('nav.navigation ul.buttons-list');
    console.log('forceState =', forceState);
    if ((cartShown && forceState === null) || forceState === 'hide') {
      // hide cart
      setCartShown(false);
      cartElem.style.transform = `translateX(${currWidth}px)`;
      navButtons.style.transform = `translateX(0px)`;
      console.log('Cart shown: false');
    } else if ((!cartShown && forceState === null) || forceState === 'show') {
      //show cart
      setCartShown(true);
      cartElem.style.transform = `translateX(0px)`;
      navButtons.style.transform = `translateX(${-1 * currWidth}px)`;
      console.log('Cart shown: true');
    }
  }

  return (
    <img 
      className="view-cart-icon" 
      src={cartIcon} 
      alt="Cart icon" 
      onClick={toggleCart}
    />
  );
}

export default ShowCartButton;