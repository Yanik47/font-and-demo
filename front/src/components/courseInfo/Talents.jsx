import React from "react";
import BackGr from "../../assets/deconstructed.svg";

function Talents({ talents }) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 items-stretch justify-items-center  md:px-6 pt-6 px-4 pb-6"
    >
      {talents.map((talent) => (
        <div
          key={talent.TalentID}
          className="flex flex-col justify-normal items-center bg-sky-100 rounded-lg shadow-lg p-4 m-2 md:m-0 md:w-64 h-auto"
          data-aos="fade-up"
          data-aos-duration={450 * talent.TalentID - talent.TalentID * 200}
        >
          <img
            src={talent.Photo}
            className="h-40 w-40 rounded-lg object-cover pb-4"
            alt={talent.Name}
          />
          <div className="font-bold">{talent.Name}</div>
          <div className="text-center ">{talent.Description}</div>
        </div>
      ))}
    </div>
  );
}

export default Talents;
