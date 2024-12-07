import React, { useState } from "react";
import logo from "../assets/snake .svg";
import { BellIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate(); // Используем для навигации
  let userId = null;
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      userId = decodedToken.id; // Извлекаем id пользователя
    } catch (err) {
      console.error("Ошибка при декодировании токена:", err);
    }
  } else {
    console.warn("Токен отсутствует в localStorage");
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition =
        elementPosition - (window.innerHeight / 2 - element.offsetHeight / 2);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    console.log("Токен удалён:", !localStorage.getItem("token"));
    navigate("/login");
    alert("You have successfully logged out!");
  };

  return (
    <header className="sticky bg-gray-50 w-full shadow-md h-auto p-2 md:p-2 pr-4 md:pr-0 top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Логотип */}
        <Link to={`/`} className="flex flex-row items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 md:h-12 md:w-12" />
          <h3 className="flex justify-center items-center ml-2 text-xl text-center font-semibold text-gray-800">
            Font-and?
          </h3>
        </Link>

        {/* Навигация */}
        <nav className="hidden md:block self-center mx-auto">
          <ul className="flex space-x-10 text-gray-600">
            <li>
              <button
                onClick={() => scrollToSection("story")}
                className="hover:text-black"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("courses")}
                className="hover:text-black"
              >
                Courses
              </button>
            </li>
            <li>
              <Link to={`/profile/${userId}`} className="hover:text-black">
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contactMain")}
                className="hover:text-black"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Profile Click */}
        <div className="flex items-center ml-auto space-x-2 m-4">
          <button className="relative">
            <BellIcon className="h-6 w-6 text-gray-700 hover:motion-preset-shake" />
          </button>
          {isLoggedIn ? (
            <button
              onClick={handleLogOut}
              className="hidden md:block border border-gray-300 px-4 py-2 rounded-md text-gray-600 hover:text-black focus:outline-none"
            >
              Log Out
            </button>
          ) : (
            <Link
              to={`/login/`}
              className="hidden md:block border border-gray-300 px-4 py-2 rounded-md text-gray-600 hover:text-black focus:outline-none"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Мобильное меню (бургер-меню) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 pt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isOpen && (
            <>
              <div
                onClick={toggleMenu}
                className="fixed inset-0 bg-gray bg-opacity-50 backdrop-blur-md z-10"
              ></div>
              <div
                className="fixed bg-gray-100 z-20 flex flex-col items-center justify-center text-xl shadow-md pt-6 pb-10"
                style={{
                  width: "300px",
                  top: "35%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="flex w-full justify-end px-6">
                  <button onClick={toggleMenu} className=" text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <ul className="flex flex-col justify-between space-y-6 text-center">
                  <li className="flex justify-center items-center">
                    <div className="hover:text-black">Font and</div>
                    <img src={logo} alt="Logo" className="h-10 w-8" />
                  </li>
                  <hr className="w-full mx-auto border-gray-400" />
                  <li>
                    <button
                      onClick={() => {
                        scrollToSection("story");
                        toggleMenu();
                      }}
                      className="hover:text-black"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        scrollToSection("courses");
                        toggleMenu();
                      }}
                      className="hover:text-black"
                    >
                      Courses
                    </button>
                  </li>
                  <li>
                    <Link
                      to={`/profile/${userId}`}
                      className="hover:text-black"
                      onClick={toggleMenu}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        scrollToSection("contactMain");
                        toggleMenu();
                      }}
                      className="hover:text-black"
                    >
                      Contact
                    </button>
                  </li>
                  <hr className="w-full mx-auto border-gray-400" />
                  <div className="flex flex-col justify-between items-center space-y-4">
                    <Link
                      to={`/profile/${userId}`}
                      className="hover:text-black"
                    >
                      Profile
                    </Link>
                    {logLabel === "Log Out" ? (
                      <button
                        onClick={handleLogOut}
                        className="hover:text-black"
                      >
                        Log Out
                      </button>
                    ) : (
                      <Link to={`/login/`} className="hover:text-black">
                        Sign In
                      </Link>
                    )}
                  </div>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
