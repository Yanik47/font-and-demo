import { React, useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import Courses from "../components/profile/Courses";
import ProgressBar from "../components/profile/ProgressBar";
import UserData from "../components/profile/UserData";
import Calendar from "../components/profile/Calendar";

const data = {
  userId: "u123456",
  role: "student",
  personalInfo: {
    username: "john_doe",
    email: "johndoe@example.com",
    phone: "+48565789123",
    password: "password123",
  },
  profile: {
    firstName: "John",
    lastName: "Doe",
    bio: "Passionate about learning data science and web development.",
    profilePictureUrl: "",
    location: "San Francisco, CA",
    interests: ["Data Science", "Web Development", "Machine Learning"],
  },
  courseProgress: [
    {
      courseId: "123",
      status: "in-progress",
      progress: 75,
      lastAccessed: "2024-11-10T15:45:00Z",
      scores: {
        quiz1: 85,
        quiz2: 90,
        finalExam: 88,
      },
    },
    {
      courseId: "456",
      status: "completed",
      progress: 100,
      lastAccessed: "2024-10-15T18:30:00Z",
      scores: {
        quiz1: 78,
        quiz2: 85,
        finalExam: 82,
      },
    },
  ],
  achievements: [
    {
      achievementId: "achv001",
      title: "Py-beginner",
      description: "Completed the Python Basics course.",
      image: "/src/assets/pyloh.svg",
      dateEarned: "2024-10-20",
    },
    {
      achievementId: "achv002",
      title: "Performer",
      description: "Scored above 90% in a course exam.",
      image: "/src/assets/logo2.png",
      dateEarned: "2024-11-05",
    },
  ],
  teacherData: {
    coursesTeaching: [
      {
        courseId: "course123",
        title: "Advanced Python Programming",
        studentsEnrolled: 150,
        feedbackRating: 4.8,
      },
      {
        courseId: "course789",
        title: "Intro to Machine Learning",
        studentsEnrolled: 220,
        feedbackRating: 4.6,
      },
    ],
  },
};

function calculateTotalScores(courseProgress) {
  let totalScores = 0;
  for (let i = 0; i < courseProgress.length; i++) {
    totalScores += courseProgress[i].scores.finalExam;
  }
  return totalScores;
}

function UserProfile() {
  const [courses, setCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    const testCourses = [
      {
        id: 1,
        image:
          "https://img.freepik.com/premium-vector/online-courses-logo-design-template_145155-3684.jpg",
        title: "React for Beginners",
        description:
          "Learn the basics of React, the most popular front-end library for building modern web applications.",
      },
      {
        id: 2,
        image: "https://www.sheetmetal-iti.org/img/courses.png",
        title: "Advanced JavaScript",
        description:
          "Deep dive into JavaScript concepts, asynchronous programming, and performance optimization.",
      },
      {
        id: 3,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaiwAX5hKG4Lvz6D921dxXIr4fkcRDxy90g&s",
        title: "CSS Flexbox & Grid",
        description:
          "Master layout techniques using CSS Flexbox and Grid to build responsive and modern web layouts.",
      },
      {
        id: 4,
        image:
          "https://img.freepik.com/premium-vector/smart-education-logo-design-template_145155-2117.jpg",
        title: "Node.js & Express",
        description:
          "Learn how to build back-end services using Node.js and Express with a focus on building REST APIs.",
      },
      {
        id: 5,
        image:
          "https://logo.com/image-cdn/images/kts928pd/production/7b2f373fc1d56b123f04f428f8ae96a1522f820f-398x401.png?w=1080&q=72&fm=webp",
        title: "Node.js & Express",
        description:
          "Learn how to build back-end services using Node.js and Express with a focus on building REST APIs.",
      },
      {
        id: 6,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMP_HzEtV5MwbaymptJM-5zmYVeysDwFlpGg&s",
        title: "Node.js & Express",
        description:
          "Learn how to build back-end services using Node.js and Express with a focus on building REST APIs.",
      },
      {
        id: 7,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMP_HzEtV5MwbaymptJM-5zmYVeysDwFlpGg&s",
        title: "Node.js & Express",
        description:
          "Learn how to build back-end services using Node.js and Express with a focus on building REST APIs.",
      },
      {
        id: 8,
        image: "https://via.placeholder.com/400x250",
        title: "CSS Flexbox & Grid",
        description:
          "Master layout techniques using CSS Flexbox and Grid to build responsive and modern web layouts.",
      },
      {
        id: 9,
        image: "https://via.placeholder.com/400x250",
        title: "CSS Flexbox & Grid",
        description:
          "Master layout techniques using CSS Flexbox and Grid to build responsive and modern web layouts.",
      },
    ];

    const testMyCourses = [
      {
        id: 7,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMP_HzEtV5MwbaymptJM-5zmYVeysDwFlpGg&s",
        title: "Node.js & Express",
        description:
          "Learn how to build back-end services using Node.js and Express with a focus on building REST APIs.",
      },
      {
        id: 8,
        image: "https://via.placeholder.com/400x250",
        title: "CSS Flexbox & Grid",
        description:
          "Master layout techniques using CSS Flexbox and Grid to build responsive and modern web layouts.",
      },
      {
        id: 9,
        image: "https://via.placeholder.com/400x250",
        title: "CSS Flexbox & Grid",
        description:
          "Master layout techniques using CSS Flexbox and Grid to build responsive and modern web layouts.",
      },
    ];

    setCourses(testCourses);
    setMyCourses(testMyCourses);
  }, []);

  const progress = calculateTotalScores(data.courseProgress);
  const [view, setView] = useState("calendar");

  return (
    <div>
      <Header />
      <UserData
        personal={data.personalInfo}
        user={data.profile}
        achievements={data.achievements}
      />
      <ProgressBar progress={data.courseProgress} />

      {/* Контроллер с кнопками */}
      <div className="flex justify-center bg-slate-100">
        <div className="flex justify-center px-8 py-3 mb-4">
          <button
            onClick={() => setView("calendar")}
            className={`px-6 md:px-10 py-1 md:py-3 mx-2 rounded md:text-xl font-semibold ${
              view === "calendar" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Calendar
          </button>
          <button
            onClick={() => setView("courses")}
            className={` px-6 md:px-10 py-1 md:py-3 mx-2 rounded md:text-xl font-semibold ${
              view === "courses" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Courses
          </button>
          <button
            onClick={() => setView("my courses")}
            className={`px-6 md:px-10 py-1 md:py-3 mx-2 rounded md:text-xl font-semibold ${
              view === "my courses"? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            My Courses
          </button>
        </div>
      </div>

      {/* Отображение компонента в зависимости от выбранного состояния */}
      <div className="flex flex-col bg-slate-100">
        {view === "calendar" ? (
          <Calendar teaching={data.teacherData} />
        ) : view === "courses" ? (
          <Courses courseUser={progress} courses={courses} option={"student"} />
        ) : (
          <Courses courseUser={progress} courses={myCourses} option={"teacher"} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile; // Это экспорт по умолчанию
