import React from 'react';

const Composition = ({ composition }) => {
  return (
    <div className='composition'>
      <img
        // We supply multiple images and state their width in pixels, then use the sizes attribute to say when to use them (resolution switching + density switching)
        srcSet={`${composition[0].imageSmall} 300w, ${composition[0].imageLarge} 1000w`}
        alt='Photo 1'
        className='composition__photo composition__photo--p1'
        // (*breakpoint*) *approximate percentage images takes up*, (another breakpoint etc.) *another percentage in vw*, *at the end just define the default pixel width at your main viewport*
        sizes='(max-width: 900px) 17vw, (max-width: 600px) 26vw, 300px' // If no breakpoint applies, use the last argument (basically says use whichever image we've supplied that happens to display best at 300px)
        src={composition[0].imageLarge} // Serve this if the browser is too old for srcset and sizes attributes
      />
      <img
        srcSet={`${composition[1].imageSmall} 300w, ${composition[1].imageLarge} 1000w`}
        alt='Photo 2'
        className='composition__photo composition__photo--p2'
        // (*breakpoint*) *approximate percentage images takes up*, (another breakpoint etc.) *another percentage in vw*, *at the end just define the default pixel width at your main viewport*
        sizes='(max-width: 900px) 17vw, (max-width: 600px) 26vw, 300px'
        src={composition[1].imageLarge} // Serve this if the browser is too old for srcset and sizes attributes
      />
      <img
        srcSet={`${composition[2].imageSmall} 300w, ${composition[2].imageLarge} 1000w`}
        alt='Photo 3'
        className='composition__photo composition__photo--p3'
        // (*breakpoint*) *approximate percentage images takes up*, (another breakpoint etc.) *another percentage in vw*, *at the end just define the default pixel width at your main viewport*
        sizes='(max-width: 900px) 17vw, (max-width: 600px) 26vw, 300px'
        src={composition[2].imageLarge} // Serve this if the browser is too old for srcset and sizes attributes
      />
    </div>
  );
};

export default Composition;
