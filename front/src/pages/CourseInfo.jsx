import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoremIpsum } from 'lorem-ipsum';

import Header from '../components/header';
import Footer from '../components/footer';
import ContactUsForm from '../components/contactUsForm';
import Sponsors from '../components/sponsorFlex';

import Hero from '../components/courseInfo/Hero';
import Graph from '../components/courseInfo/Graph';
import Plan from '../components/courseInfo/Plan';

import Teachers from '../components/courseInfo/Teachers';
import Work from '../components/courseInfo/Work';
import Talents from '../components/courseInfo/Talents';
import BackGr from "/src/assets/deconstructed_0.svg";

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

function CourseInfo({}){


  const { id } = useParams(); // Получаем ID курса из URL
  const [courseData, setCourseData] = useState(null); // Состояние для хранения данных курса
  const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки
  const [error, setError] = useState(null);

    // Функция для загрузки данных о курсе
    //useEffect(() => {
    //   const fetchCourseData = async () => {
    //     try {
    //       setLoading(true); // Устанавливаем состояние загрузки
    //       const response = await fetch(`/api/courses/${id}`); // Запрос к API для получения данных курса
    //       if (!response.ok) {
    //         throw new Error('Ошибка загрузки данных курса');
    //       }
    //       const data = await response.json();
    //       setCourseData(data); // Сохраняем данные в состоянии
    //     } catch (err) {
    //       setError(err.message); // Сохраняем сообщение об ошибке
    //     } finally {
    //       setLoading(false); // Устанавливаем состояние загрузки в false
    //     }
    //   };
  
    //   fetchCourseData(); // Вызов функции загрузки данных
    // }, [id]);
  
    // // Если идет загрузка, показываем индикатор загрузки
    // if (loading) return <div>Загрузка...</div>;
  
    // // Если произошла ошибка, отображаем сообщение об ошибке
    // if (error) return <div>{error}</div>;
    useEffect(() => {
      // Фейковые данные для тестирования
      const fakeCourseData = {
        CourseID: id,
        Hero: '../src/assets/tapok.svg',
        Description: 'This course will teach you how to use React, Vite, Tailwind in your projects to create the frontend part of the site',
        Graph: {
          TypeID: '4',
          GraphDescription: 'Some Beautiful Diagram',
          steps: [
            { Step: 1, Name: 'Junior', Description: '<1 year of exp', Plotlabel: '500$', Value:15, Color: '#bf0000' },
            { Step: 2, Name: 'Middle', Description: '1-3 years of exp', Plotlabel: '1000$', Value:35, Color: '#008f00' },
            { Step: 3, Name: 'Senior', Description: '3+ years of exp', Plotlabel: 'Money isn\'t the most important for me', Value:55, Color: '#00009f' }
          ],
        },
        Teachers: [
          { TeacherID: '1', Photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoAOL5Or22-yByF9YtO0TOqXZRKQGLXdV60w&s', Name: 'Jan Nowak', Description: 'А вот у него будет так много текста, как я только смогу придумать, это нужно для того, чтобы можно было наглядно увидеть что будет если сделать большую карточку для преподавателя'},
          { TeacherID: '2', Photo: 'https://www.meme-arsenal.com/memes/5a8286009c186bbbb15c211c0dabfdb0.jpg', Name: 'Anna Kowalska', Description: 'А вот у него будет так много текста, как я только смогу придумать, это нужно для того, чтобы можно было наглядно увидеть что будет' },
          { TeacherID: '3', Photo: 'https://media.tenor.com/8t2gPAEswvEAAAAM/patrick-star-meme-patrick-looking-down.gif', Name: 'Piotr Wiśniewski', Description: 'А вот у него будет так много текста, как я только смогу придумать, это нужно для того, чтобы можно было наглядно увидеть что будет если сделать' },
        ],
        Work: {
          title: 'Ready to start your career? We are with you!',
          description: 'We support you on your path to professional growth and employment. Our partners are waiting for you to help you unlock your potential!',
          partners: [
            { WorkID: '1', Logo: 'https://www.microsoft.com/pl-pl/microsoft-365/blog/wp-content/uploads/sites/50/2022/06/cropped-microsoft_logo_element.png', Name: 'Microfost' },
            { WorkID: '2', Logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png', Name: 'Google' },
            { WorkID: '3', Logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png', Name: 'Apple' },
            { WorkID: '4', Logo: 'https://rmhc-carolinas.org/wp-content/uploads/2018/05/mcdonalds.png', Name: 'McDonald' },
            ],    
          },
      
        Talents: [
          { TalentID: '1', Photo: 'https://i.ytimg.com/vi/OFKk8fB0MjQ/maxresdefault.jpg', Name: 'Marek', Description: 'Opened his own programming school and makes money by teaching programming basics' },
          { TalentID: '2', Photo: 'https://i1.sndcdn.com/artworks-ByzwnAyHQMBeAo6J-ZivQ7A-t240x240.jpg', Name: 'Jacek', Description: 'He dropped out of school in the first half of the course, but made many useful contacts in our community and is now the CEO of a IT corporation.' },
          { TalentID: '3', Photo: 'https://kartinkof.club/uploads/posts/2022-03/1648359892_1-kartinkof-club-p-memi-s-papichem-1.jpg', Name: 'Olek', Description: 'CTO at a promising startup funded by companies such as INVIDIA, Apple, Microsoft and AMD' },
          { TalentID: '4', Photo: 'https://kartinkof.club/uploads/posts/2022-03/1648359892_1-kartinkof-club-p-memi-s-papichem-1.jpg', Name: 'Olik', Description: 'CTO at a promising startup funded by companies such as INVIDIA' },
        ],
        Plan: [
          {
            elemID: 1,
            Title: "Introduction to React",
            Type: "Lection",
            Description: "Learn the fundamentals of React, including component structure and JSX syntax.",
            isCompleted: false
          },
          {
            elemID: 2,
            Title: "Build a Portfolio",
            Type: "Task",
            Description: "Create a personal portfolio to showcase your projects and skills using HTML, CSS, and JavaScript.",
            isCompleted: true
          },
          {
            elemID: 3,
            Title: "Layout in Tailwind",
            Type: "Project",
            Description: "Design and implement responsive layouts using Tailwind CSS for a modern and clean look.",
            isCompleted: true
          },
          {
            elemID: 4,
            Title: "Final Exam",
            Type: "Exam",
            Description: "Test your knowledge on all topics covered in the course with a comprehensive final exam.",
            isCompleted: false
          }
        ]
        
      };
  
      // Эмулируем загрузку данных
      const fetchCourseData = async () => {
        try {
          setLoading(true); // Устанавливаем состояние загрузки
          // Здесь вы бы делали реальный запрос к API
          // const response = await fetch(`/api/courses/${id}`);
          // const data = await response.json();
          
          // Для тестирования просто используем фейковые данные
          setCourseData(fakeCourseData);
        } catch (err) {
          setError('Ошибка загрузки данных курса');
        } finally {
          setLoading(false);
        }
      };
  
      fetchCourseData();
    }, [id]);
  
    if (loading) return <div>Загрузка...</div>;
  
    if (error) return <div>{error}</div>;
    return (
        <div className='' style={{ backgroundImage: `url(${BackGr})`, backgroundColor: "#f1f5f9" }}>
        <Header></Header>
        <Hero image={courseData.Hero} description={courseData.Description}></Hero>
        <Graph graphData={courseData.Graph}></Graph>
        <Plan plan={courseData.Plan}></Plan>
        <div className='flex flex-col md:flex-row p-4'>
          <p className='absolute ml-32 mt-2 md:mt-0  sm:ml-56 md:ml-48 font-bold text-xl bg-white py-3 px-6 rounded-lg shadow-xl'>Teachers</p>
          <Teachers teachers={courseData.Teachers}></Teachers>
          <Work work={courseData.Work}></Work>
        </div>
        <Talents talents={courseData.Talents}></Talents>
        <Sponsors></Sponsors>
        <ContactUsForm></ContactUsForm>
        <Footer></Footer>
        </div>
    )
}

export default CourseInfo;