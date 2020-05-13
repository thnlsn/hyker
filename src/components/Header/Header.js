import React from 'react';
import '../../css/style.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo-box'>
        <img
          src='./images/logo-white.png'
          alt='Logo'
          className='header__logo'
        />
      </div>
      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>Outdoors</span>
          <span className='heading-primary--sub'>is where life happens</span>
        </h1>
        {/* Notice the non-usage of the button element */}
        <a href='#' className='btn btn--white btn--animated'>
          Discover our services
        </a>
      </div>
    </header>
  );
};

export default Header;
