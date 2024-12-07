import React from "react";

function Hero({ image, description }) {
  return (
    <div className="relative flex justify-end items-center w-full h-ful">
      <div
        className=" absolute md:left-6 left-0 w-1/3 ml-4 pt-4 md:pt-12
             md:p-6 md:pb-6 text-lg md:text-2xl font-medium md:bg-violet-100 md:shadow-lg rounded-lg"
      >
        <p> {description}</p>
        <button className="py-2 px-4 mr-2 mt-2 bg-blue-500 hover:to-blue-600 text-white text-lg rounded-lg">
          {" "}
          Subscribe
        </button>
      </div>
      <img src={image} alt="heroImage" className="right-0 bg-slate-100" />
    </div>
  );
}

export default Hero;
