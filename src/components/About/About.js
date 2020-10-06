import React, { Fragment } from 'react';
import '../../css/style.css';

// About Section
const About = () => {
  return (
    <Fragment>
      {/* The "main" element is purely semantic, it is used as the wrapper for the sections between the header and footer, or the "main" bulk of your page content */}
      <main>
        <section className='section-about'>
          <div className='u-center-text u-margin-bottom-8'>
            <h2 className='heading-secondary'>
              Exciting hikes for the adventurous!
            </h2>
          </div>

          <div className='row'>
            <div className='col-1-of-2'>Text content</div>
            <div className='col-1-of-2'>Image</div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default About;
