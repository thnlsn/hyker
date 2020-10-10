import React from 'react';

import CardDetails from './CardDetails';

const CardFront = ({ num, heading, details }) => {
  return (
    <div className='card__side card__side--front'>
      <div className={`card__picture card__picture--${num}`}>&nbsp;</div>
      <h4 className='card__heading'>
        <span className={`card__heading-span card__heading-span--${num}`}>
          {heading}
        </span>
      </h4>
      <CardDetails details={details} />
    </div>
  );
};

export default CardFront;
