import React from 'react';

import CardFront from './CardFront';
import CardBack from './CardBack';

const Card = ({ href, num, heading, details, price }) => {
  {/* Add a way to pass in background images, in the future */}
  return (
    <div className='card'>
      <CardFront num={num} heading={heading} details={details} />
      <CardBack num={num} price={price} href={href} />
    </div>
  );
};

export default Card;
