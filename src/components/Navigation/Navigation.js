import React from 'react';

import NavigationToggle from './NavigationToggle';

const Navigation = () => {
  return (
    <div className='navigation'>
    <NavigationToggle />

      <nav className='navigation__nav'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              About Hyker
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              Your benefits
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              Popular hikes
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              Stories
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
