import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import SponsorFlex from "../components/sponsorFlex";
import Header from "../components/header";
import ContactUsForm from "../components/contactUsForm";
import Footer from "../components/footer";

import ProgressBar from "../components/course/ProgressBar";
import Hero from "../components/course/Hero";
import Lections from "../components/course/Lections";
import Plan from "../components/course/Plan";
import Tasks from "../components/course/Tasks";
import Students from "../components/course/Students";
import { jwtDecode } from "jwt-decode";

const data = {
  Hero: "/src/assets/heroCourse.svg",
  Tasks: [
    {
      TaskID: 1,
      Title: "Task1: Create React + Vite project",
      Logo: "https://png.pngtree.com/png-vector/20190403/ourmid/pngtree-vector-task-icon-png-image_908701.jpg",
      Description:
        "In this task you must create project using React(Vite) and Tailwind configuration",
      Duration: "11/9/2024",
      PointsCount: 15,
    },
    {
      TaskID: 2,
      Title: "Task2: Build the UI",
      Logo: "https://e7.pngegg.com/pngimages/893/48/png-clipart-task-project-management-computer-icons-service-others-miscellaneous-text.png",
      Description: "Use Tailwind to build a responsive UI for your project",
      Duration: "11/25/2024",
      PointsCount: 20,
    },
  ],
  Lections: [
    {
      LectionID: 1,
      Title: "Start with React JS",
      Description:
        "In this lecture, we will go over the basics of React and set up a project.",
      Views: 156,
      Link: "https://youtube.com/example",
      isNew: true,
    },
    {
      LectionID: 2,
      Title: "Components and Props",
      Description: "Learn about components and props in React.",
      Views: 98,
      Link: "https://youtube.com/example2",
      isNew: false,
    },
  ],
  Plan: {
    Title: "Course plan",
    Description: "Overview of all lessons, tasks, and exams for this course.",
    Items: [
      {
        elemID: 1,
        Title: "Introduction to React",
        Type: "Lection",
        isCompleted: false,
      },
      {
        elemID: 2,
        Title: "Build a Portfolio",
        Type: "Task",
        isCompleted: true,
      },
      {
        elemID: 3,
        Title: "Layout in Tailwind",
        Type: "Project",
        isCompleted: true,
      },
      {
        elemID: 4,
        Title: "Final Exam",
        Type: "Exam",
        isCompleted: false,
      },
    ],
  },
  Students: [
    {
      StudentID: 1,
      Photo: "/src/assets/student1.svg",
      Name: "Marek",
      isActive: true,
      CompletedTasks: 15,
    },
    {
      StudentID: 2,
      Photo: "/src/assets/student2.svg",
      Name: "Jacek",
      isActive: true,
      CompletedTasks: 10,
    },
    {
      StudentID: 3,
      Photo: "/src/assets/student3.svg",
      Name: "Ola",
      isActive: false,
      CompletedTasks: 8,
    },
  ],
};

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

function CourseStudent() {
  let option = "teacher";
  // const token = localStorage.getItem("token");
  // let userId = null;
  // if (token) {
  //   try {
  //     const decodedToken = jwtDecode(token);
  //     userId = decodedToken.id;
  //     option = decodedToken.role;
  //   } catch (err) {
  //     console.error("Token use error:", err);
  //   }
  // } else {
  //   console.warn("Token doesnt exist in localStorage");
  // }

  return (
    <div>
      <Header />
      <Hero image={data.Hero} />
      <ProgressBar />
      <div className="flex flex-col md:flex-row justify-between items-center bg-slate-100 md:py-4">
        <Tasks tasks={data.Tasks} option={option} />
        <Lections lections={data.Lections} option={option} />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start bg-slate-100 md:py-4">
        <Students students={data.Students} totalTasks={30} option={option} />
        <Plan plan={data.Plan} option={option} />
      </div>

      <SponsorFlex />
      <ContactUsForm />
      <Footer />
    </div>
  );
}

export default CourseStudent;
