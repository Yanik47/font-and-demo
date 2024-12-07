import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import school from "../../assets/schools1.svg";
import paint from "../../assets/paint.svg";
import friends from "../../assets/friends 1.svg";
import toghether from "../../assets/toghether.svg";

const slides = [
  {
    id: 1,
    title: "About",
    description:
      "We operate as an online school for people who have the education they need but lack the skills to develop in a professional environment.",
    image: school,
    alt: "About illustration",
    textAlignment: "text-left",
  },
  {
    id: 2,
    title: "Font and?",
    description:
      "We started as a resource to teach engineering graduates and back-end developers how to work with design and front-end.",
    image: paint,
    alt: "Font and illustration",
    textAlignment: "text-right",
  },
  {
    id: 3,
    description:
      "However, our community was growing, and the number of people willing to share their knowledge was constantly increasing.",
    image: toghether,
    alt: "Community illustration",
    textAlignment: "text-left",
  },
  {
    id: 4,
    description:
      "As a result, we have become a portal that contains a lot of information for those who already have a diploma in programming, but do not know how to use it.",
    image: friends,
    alt: "Final result illustration",
    textAlignment: "text-right",
  },
];

function Story() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 350,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div id="story" className="relative bg-gray-100 pt-4 pb-2">
      {/* Слайдер */}
      <div className="relative overflow-hidden">
        {slides.map((slide, index) =>
          // Содержимое слайда
          index % 2 === 0 ? (
            <div
              key={slide.id}
              className="flex flex-col lg:flex-row items-center justify-between bg-white p-6 h-max rounded-xl shadow-md mb-10 mx-4 lg:mx-6"
              data-aos={index === 0 ? "fade-up" : "fade-up-right"} // Условие для анимации
            >
              <div
                className={`lg:w-1/2 p-4 ease-in-out ${slide.textAlignment}`}
              >
                {slide.title && (
                  <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
                )}
                <p className="text-lg">{slide.description}</p>
              </div>
              <div className="lg:w-1/2 p-4">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ) : (
            <div
              key={slide.id}
              className="flex flex-col lg:flex-row items-center justify-between bg-white p-6 h-max rounded-xl shadow-md mb-10 mx-4 lg:mx-6"
              data-aos="fade-up-left" // Условие для анимации
            >
              <div className="lg:w-1/2 p-4">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div
                className={`lg:w-1/2 p-4 ease-in-out ${slide.textAlignment}`}
              >
                {slide.title && (
                  <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
                )}
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Story;
