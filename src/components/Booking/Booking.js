import React, { Fragment } from 'react';
import '../../css/style.css';

import Form from './BookingForm';

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
                action='#' // For now it is just a blank
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Booking;
