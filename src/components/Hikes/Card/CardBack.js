import React from 'react';

const CardBack = ({ num, price, href }) => {
  return (
    <div className={`card__side card__side--back card__side--back-${num}`}>
      <div className='card__cta'>
        <div className='card__price-box'>
          <p className='card__price-only'>Only</p>
          <p className='card__price-value'>${price}</p>
        </div>
        <a href={href} className='btn btn--white'>
          Book now!
        </a>
      </div>
    </div>
  );
};

export default CardBack;
