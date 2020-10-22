import React, { Fragment } from 'react';
import '../../css/style.css';

// Images for use in the three image composition
const p1 = require('../../images/nat-1.jpg');
const p2 = require('../../images/nat-2.jpg');
const p3 = require('../../images/nat-3.jpg');

// Images for use in the three image composition in large vw
const p1Large = require('../../images/nat-1-large.jpg');
const p2Large = require('../../images/nat-2-large.jpg');
const p3Large = require('../../images/nat-3-large.jpg');

// About Section
const About = () => {
  return (
    <Fragment>
      <section className='section-about'>
        <div className='u-center-text u-margin-bottom-large'>
          <h2 className='heading-secondary'>
            Exciting hikes for the adventurous!
          </h2>
        </div>

        <div className='row'>
          <div className='col-1-of-2'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              You're going to fall in love with nature
            </h3>
            <p className='paragraph'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              accusamus molestias distinctio velit deleniti quia cum
              praesentium, officia harum voluptatem quam, doloremque, assumenda
              rem iusto quas accusantium dolor? Exercitationem, voluptatum.
            </p>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Live adventurous and make new friends!
            </h3>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vel
              omnis corporis et sequi amet. Delectus aut fugiat labore quidem
              atque explicabo enim? Sapiente, eum.
            </p>

            <a className='btn-text' href='#'>
              Learn more &rarr;
            </a>
          </div>
          <div className='col-1-of-2'>
            <div className='composition'>
              <img
                srcSet={`${p1} 300w, ${p1Large} 1000w`}
                alt='Photo 1'
                className='composition__photo composition__photo--p1'
                // (*breakpoint*) *approximate percentage images takes up*, (another breakpoint etc.) *another percentage in vw*, *at the end just define the default pixel width at your main viewport*
                sizes='(max-width: 900px) 17vw, (max-width: 600px) 26vw, 300px'
                src={p1Large} // Serve this if the browser is too old for srcset and sizes attributes
              />
              <img
                srcSet={`${p2} 300w, ${p2Large} 1000w`}
                alt='Photo 2'
                className='composition__photo composition__photo--p2'
                sizes='(max-width: 900px )'
              />
              <img
                srcSet={`${p3} 300w, ${p3Large} 1000w`}
                alt='Photo 3'
                className='composition__photo composition__photo--p3'
                sizes='(max-width: 900px )'
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
