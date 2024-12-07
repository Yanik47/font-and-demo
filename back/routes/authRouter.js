const express = require('express');
const authController = require('../controllers/authController');
const {authMid, verifyCourseOwnership} = require('../middleware/authMiddleware');

const router = express.Router();


router.post('/login', (req, res) => authController.login(req, res));


router.post('/register', (req, res) => authController.register(req, res));


router.get('/status', (req, res) => authController.status(req, res));


router.get('/profile', authMid, (req, res) => {
    res.status(200).json({
        message: 'Access granted to profile!',
        user: req.user, // Данные пользователя из токена
    });
});


module.exports = router;

