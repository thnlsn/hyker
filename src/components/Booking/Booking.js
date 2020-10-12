import React, { Fragment } from 'react';
import '../../css/style.css';

// Booking Section
const Booking = () => {
  return (
    <Fragment>
      <section className='section-booking'>
        <div className='row'>
          <div className='booking'>
            <div className='booking__form'>
              <div className='u-margin-bottom-medium'>
                <h2 className='heading-secondary'>Start booking now</h2>
              </div>
              <form action='#' className='form'>
                <div className='form__group'>
                  <input
                    type='text'
                    className='form__input'
                    placeholder='Full name'
                    id='name'
                    required
                  />
                  <label htmlFor='name' className='form__label'>
                    Full name
                  </label>
                </div>

                <div className='form__group'>
                  <input
                    type='email' // This makes it so only an email address will make this input valid (includes an @)
                    className='form__input'
                    placeholder='Email address'
                    id='email'
                    required
                  />
                  <label htmlFor='name' className='form__label'>
                    Email address
                  </label>
                </div>

                <div className='form__group'>
                  <div className='form__radio-group'>
                    <input
                      type='radio'
                      className='form__radio-input'
                      id='small'
                      name='size' // name is what links 2 radio buttons together as a group (so only 1 can be selected)
                    />
                    <label htmlFor='small' className='form__radio-label'>
                      <span className='form__radio-button'>
                        {/* This is purely for the custom radio button */}
                      </span>
                      Small group
                    </label>
                  </div>
                  <div className='form__radio-group'>
                    <input
                      type='radio'
                      className='form__radio-input'
                      id='large'
                      name='size' // name is what links 2 radio buttons together as a group (so only 1 can be selected)
                    />
                    <label htmlFor='large' className='form__radio-label'>
                      <span className='form__radio-button'>
                        {/* This is purely for the custom radio button */}
                      </span>
                      Large group
                    </label>
                  </div>

                  <div className='form__group'>
                    <button className='btn btn--green'>Next Step &rarr;</button>{' '}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Booking;
