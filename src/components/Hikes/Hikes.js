import React, { Fragment } from 'react';
import '../../css/style.css';

import Card from './Card/Card';

// Hikes Section
const Hikes = () => {
  return (
    <Fragment>
      <section className='section-hikes'>
        <div className='u-center-text u-margin-bottom-large'>
          <h2 className='heading-secondary'>Most popular hikes</h2>
        </div>

        <div className='row'>
          <div className='col-1-of-3'>
            <Card
              num='1'
              heading='The Ocean Explorer'
              details={[3, 30, 2, 'cozy hotels', 'easy']}
              price='297'
            />
          </div>
          <div className='col-1-of-3'>
            <Card
              num='2'
              heading='The Forest Adventurer'
              details={[7, 40, 6, 'provided tents', 'medium']}
              price='497'
            />
          </div>
          <div className='col-1-of-3'>
            <Card
              num='3'
              heading='The Tundra Traveller'
              details={[5, 15, 3, 'provided tents', 'hard']}
              price='897'
            />
          </div>
        </div>

        <div className='u-center-text'>
          <a href='#' className='btn btn--green'>
            Discover all tours
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default Hikes;
