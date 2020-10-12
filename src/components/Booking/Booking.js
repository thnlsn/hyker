import React, { Fragment } from 'react';
import '../../css/style.css';

import Form from './Form';

// Booking Section
const Booking = () => {
  return (
    <Fragment>
      <section className='section-booking'>
        <div className='row'>
          <div className='booking'>
            <div className='booking__form'>
              <Form heading='Start booking now' />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Booking;
