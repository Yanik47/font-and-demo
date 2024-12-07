import React, { useState } from "react";

function Plan({ plan, option }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    Title: "",
    Type: "",
    Description: "",
  });

  // Функция для определения цвета фона в зависимости от типа элемента
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

  const handleAddItem = () => {
    if (newItem.Title && newItem.Type && newItem.Description) {
      plan.Items.push({
        id: plan.Items.length + 1,
        ...newItem,
      });
      setNewItem({ Title: "", Type: "", Description: "" });
      setIsModalOpen(false);
    } else {
      alert("Please fill in all fields!");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewItem({ Title: "", Type: "", Description: "" });
  };

  return (
    <div
      className="flex flex-col justify-around items-start
     bg-white rounded-xl shadow-xl 
     md:w-1/2 mx-4 md:mx-4 py-4 my-2 md:my-0"
    >
      <p className="text-2xl font-bold px-4">{plan.Title}</p>
      <div className="text-lg px-4 text-left">{plan.Description}</div>

      {plan.Items.map((item) => (
        <div
          key={item.id}
          className={`flex flex-row items-center px-4 py-2 mx-2 my-2 border border-gray-500 rounded-lg shadow-lg min-w-[320px] md:min-w-[380px] ${getBackgroundColor(
            item.Type
          )}`}
        >
          <div className="w-32 font-bold text-center">[{item.Type}]</div>
          <div className="flex-1">{item.Title}</div>
        </div>
      ))}
      <div className="flex flex-row items-end justify-center md:justify-end w-full">
        <button
          onClick={() => setIsModalOpen(true)}
          className={`bg-blue-500 hover:bg-blue-700 hover:text-white border border-gray-400 text-lg mr-4 py-[5px] px-[26px] md:my-1 rounded-lg shadow-lg ${option === "student" ? "hidden" : "block"}`}
        >
          ADD
        </button>
        <button
          onClick={() => alert("Edit functionality not implemented yet!")}
          className={`bg-blue-500 hover:bg-blue-700 hover:text-white border border-gray-400 text-lg md:mr-8 py-[5px] px-[22px] md:my-1 rounded-lg shadow-lg ${option === "student" ? "hidden" : "block"}`}
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
            <h2 className="text-xl font-bold text-blue-500 mb-4">Add New Item</h2>
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={newItem.Title}
                onChange={(e) =>
                  setNewItem((prev) => ({ ...prev, Title: e.target.value }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter title"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">
                Type
              </label>
              <input
                type="text"
                value={newItem.Type}
                onChange={(e) =>
                  setNewItem((prev) => ({ ...prev, Type: e.target.value }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter type (e.g., Task, Exam)"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={newItem.Description}
                onChange={(e) =>
                  setNewItem((prev) => ({
                    ...prev,
                    Description: e.target.value,
                  }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter description"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleAddItem}
                className="px-4 py-2 bg-green-500 text-white rounded mr-2 hover:bg-green-600"
              >
                Add Item
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

export default Plan;
