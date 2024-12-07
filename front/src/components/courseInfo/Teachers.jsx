import React from 'react';
import {useState, useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackGr from "../../assets/deconstructed.svg";
function Teachers({ teachers }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teachers.length);
    }, 5000); // Автоматическое переключение каждые 5s секунд

    return () => clearInterval(interval); // Очищаем таймер при размонтировании
  }, []);

  return (
    <div className="overflow-hidden flex flex-col justify-start pt-16 pb-10 w-full h-full md:w-2/5">
      <div className='absolute top-0 z-15 text-center mb-4 items-center'>
        <h1 className="font-bold text-2xl">Smartets Teachers</h1>
      </div>
      <div data-te-carousel-init data-te-carousel-slide>

        {/* Дублируем массив преподавателей для бесконечной прокрутки */}
        {teachers.concat(teachers).map((teacher, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-norma bg-indigo-100 p-6 h-max  w-3/5 md:w-3/4 rounded-xl shadow-lg mx-4 md:mx-6 ${
            index === currentIndex ? " animate-slide-in-out-sequence-mobile md:animate-slide-in-out-sequence" : "hidden"} transition-opacity motion-duration-1500`}
            data-te-carousel-item
          >
            <img
              src={teacher.Photo}
              alt={teacher.Name}
              className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover"
            />
            <div className="mt-4 text-center">
              <div className="text-lg font-bold p-2">{teacher.Name}</div>
              <div className="hidden md:block text-md">{teacher.Description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;





