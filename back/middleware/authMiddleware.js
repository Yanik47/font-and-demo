const jwt = require('jsonwebtoken');
require('dotenv').config();
const pool = require('../config/db');
const secretKey = process.env.SECRET_KEY;

const authMid = (req, res, next) => {
    // Извлекаем токен из заголовка Authorization
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Ожидаем формат "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Проверяем токен
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; // Сохраняем данные пользователя в объект запроса
        next(); // Передаём управление следующему middleware
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token.' });
    }
};
const verifyCourseOwnership = async (req, res, next) => {
    const userId = req.user.id; // Извлекаем id пользователя из JWT токена
    console.log("UserId: ",userId);
    const userRole = req.user.role; // Извлекаем роль пользователя из JWT токена
    console.log("User Role: ",userRole);
    const { id: courseId } = req.params; // Извлекаем id курса из URL
  
    try {
      // Проверяем, ведет ли пользователь данный курс
      const query = `
        SELECT * FROM teacher_courses 
        WHERE user_id = $1 AND course_id = $2;
      `;
      const result = await pool.query(query, [userId, courseId]);
  
      if (result.rows.length === 0 || userRole === 'student') {
        return res.status(403).json({ message: "You do not have permission to modify this course." });
      }
  
      next(); // Пользователь является преподавателем курса
    } catch (error) {
      console.error("Error verifying course ownership:", error);
      return res.status(500).json({ message: "Server error" });
    }
  };

module.exports = {authMid, verifyCourseOwnership};
