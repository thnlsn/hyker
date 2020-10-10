import React from 'react';

const CardBack = ({ num, price }) => {
  return (
    <div className={`card__side card__side--back card__side--back-${num}`}>
      <div>only</div>
      <div>{price}</div>
      <a href='#' className='btn btn--white'>
        Book now!
      </a>
    </div>
  );
};

export default CardBack;
