import React, { Fragment } from 'react';
import '../../css/style.css';

// Hikes Section
const Hikes = () => {
  return (
    <Fragment>
      <section className='section-hikes'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>Most popular hikes</h2>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>TEXT</div>
              <div className='card__side card__side--back'>TEXT</div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>TEXT</div>
              <div className='card__side card__side--back'>TEXT</div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>TEXT</div>
              <div className='card__side card__side--back'>TEXT</div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hikes;
