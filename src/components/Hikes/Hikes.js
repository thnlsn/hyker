import React, { Fragment } from 'react';
import '../../css/style.css';

// Hikes Section
const Hikes = () => {
  return (
    <Fragment>
      <section className='section-tours'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>Most popular hikes</h2>
        </div>
        <div className='row'>
          <div className='col-1-of-3'></div>
          <div className='col-1-of-3'></div>
          <div className='col-1-of-3'></div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hikes;
