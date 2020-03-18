import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-box'>
        <img src='./images/logo-white.png' alt='Logo' className='logo' />
      </div>
      <h1 className='heading-primary'>
        <span className='heading-primary-main'>Outdoors</span>
        <span className='heading-primary-sub'>is where life happens</span>
      </h1>
    </header>
  );
};

export default Header;
