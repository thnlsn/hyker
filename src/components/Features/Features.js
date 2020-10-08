import React, { Fragment } from 'react';
import '../../css/style.css';

// Features Section
const Features = () => {
  return (
    <Fragment>
      <section className='section-features'>
        <div className='row'>
          <div className='col-1-of-4'>
            <div className='feature-box'>
              {/* Create a box within the grid because we want to edit some spacing and add scaling, but don't want to directly edit the grid code */}
              <i className='feature-box__icon icon-basic-world'></i>
              <h3 className='heading-tertiary'>Explore the world</h3>
              <p className='feature-box__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, molestias? Officiis iusto atque dolore deleniti
                repellat blanditiis perspiciatis omnis quos!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Features;
