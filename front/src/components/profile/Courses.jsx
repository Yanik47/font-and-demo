import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreateForm from "../../pages/CreateForm";

function Courses({ courseUser, courses, option }) {
  return (
    <div className="bg-slate-100">
      <div className="grid grid-cols-2 m-4 mb-0 pb-4 justify-items-stretch items-stretch">
        {courses.map((course) => (
          <Link
            to={`/course/${course.id}`}
            key={course.id}
            className={`flex flex-col md:flex-row justify-start items-center
            p-4 my-3 mx-2 md:mx-0 md:ml-3 ${option === "student" ? "bg-violet-200" : "bg-amber-200"}  shadow-md rounded-lg
            hover:motion-scale-out-[1.06] motion-duration-[0.58s]/scale`}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-2/3 md:w-1/3 h-auto object-cover rounded-lg md:mr-4 mb-2"
            />
            <div>
              <h3 className="text-md font-bold mb-2 text-lg">{course.title}</h3>
              <p className="hidden md:block text-gray-600 text-md">
                {course.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-row justify-end items-center ">
        <Link
          to={'/create/'}
          className="pr-4 mr-5 "
        >
          <p className={`bg-blue-500 hover:bg-blue-700 px-6 md:px-10 py-4 md:py-3 rounded-lg shadow-lg md:text-xl text-lg text-white ${option === "student" ? "hidden" : "block"}`}>
            Create
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Courses; // Это экспорт по умолчанию
