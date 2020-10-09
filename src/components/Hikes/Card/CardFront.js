import React from 'react';

import CardDetails from './CardDetails';

const CardFront = () => {
  return (
    <div className='card__side card__side--front'>
      <div className='card__picture card__picture--1'>&nbsp;</div>
      <h4 className='card__heading'>
        <span className='card__heading-span card__heading-span--1'>
          The Ocean Explorer
        </span>
      </h4>
      <CardDetails />
    </div>
  );
};

export default CardFront;
