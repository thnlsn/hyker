import React, { Fragment } from 'react';
import '../../css/style.css';

import Testimonial from './Testimonial';

// Images for use in the testimonials
const p1 = require('../../images/nat-8.jpg');
const p2 = require('../../images/nat-9.jpg');

// Video to be used for the background
const videoMp4 = require('../../images/video.mp4');
const videoWebm = require('../../images/video.webm');

// Testimonials Section
const Testimonials = () => {
  return (
    <Fragment>
      <section className='section-testimonials'>
        <div className='bg-video'>
          <video className='bg-video__content' autoPlay muted loop>
            <source src={videoMp4} type='video/mp4' />
            <source src={videoWebm} type='video/webm' />
            Your browser does not support this video!
          </video>
        </div>

        <div className='u-center-text u-margin-bottom-large'>
          <h2 className='heading-secondary'>We make people genuinely happy</h2>
        </div>

        {/* Rather than using the row for colums, we're using because it is a nicely centered container */}
        <div className='row'>
          <Testimonial
            name='Faye Annesley'
            image={p1}
            heading='Spent the best week of my life with my family'
            text='Aperiam, ipsum dolor sil amet consectetur adipisicing elit. Sunt voluptates odio cumque officiis iste architecto, explicabo doloribus provident autem expedita, non quos blanditiis velit, quasi aut? Voluptatibus exercitationem fugit ducimus?'
          />
        </div>
        <div className='row'>
          <Testimonial
            name='Aleksander Matsen'
            image={p2}
            heading='These experiences have changed my life'
            text='Similique, nisi voluptatem, alias magnam deserunt eligendi minima atque odit natus impedit maiores doloribus beatae. Ea eligendi itaque quisquam et provident ipsum, a, accusantium ratione in nobis, aperiam vero debitis. Reprehenderit dolore asperiores, atque quaerat incidunt quibusdam.'
          />
        </div>
        <div className='u-center-text u-margin-top-xl'>
          <a className='btn-text' href='#'>
            Read all stories &rarr;
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonials;
