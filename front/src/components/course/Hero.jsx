import React from 'react';

function Hero({image}) {
  return (
    <div className='bg-slate-100'>
        <img src={image} alt="Text"></img>
    </div>
  );
}

export default Hero;  // Это экспорт по умолчанию