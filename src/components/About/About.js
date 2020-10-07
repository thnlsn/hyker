import React, { Fragment } from 'react';
import '../../css/style.css';

// About Section
const About = () => {
  return (
    <Fragment>
      {/* The "main" element is purely semantic, it is used as the wrapper for the sections between the header and footer, or the "main" bulk of your page content */}
      <main>
        <section className='section-about'>
          <div className='u-center-text u-margin-bottom-large'>
            <h2 className='heading-secondary'>
              Exciting hikes for the adventurous!
            </h2>
          </div>

          <div className='row'>
            <div className='col-1-of-2'>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                You're going to fall in love with nature
              </h3>
              <p className='paragraph'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores accusamus molestias distinctio velit deleniti quia cum
                praesentium, officia harum voluptatem quam, doloremque,
                assumenda rem iusto quas accusantium dolor? Exercitationem,
                voluptatum.
              </p>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                Live adventurous and make new friends!
              </h3>
              <p className='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vel
                omnis corporis et sequi amet. Delectus aut fugiat labore quidem
                atque explicabo enim? Sapiente, eum.
              </p>

              <a href='#'>Learn more &rarr;</a>
            </div>
            <div className='col-1-of-2'>Image</div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default About;
