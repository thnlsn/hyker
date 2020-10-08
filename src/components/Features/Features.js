import React, { Fragment } from 'react';
import '../../css/style.css';
import FeatureBox from './FeatureBox';

// Features Section
const Features = () => {
  return (
    <Fragment>
      <section className='section-features'>
        <div className='row'>
          <div className='col-1-of-4'>
            <FeatureBox
              icon='icon-basic-world'
              heading='Explore the world'
              text='Officiis iusto atque dolore deleniti repellat blanditiis perspiciatis omnis quos!'
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Features;
