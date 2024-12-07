import React, { useState } from "react";

const TalentModule = () => {
  const [usernames, setUsernames] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = () => {
    const users = usernames.split(",").map((username) => username.trim());
    setResult(users);
    console.log("Added Users:", users);
  };

  return (
    <div className="w-full my-2 md:mx-1 max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add Users</h1>
      <textarea
        value={usernames}
        onChange={(e) => setUsernames(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        placeholder="Enter usernames, separated by commas"
      ></textarea>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Users
      </button>
      {result.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Added Users:</h2>
          <ul>
            {result.map((user, index) => (
              <li key={index} className="text-sm">
                {user}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TalentModule;
