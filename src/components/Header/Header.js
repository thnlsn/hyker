import React, { Fragment } from 'react';
import '../../css/style.css';

// Header
const Header = () => {
  return (
    <Fragment>
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
          {/* Notice the non-usage of the button element, instead using classes to create button effect */}
          <a href='#' className='btn btn--white btn--animated'>
            Discover our services
          </a>
        </div>
      </header>

      {/* Custom grid */}
      <section className='grid-test'>
        <div className='row'>
          <div className='col-1-of-2'>Col 1 of 2</div>
          <div className='col-1-of-2'>Col 1 of 2</div>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>Col 1 of 3</div>
          <div className='col-1-of-3'>Col 1 of 3</div>
          <div className='col-1-of-3'>Col 1 of 3</div>
        </div>
      </section>
    </Fragment>
  );
};

export default Header;
