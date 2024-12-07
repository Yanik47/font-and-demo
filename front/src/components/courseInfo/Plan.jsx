import React from "react";
import BackGr from "../../assets/deconstructed.svg";

function Plan({ plan }) {
  const getBackgroundColor = (type) => {
    switch (type) {
      case "Project":
        return "bg-violet-200";
      case "Lection":
        return "bg-green-200";
      case "Task":
        return "bg-blue-100";
      case "Exam":
        return "bg-amber-200";
      default:
        return "bg-violet-200";
    }
  };

  return (
    <div
      className="flex flex-col justify-start bg-center"
    >
      <h1 className="flex flex-row justify-center items-center"><p className="font-bold text-center text-2xl py-2 px-6 bg-white rounded-lg shadow-lg">Plan Section</p></h1>
      {plan.map((item, elemID) => (
        <div
          key={item.elemID} // добавляем ключ для уникальности элемента
          className={`flex flex-row justify-start ${
            elemID % 2 === 0 ? "place-self-end" : "place-self-start"
          } ${getBackgroundColor(item.Type)} rounded-lg shadow-lg py-6 px-6 md:px-2 my-2  mx-4 md:mx-16 md:w-1/3`}
        >
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-xl font-semibold">{item.Title}</h2>
            <p className="hidden md:block text-left text-lg pt-2">{item.Description}</p>
          </div>
          <p className="ml-auto text-md font-semibold pr-2 md:pr-4 pl-4 md:pl-0">
            [{item.Type}]
          </p>
        </div>
      ))}
    </div>
  );
}

export default Plan;
