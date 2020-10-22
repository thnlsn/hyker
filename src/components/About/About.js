import React, { Fragment } from 'react';
import '../../css/style.css';
import Composition from './Composition';

const composition = [
  {
    imageSmall: require('../../images/nat-1.jpg'),
    imageLarge: require('../../images/nat-1-large.jpg'),
  },
  {
    imageSmall: require('../../images/nat-2.jpg'),
    imageLarge: require('../../images/nat-2-large.jpg'),
  },
  {
    imageSmall: require('../../images/nat-3.jpg'),
    imageLarge: require('../../images/nat-3-large.jpg'),
  },
];

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
            <Composition composition={composition} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;

/* // Images for use in the three image composition
const p1 = require('../../images/nat-1.jpg');
const p2 = require('../../images/nat-2.jpg');
const p3 = require('../../images/nat-3.jpg');

// Images for use in the three image composition in large vw
const p1Large = require('../../images/nat-1-large.jpg');
const p2Large = require('../../images/nat-2-large.jpg');
const p3Large = require('../../images/nat-3-large.jpg'); */
