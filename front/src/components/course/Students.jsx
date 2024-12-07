import React from "react";

function Students({ students, totalTasks, option }) {
  const handleGetTasks = () => {
    console.log("Get Tasks button clicked");
  };
  return (
    <div className="flex flex-col justify-around items-start md:items-center bg-white rounded-xl shadow-xl w-11/12 md:w-1/2 mx-4 py-4 my-2 md:my-0">
      <p className="text-2xl font-bold px-4 md:text-center">Students</p>
      {students.map((student) => {
        const completedPercentage = (student.CompletedTasks / totalTasks) * 100;

        return (
          <div
            key={student.StudentID}
            className="w-full py-2 px-4 border-b-2 border-gray-200"
          >
            <div className="flex flex-row items-center w-full">
              <img
                src={student.Photo}
                alt="Student Photo"
                className="w-20 h-20"
              />
              <div className="px-4 w-full">
                <p className="font-bold text-left">{student.Name}</p>
                <p className="text-left">
                  {student.isActive ? "Active" : "Inactive"}
                </p>
                <p className="text-left">
                  Completed tasks: {student.CompletedTasks}
                </p>

                {/* Прогресс-бар */}
                <div className="relative w-full h-4 bg-red-200 rounded-full overflow-hidden mt-2">
                  <div
                    className="absolute top-0 left-0 h-4 bg-green-500 rounded-full"
                    style={{ width: `${completedPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex flex-row items-end justify-center md:justify-end w-full">
        <button
          onClick={handleGetTasks}
          className={`bg-blue-500 hover:bg-blue-700 hover:text-white border border-gray-400 
          text-xl md:mr-8 py-[5px] px-8 mt-3 md:mt-4 md:mb-1 rounded-lg shadow-lg ${option === "student" ? "hidden" : "block"}`}
        >
          GET TASKS
        </button>
      </div>
    </div>
  );
}

export default Students;
