const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;

class AuthController {
    // Регистрация нового пользователя
    static async register(req, res) {
        console.log("Connection established: Frontend connected to Backend");
        console.log("Request body:", req.body);
        const { username, email, password, phone, role, is_active } = req.body;
        if (!username || !email || !phone || !password) {
            return res.status(400).json({ message: "All fields are required" });
          }
        try {
            const existingUser = await UserModel.findUserByLogin(username);
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
            
            const user = await UserModel.createUser(username, email, password, phone, role, is_active);
            return res.status(201).json({ message: 'User registered successfully', user });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    // Логин
    static async login(req, res) {
        const { login, password } = req.body;
    
        if (!login || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
    
        try {
            // Ищем пользователя по email
            const user = await UserModel.findUserByLogin(login);
            if (!user) {
                    return res.status(401).json({ message: 'Invalid login or password' });

            }
    
            // Проверяем пароль
            const isPasswordValid = await UserModel.checkPassword(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
    
            // Генерируем токен
            const token = jwt.sign(
                { id: user.user_id, email: user.email, role: user.role },
                process.env.SECRET_KEY,
                { expiresIn: '1h' } // Токен действителен в течение 1 часа
            );
    
            return res.status(200).json({ message: 'Login successful', token });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    }
    

    // Проверка статуса авторизации
    static async status(req, res) {
        return res.status(200).json({ message: 'Auth is working' });
    }
}

module.exports = AuthController;

