import React from 'react';

import CardFront from './CardFront';
import CardBack from './CardBack';

const Card = ({ num, heading, details, price }) => {
  return (
    <div className='card'>
      <CardFront num={num} heading={heading} details={details} />
      <CardBack num={num} price={price} />
    </div>
  );
};

export default Card;
