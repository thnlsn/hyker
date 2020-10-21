import React, { Fragment } from 'react';
import '../../css/style.css';

// 1x pixel density for low res screens (normal desktop screens)
const logo1x = require('../../images/logo-green-1x.png');
// 2x pixel density for high res screens (smartphones, iPads, retina display, etc.)
const logo2x = require('../../images/logo-green-2x.png');

// Horizontally displayed logo image for phone screens
const logoMobile1x = require('../../images/logo-green-small-1x.png');
// Horizontally displayed logo image for phone screens with high res displays
const logoMobile2x = require('../../images/logo-green-small-2x.png');

// Footer Section
const Footer = () => {
  return (
    <Fragment>
      <footer className='footer'>
        <div className='footer__logo-box'>
          <picture className='footer__logo'>
            {/* Art direction - switching image based upon a given width (like a media query) */}
            <source
              srcSet={`${logoMobile1x} 1x, ${logoMobile2x} 2x`}
              media='(max-width: 37.5em)'
            />
            {/* Density switching - switching image based upon screen resolution */}
            <img srcSet={`${logo1x} 1x, ${logo2x} 2x`} alt='Full Logo' />
          </picture>
        </div>
        <div className='row'>
          <div className='col-1-of-2'>
            <div className='footer__navigation'>
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
          </div>
          <div className='col-1-of-2'>
            <p className='footer__copyright'>
              Built by{' '}
              <a href='https://www.thnlsn.me/' className='footer__link'>
                Thomas Nelson
              </a>{' '}
              as practice learning CSS and Sass.
              <span> Copyright &copy; by Jonas Schmedtmann</span>
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
