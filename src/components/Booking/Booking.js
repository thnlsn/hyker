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
              <Form
                heading='Start booking now'
                radio1='Small group'
                radio2='Large group'
                button='Next Step &rarr;'
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Booking;
