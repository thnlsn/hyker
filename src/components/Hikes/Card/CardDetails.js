import React from 'react';

const CardDetails = ({ details }) => {
  return (
    <div className='card__details'>
      <ul>
        <li>{details[0]} day tours</li>
        <li>Up to {details[1]} people</li>
        <li>{details[2]} hiking guides</li>
        <li>Sleep in {details[3]} </li>
        <li>Difficulty: {details[4]}</li>
      </ul>
    </div>
  );
};

export default CardDetails;
