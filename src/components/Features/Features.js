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
            <FeatureBox
              icon='icon-basic-world'
              heading='Be one with nature'
              text='Dolore eligendi velit saepe alias possimus voluptates autem id quod corporis expedita!'
            />
            <FeatureBox
              icon='icon-basic-world'
              heading='Discover your path'
              text='Iusto, facilis nihil sint suscipit officia cum molestias perferendis libero eaque!'
            />
            <FeatureBox
              icon='icon-basic-world'
              heading='Lead a healthier life'
              text='Vitae libero cum cupiditate pariatur exercitationem consequatur? Possimus nesciunt nemo saepe excepturi.'
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Features;
