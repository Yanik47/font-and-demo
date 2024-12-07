import React, { useState } from "react";

const Teachers = () => {
  const [usernames, setUsernames] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = () => {
    const users = usernames.split(",").map((username) => username.trim());
    setResult(users.map((user) => ({ username: user, role: "teacher" })));
    console.log("Updated Users:", result);
  };

  return (
    <div className="my-2 w-full md:mx-1 max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Assign Teacher Role</h1>
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
        Assign Role
      </button>
      {result.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Updated Users:</h2>
          <ul>
            {result.map((user, index) => (
              <li key={index} className="text-sm">
                {user.username} - {user.role}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Teachers;
