import React, { useState } from "react";

import deadline1 from "/src/assets/deadline.svg";
import middleTime from "/src/assets/middleTime.svg";
import TimeALot from "/src/assets/TimeALot.svg";

function Tasks({ tasks, option }) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [file, setFile] = useState(null);
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [submissionText, setSubmissionText] = useState("");
  const [newTask, setNewTask] = useState({
    Title: "",
    Description: "",
    Duration: "",
    Logo: "",
  });

  const getTimeStatusImage = (deadline) => {
    const deadlineDate = new Date(deadline);
    const now = new Date();
    const timeDiff = (deadlineDate - now) / (1000 * 60 * 60);

    if (timeDiff < 12) {
      return deadline1;
    } else if (timeDiff < 36) {
      return middleTime;
    } else {
      return TimeALot;
    }
  };

  const openSubmissionModal = (task) => {
    setSelectedTask(task);
    setIsSubmissionModalOpen(true);
    setFile(null);
    setSubmissionText("");
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
    setNewTask({
      Title: "",
      Description: "",
      Duration: "",
      Logo: "",
    });
  };

  const closeSubmissionModal = () => {
    setSelectedTask(null);
    setFile(null);
    setSubmissionText("");
    setIsSubmissionModalOpen(false);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
    setNewTask({
      Title: "",
      Description: "",
      Duration: "",
      Logo: "",
    });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmitTask = () => {
    if (submissionText || file) {
      alert("Submission successful!");
      closeSubmissionModal();
    } else {
      alert("Please enter a solution or attach a file!");
    }
  };

  const handleCreateTask = () => {
    if (newTask.Title && newTask.Description && newTask.Duration && newTask.Logo) {
      tasks.push({
        ...newTask,
        TaskID: tasks.length + 1,
      });
      alert("New task created successfully!");
      closeCreateModal();
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="flex flex-col justify-around items-start bg-white rounded-xl shadow-xl md:w-2/3 mx-4 md:mx-4 py-4 my-2 md:my-0">
      <p className="text-2xl font-bold px-4">Tasks</p>
      {tasks.map((task) => (
        <div
          key={task.TaskID}
          className="flex flex-row justify-between items-center border border-gray-500 bg-blue-100 shadow-lg rounded-lg mx-2 md:ml-4 md:mr-6 my-3 mr-8 p-2 min-w-3/4 cursor-pointer"
          onClick={() => openSubmissionModal(task)}
        >
          <div className="flex flex-row justify-between items-center">
            <img
              src={task.Logo}
              alt="taskLogo"
              className="w-14 h-14 rounded-full mr-4"
            />
            <div className="flex flex-col justify-between items-start py-4 px-2">
              <div className="flex flex-col md:flex-row items-start justify-start text-start">
                <p className="pr-6 font-semibold text-lg">{task.Title}</p>
                <p className="font-semibold">Time to: {task.Duration}</p>
              </div>
              <p className="hidden md:block text-start">{task.Description}</p>
            </div>
            <img
              src={getTimeStatusImage(task.Duration)}
              alt="Time Status"
              className="w-10 h-10 mr-4"
            />
          </div>
        </div>
      ))}

      <div className="flex flex-row items-end justify-center md:justify-end w-full">
        <button
          onClick={openCreateModal}
          className={`bg-blue-500 hover:bg-blue-700 hover:text-white border border-gray-400 
        text-lg mr-4 py-[5px] px-[22px] md:my-1 rounded-lg shadow-lg ${option === "student" ? "hidden" : "block"}`}
        >
          ADD
        </button>
      </div>

      {/* Модальное окно для отправки задания */}
      {isSubmissionModalOpen && (
        <>
          <div
            onClick={closeSubmissionModal}
            className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-md z-10"
          ></div>
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
            <h2 className="text-xl font-bold text-blue-500 mb-4">
              {selectedTask?.Title}
            </h2>
            <p className="mb-4">{selectedTask?.Description}</p>
            <textarea
              value={submissionText}
              onChange={(e) => setSubmissionText(e.target.value)}
              className="w-full h-20 p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter your solution here..."
            ></textarea>

            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">
                Attach file:
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="border border-gray-300 p-2 rounded w-full"
              />
              {file && (
                <p className="mt-2 text-gray-600">Selected file: {file.name}</p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSubmitTask}
                className="px-4 py-2 bg-green-500 text-white rounded mr-2 hover:bg-green-600"
              >
                Submit
              </button>
              <button
                onClick={closeSubmissionModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}

      {/* Модальное окно для создания нового задания */}
      {isCreateModalOpen && (
        <>
          <div
            onClick={closeCreateModal}
            className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-md z-10"
          ></div>
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
            <h2 className="text-xl font-bold text-blue-500 mb-4">Create New Task</h2>
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={newTask.Title}
                onChange={(e) =>
                  setNewTask((prev) => ({ ...prev, Title: e.target.value }))
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
                value={newTask.Description}
                onChange={(e) =>
                  setNewTask((prev) => ({
                    ...prev,
                    Description: e.target.value,
                  }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter description"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">Duration</label>
              <input
                type="text"
                value={newTask.Duration}
                onChange={(e) =>
                  setNewTask((prev) => ({ ...prev, Duration: e.target.value }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter duration (e.g., 2023-12-31)"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">Logo URL</label>
              <input
                type="text"
                value={newTask.Logo}
                onChange={(e) =>
                  setNewTask((prev) => ({ ...prev, Logo: e.target.value }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter logo URL"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleCreateTask}
                className="px-4 py-2 bg-green-500 text-white rounded mr-2 hover:bg-green-600"
              >
                Create
              </button>
              <button
                onClick={closeCreateModal}
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

export default Tasks;
