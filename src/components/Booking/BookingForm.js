import React from 'react';

const BookingForm = ({ heading, radio1, radio2, button, action }) => {
  return (
    <form action={action} className='form'>
      <div className='u-margin-bottom-medium'>
        <h2 className='heading-secondary'>{heading}</h2>
      </div>
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
        <label htmlFor='email' className='form__label'>
          Email address
        </label>
      </div>

      <div className='form__group u-margin-bottom-medium'>
        <div className='form__radio-group'>
          <input
            type='radio'
            className='form__radio-input'
            id='option-1'
            name='booking-form' // name is what links 2 radio buttons together as a group (so only 1 can be selected)
          />
          <label htmlFor='option-1' className='form__radio-label'>
            <span className='form__radio-button'>
              {/* This is purely for the custom radio button */}
            </span>
            {radio1}
          </label>
        </div>
        <div className='form__radio-group'>
          <input
            type='radio'
            className='form__radio-input'
            id='option-2'
            name='booking-form' // name is what links 2 radio buttons together as a group (so only 1 can be selected)
          />
          <label htmlFor='option-2' className='form__radio-label'>
            <span className='form__radio-button'>
              {/* This is purely for the custom radio button */}
            </span>
            {radio2}
          </label>
        </div>
      </div>

      <div className='form__group'>
        {/* A <button/> element automatically acts as a submit for a form */}
        <button className='btn btn--green'>{button}</button>
      </div>
    </form>
  );
};

export default BookingForm;
