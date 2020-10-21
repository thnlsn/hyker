import React, { Fragment } from 'react';

const NavigationToggle = () => {
  return (
    <Fragment>
      <input
        type='checkbox'
        className='navigation__checkbox'
        id='navigation-toggle'
      />

      <label htmlFor='navigation-toggle' className='navigation__button'>
        <span className='navigation__icon unselectable'>&nbsp;</span>
      </label>

      <div className='navigation__background unselectable'>&nbsp;</div>
    </Fragment>
  );
};

export default NavigationToggle;
