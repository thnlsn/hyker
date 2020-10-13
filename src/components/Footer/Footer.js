import React, { Fragment } from 'react';
import '../../css/style.css';

const logo = require('../../images/logo-green-2x.png');

// Footer Section
const Footer = () => {
  return (
    <Fragment>
      <footer className='footer'>
        <div className='footer__logo-box'>
          <img src={logo} alt='Full Logo' className='footer__logo' />
        </div>
        <div className='row'>
          <div className='col-1-of-2'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Company
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Contact us
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Careers
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Privacy
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className='col-1-of-2'>
            <p className='footer__copyright'>
              Built by{' '}
              <a href='https://www.thnlsn.me/' className='footer__link'>
                Thomas Nelson
              </a>{' '}
              as practice learning CSS and Sass.
            </p>
            Copyright &copy; by Jonas Schmedtmann
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
