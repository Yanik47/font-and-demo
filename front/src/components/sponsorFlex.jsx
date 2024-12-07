import React from 'react';
import sponsors from '../assets/sponsors.json';

export const SponsorFlex = () => {
  return (
    <div className="overflow-hidden pt-[40px] pb-[20px] py-[20px] whitespace-nowrap bg-gray-100">
      <div className="inline-block animate-slide-sponsors *:h-[50px] *:mx-[20px] md:*:mx-[40px] *:inline *:max-w-none">
        {sponsors.map((file, index) => (
          <img key={index} src={file} />
        ))}
      </div>
      <div className="inline-block animate-slide-sponsors *:h-[50px] *:mx-[20px] md:*:mx-[40px] *:inline *:max-w-none">
        {sponsors.map((file, index) => (
          <img key={index} src={file} />
        ))}
      </div>
    </div>
  );
};


export default SponsorFlex;

// Нужно сделать так, чтобы компонент SponsorFlex отображал список спонсоров в виде слайдера.

// |----------| <--- |----------|  <----- 
// ---->    ----->    ----->  

