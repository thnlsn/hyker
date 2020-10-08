import React from 'react';

const FeatureBox = ({ icon, heading, text }) => {
  return (
    <div className='feature-box'>
      {/* Create a box within the grid because we want to edit some spacing and add scaling, but don't want to directly edit the grid code */}
      <i className={`feature-box__icon ${icon}`}></i>
      <h3 className='heading-tertiary u-margin-bottom-small'>{heading}</h3>
      <p className='feature-box__text'>{text}</p>
    </div>
  );
};

export default FeatureBox;
