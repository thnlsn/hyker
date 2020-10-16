import React from 'react';

const tourPhoto1 = require('../../images/nat-8.jpg');
const tourPhoto2 = require('../../images/nat-9.jpg');

const Modal = () => {
  return (
    <div className='modal' id='modal'>
      <div className='modal__content'>
        <div className='modal__left'>
          <img src={tourPhoto1} alt='Tour photo' className='modal__img' />
          <img src={tourPhoto2} alt='Tour photo' className='modal__img' />
        </div>
        <div className='modal__right'>
          <a href='#section-hikes' className='modal__close'>
            &times;
          </a>
          <h2 className='heading-secondary u-margin-bottom-small'>
            Start booking now
          </h2>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            Important &ndash; Please read carefully before booking
          </h3>
          <p className='modal__text u-margin-bottom-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
            bibendum enim facilisis gravida neque convallis a cras. Odio ut sem
            nulla pharetra diam. Tincidunt dui ut ornare lectus sit. Posuere
            urna nec tincidunt praesent semper feugiat nibh sed. Molestie ac
            feugiat sed lectus. Lectus mauris ultrices eros in. Suspendisse
            faucibus interdum posuere lorem ipsum dolor sit. Semper risus in
            hendrerit gravida rutrum. Vel eros donec ac odio tempor. In metus
            vulputate eu scelerisque felis imperdiet proin fermentum. Tellus
            integer feugiat scelerisque varius morbi enim. Maecenas sed enim ut
            sem viverra aliquet. Venenatis cras sed felis eget velit aliquet
            sagittis id consectetur. Eget nunc scelerisque viverra mauris in
            aliquam sem fringilla ut. Rhoncus mattis rhoncus urna neque. Rhoncus
            mattis rhoncus urna neque viverra justo nec ultrices. Netus et
            malesuada fames ac turpis egestas maecenas pharetra. Enim eu turpis
            egestas pretium aenean pharetra magna ac placerat.
          </p>
          <a href='#' className='btn btn--green'>
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
