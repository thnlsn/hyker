import React from 'react';

const Testimonial = ({ image }) => {
  return (
    <div className='testimonial'>
      <figure className='testimonial__image'>
        <img src={image} alt='' />
      </figure>
      <div className='testimonial__text'>
        <h3 className='heading-tertiary u-margin-bottom-small'>
          Spent the best week of my life with my family
        </h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
        voluptates odio cumque officiis iste architecto, explicabo doloribus
        provident autem expedita, non quos blanditiis velit, quasi aut?
        Voluptatibus exercitationem fugit ducimus?
      </div>
    </div>
  );
};

export default Testimonial;
