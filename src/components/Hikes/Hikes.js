import React, { Fragment } from 'react';
import '../../css/style.css';

import Card from './Card/Card';

const cards = [
  {
    href: '#modal',
    num: '1',
    heading: 'The Ocean Explorer',
    details: [3, 30, 2, 'cozy hotels', 'easy'],
    price: '297',
  },
  {
    href: '#modal',
    num: '2',
    heading: 'The Forest Adventurer',
    details: [7, 40, 6, 'provided tents', 'medium'],
    price: '497',
  },
  {
    href: '#modal',
    num: '3',
    heading: 'The Tundra Traveller',
    details: [5, 15, 3, 'provided tents', 'hard'],
    price: '897',
  },
];

// Hikes Section
const Hikes = () => {
  return (
    <Fragment>
      <section className='section-hikes' id='section-hikes'>
        <div className='u-center-text u-margin-bottom-large'>
          <h2 className='heading-secondary'>Most popular hikes</h2>
        </div>

        {/* Add a way to pass in background images, in the future */}

        <div className='row'>
          {cards.map((card) => (
            <div className='col-1-of-3'>
              <Card
                href={card.href}
                num={card.num}
                heading={card.heading}
                details={card.details}
                price={card.price}
              />
            </div>
          ))}
        </div>

        <div className='u-center-text u-margin-top-xl'>
          <a href='#' className='btn btn--green'>
            Discover all tours
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default Hikes;
