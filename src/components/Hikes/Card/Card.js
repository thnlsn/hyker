import React from 'react';

import CardFront from './CardFront';
import CardBack from './CardBack';

const Card = () => {
  return (
    <div className='card'>
      <CardFront />
      <CardBack />
    </div>
  );
};

export default Card;
