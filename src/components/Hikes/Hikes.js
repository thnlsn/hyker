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
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--1'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--1'>
                    The Ocean Explorer
                  </span>
                </h4>
                <div className='card__details'>Details</div>
              </div>
              <div className='card__side card__side--back card__side--back-1'>
                only
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--2'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--2'>
                    The Forest Adventurer
                  </span>
                </h4>
                <div className='card__details'>Details</div>
              </div>
              <div className='card__side card__side--back card__side--back-2'>
                only
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--3'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--3'>
                    The Tundra Traveller
                  </span>
                </h4>
                <div className='card__details'>Details</div>
              </div>
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
