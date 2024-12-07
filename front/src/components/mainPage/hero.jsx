import React from 'react';
import dyplom from '../../assets/dyplom.svg';

function Hero() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - (window.innerHeight / 2 - element.offsetHeight / 2);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <div className="bg-slate-100 px-6 pt-[72px] md:pt-[106px] flex justify-between items-start h-auto">
      {/* Контейнер с фоновым изображением и текстом */}
      <div className="relative flex flex-col justify-start items-end w-full">
        <img
          src={dyplom}
          alt="dyplom.svg"
          className="w-full h-auto object-contain"
        />

        {/* Текст в правом верхнем углу изображения */}
        <div className="absolute top-0 right-3 m-4 md:top-4 lg:right-6 text-right w-2/5">
          <h1 className="mt-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
            Start using the education you received
          </h1>
          <p className="hidden sm:block text-base xl:text-xl font-bold text-gray-600 mt-2">
            the way you originally planned it
          </p>
          <button onClick={() => scrollToSection("courses")} className="absolute hidden lg:block right-0 mt-5 px-6 py-2 bg-blue-500 text-white rounded-lg md:hover:text-blue-200 md:hover:bg-blue-600 md:hover:shadow-lg">
            LET'S TRY IT
          </button>
        </div>
        <div className='absolute bottom-0 right-3 m-4 md:bottom-3 md:right-5 lg:hidden'>
        <button className="hidden md:block mt-5 px-2 py-2 md:px-6 md:py-2 bg-blue-500 text-white rounded-lg md:hover:text-blue-200 md:hover:bg-blue-600 md:hover:shadow-lg">
            LET'S TRY
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;



