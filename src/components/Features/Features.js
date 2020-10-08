import React, { Fragment } from 'react';
import '../../css/style.css';

// Features Section
const Features = () => {
  return (
    <Fragment>
      <section className='section-features'>
        <row className=''>
          <div className='col-1-of-4'>
            <div className='feature-box'>
              <i className='feature-box__icon icon-basic-world'></i>
              <h3 className='heading-tertiary'>Explore the world</h3>
              <p className='feature-box__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, molestias? Officiis iusto atque dolore deleniti
                repellat blanditiis perspiciatis omnis quos! Quibusdam autem
                obcaecati quia nisi labore optio facilis expedita ut?
              </p>
            </div>
          </div>
        </row>
      </section>
    </Fragment>
  );
};

export default Features;
