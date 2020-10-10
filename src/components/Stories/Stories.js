import React, { Fragment } from 'react';
import '../../css/style.css';

// Stories Section
const Stories = () => {
  return (
    <Fragment>
      <section className='section-stories'>
        <div className='u-center-text u-margin-bottom-large'>
          <h2 className='heading-secondary'>We make people genuinely happy</h2>
        </div>

        {/* Rather than using the row for colums, we're using because it is a nicely centered container */}
        <div className='row'></div>
      </section>
    </Fragment>
  );
};

export default Stories;
