import React, { useState } from "react";

const Work = () => {
  const [titles, setTitles] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = () => {
    const titlesArray = titles.split(",").map((title) => title.trim());
    setResult(titlesArray); // Replace this with actual search logic
    console.log("Searched Titles:", titlesArray);
  };

  return (
    <div className="w-full my-2 md:mx-1 max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Search Partners by Title</h1>
      <textarea
        value={titles}
        onChange={(e) => setTitles(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        placeholder="Enter titles, separated by commas"
      ></textarea>
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Search
      </button>
      {result.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Searched Titles:</h2>
          <ul>
            {result.map((title, index) => (
              <li key={index} className="text-sm">
                {title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Work;
