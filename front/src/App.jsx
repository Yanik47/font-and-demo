import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import MainPage from './pages/MainPage'
import CourseInfo from './pages/CourseInfo'
import UserProfile from './pages/UserProfile' 
import CreateForm from './pages/CreateForm'
import Form from './pages/Form'
import Register from './pages/Register'
import CourseStudent from './pages/CourseStudent'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/courseInfo/:id" element={<CourseInfo></CourseInfo>}></Route>
          <Route path="/course/:id" element={<CourseStudent/>}></Route>
          <Route path="/profile/:id" element={<UserProfile/>}></Route>
          <Route
            path="/login/"
            element={<Form setUser={setUser} />}
          />
          <Route path="/register/" element={<Register></Register>}></Route>
          <Route path="/create/" element={<CreateForm></CreateForm>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
