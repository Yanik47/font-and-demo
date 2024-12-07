import React, { useState } from "react";

function Lections({ lections, option }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLection, setNewLection] = useState({
    Title: "",
    Description: "",
    Link: "",
    isNew: false,
  });

  const handleAddLection = () => {
    if (newLection.Title && newLection.Description && newLection.Link) {
      lections.push({
        ...newLection,
        LectionID: lections.length + 1,
      });
      setNewLection({ Title: "", Description: "", Link: "", isNew: false });
      setIsModalOpen(false);
    } else {
      alert("Please fill in all fields!");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewLection({ Title: "", Description: "", Link: "", isNew: false });
  };

  return (
    <div
      className="flex flex-col justify-around items-start 
      bg-white rounded-xl shadow-xl 
      md:w-1/2 mx-4 md:mx-4 py-4 my-2 md:my-0"
    >
      <p className="text-2xl font-bold px-4">Lections</p>
      {lections.map((lection) => (
        <a
          href={lection.Link}
          key={lection.LectionID}
          className={`flex flex-row justify-between items-center
          border border-gray-500 ${
            lection.isNew ? "bg-green-200" : "bg-yellow-100"
          } shadow-lg rounded-lg
          mx-2 md:ml-4 md:mr-6 my-3 mr-8 p-2 min-w-3/4`}
        >
          <div className="flex-grow w-full md:w-2/5">
            <p className="text-left font-semibold">{lection.Title}</p>
            <p className="text-left text-gray-600 text-md">
              {lection.Description}
            </p>
          </div>
        </a>
      ))}
      <div className="flex flex-row items-end justify-center md:justify-end w-full">
        <button
          onClick={() => setIsModalOpen(true)}
          className={`bg-blue-500 hover:bg-blue-700 hover:text-white border border-gray-400 
          text-lg mr-4 py-[5px] px-[22px] md:my-1 rounded-lg shadow-lg ${option === "student" ? "hidden" : "block"}`}
        >
          ADD
        </button>
        <button
          onClick={() => alert("Edit functionality not implemented yet!")}
          className={`bg-blue-500 hover:bg-blue-700 hover:text-white border border-gray-400 
          text-lg md:mr-8 py-[5px] px-[22px] md:my-1 rounded-lg shadow-lg ${option === "student" ? "hidden" : "block"}`}
        >
          EDIT
        </button>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <>
          {/* Фон с эффектом блюра */}
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-md z-10"
          ></div>

          {/* Само модальное окно */}
          <div
            className="fixed bg-white z-20 p-6 rounded-lg shadow-lg w-11/12 md:w-1/2"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "8px",
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h2 className="text-xl font-bold text-blue-500 mb-4">Add New Lection</h2>
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={newLection.Title}
                onChange={(e) =>
                  setNewLection((prev) => ({ ...prev, Title: e.target.value }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter title"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={newLection.Description}
                onChange={(e) =>
                  setNewLection((prev) => ({
                    ...prev,
                    Description: e.target.value,
                  }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter description"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">Link</label>
              <input
                type="url"
                value={newLection.Link}
                onChange={(e) =>
                  setNewLection((prev) => ({ ...prev, Link: e.target.value }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter link"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleAddLection}
                className="px-4 py-2 bg-green-500 text-white rounded mr-2 hover:bg-green-600"
              >
                Add Lection
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Lections;
