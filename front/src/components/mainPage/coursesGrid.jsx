import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]); // Инициализация состояния курсов
  const [error, setError] = useState(null); // Для обработки ошибок
  const [loading, setLoading] = useState(true); // Для индикатора загрузки

  // Загрузка курсов с бэкенда
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3001/courses"); // Укажите URL вашего бэкенда
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data); // Устанавливаем загруженные курсы
      } catch (err) {
        setError(err.message); // Обработка ошибок
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false); // Завершаем загрузку
      }
    };

    fetchCourses(); // Вызов функции загрузки
  }, []);

  return (
    <div className="bg-gray-100 pt-0 pb-4 px-6">
      <h2 id="courses" className="text-3xl font-bold mb-6 text-center">
        Courses
      </h2>

      {/* Основная сетка с курсами */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
        {courses.map((course, index) => (
          <Link
            to={`/courseInfo/${course.id}`}
            key={index}
            className={`bg-white p-4 rounded-lg shadow-md flex flex-col hover:motion-scale-out-[1.06] motion-duration-[0.58s]/scale ${
              index % 3 === 2 ? "row-span-1" : "row-span-2"
            }`}
          >
            {/* Изображение курса */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-auto object-cover rounded-lg mb-4"
            />

            {/* Название курса */}
            <h3 className="text-lg font-bold mb-2">{course.title}</h3>

            {/* Короткое описание */}
            <p className="hidden md:block text-gray-600 pb-4">
              {course.description}
            </p>

            <button className="px-8 py-2 bg-blue-500 text-white text-semibold hover:bg-blue-700 rounded-lg mt-auto self-center">
              SUBSCRIBE
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Courses;
