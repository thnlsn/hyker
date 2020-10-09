import React, { Fragment } from 'react';
import '../../css/style.css';

// Hikes Section
const Hikes = () => {
  return (
    <Fragment>
      <section className='section-hikes'>
        <div className='u-center-text'>
          <h2 className='heading-secondary u-margin-bottom-large'>
            Most popular hikes
          </h2>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>TEXT</div>
              <div className='card__side card__side--back card__side--back-1'>
                only
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>TEXT</div>
              <div className='card__side card__side--back card__side--back-2'>
                only
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>TEXT</div>
              <div className='card__side card__side--back card__side--back-3'>
                only
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hikes;
