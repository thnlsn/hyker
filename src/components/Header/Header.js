import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-box'>
        <img src='./images/logo-white.png' alt='Logo' className='logo' />
      </div>
      <div className='text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary-main'>Outdoors</span>
          <span className='heading-primary-sub'>is where life happens</span>
        </h1>
        {/* Notice the non-usage of the button element */}
        <a href='#' className='btn btn-white btn-animated'>
          Discover our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
