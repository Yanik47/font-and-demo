import React, { useState } from "react";

const PlanForm = () => {
  // Инициализация с 2 элементами по умолчанию
  const [elements, setElements] = useState([
    { id: 0, description: "", type: "" },
    { id: 1, description: "", type: "" },
  ]);
  const [count, setCount] = useState(2); // Устанавливаем значение по умолчанию в 2

  const handleGenerate = () => {
    const newElements = Array.from({ length: count }, (_, index) => ({
      id: index,
      description: "",
      type: "",
    }));
    setElements(newElements);
  };

  const handleClear = () => {
    setCount(2); 
    setElements([
      { id: 0, description: "", type: "" },
      { id: 1, description: "", type: "" },
    ]); 
    alert("Plan cleared!");
  };

  const handleFieldChange = (id, fieldName, value) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, [fieldName]: value } : el))
    );
  };

  return (
    <div className="w-full mx-auto p-10 bg-white rounded-xl shadow-xl mr-6">
      <h1 className="text-3xl pb-5 font-excalifont font-bold">Create Plan</h1>
      {/* Plan Input */}
      <div className="mb-4 flex flex-col items-start">
        <h2 className="text-xl font-bold text-left pl-1 pb-3 md:pb-2">
          Enter number of plan elements
        </h2>
        <input
          type="number"
          id="count"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter number"
        />
        <button
          type="button"
          onClick={handleGenerate}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Generate
        </button>
      </div>

      {/* Generated Elements */}
      <div className="flex flex-col justify-start">
        {elements.map((el) => (
          <div
            key={el.id}
            className="flex-col mb-4 items-start justify-start text-left"
          >
            <h1 className="text-xl font-bold pb-3">Plan Item {el.id + 1}</h1>
            <textarea
              value={el.description}
              onChange={(e) =>
                handleFieldChange(el.id, "description", e.target.value)
              }
              className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full min-h-[100px] break-words resize-y mb-4"
              placeholder={`Description (${el.id + 1})`}
            ></textarea>
            <input
              type="text"
              value={el.type}
              onChange={(e) => handleFieldChange(el.id, "type", e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={`Type (${el.id + 1})`}
            />
          </div>
        ))}
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
      {/* Clear Button */}
      <button
        onClick={handleClear}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Clear
      </button>
    </div>
  );
};

export default PlanForm;
