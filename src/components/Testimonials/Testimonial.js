import React from 'react';

const Testimonial = ({ name, image, heading, text }) => {
  return (
    <div className='testimonial'>
      <figure className='testimonial__shape'>
        <img
          srcSet={image}
          alt={`${name} Testimonial`}
          className='testimonial__image'
          src={image}
        />
        <figcaption className='testimonial__caption'>{name}</figcaption>
      </figure>
      <div className='testimonial__text'>
        <h3 className='heading-tertiary u-margin-bottom-small'>{heading}</h3>
        {text}
      </div>
    </div>
  );
};

export default Testimonial;
