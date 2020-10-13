import React, { Fragment } from 'react';
import '../../css/style.css';

const logo = require('../../images/logo-green-2x.png');

// Footer Section
const Footer = () => {
  return (
    <Fragment>
      <footer className='footer'>
        <div className='footer__logo-box'>
          <img src={logo} alt='Full Logo' />
        </div>
        <div className='row'>
          <div className='col-1-of-2'></div>
          <div className='col-1-of-2'></div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
