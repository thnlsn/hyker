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
          <div className='col-1-of-4'>
            <FeatureBox
              icon='icon-basic-compass'
              heading='Be one with nature'
              text='Dolore eligendi velit saepe alias possimus voluptates autem id corporis expedita!'
            />
          </div>
          <div className='col-1-of-4'>
            <FeatureBox
              icon='icon-basic-map'
              heading='Discover your path'
              text='Iusto, facilis nihil sint suscipit officia molestias perferendis libero eaque!'
            />
          </div>
          <div className='col-1-of-4'>
            <FeatureBox
              icon='icon-basic-heart'
              heading='Lead a healthier life'
              text='Vitae libero pariatur  sequatur? Possimus nemo saepe excepturi.'
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Features;
