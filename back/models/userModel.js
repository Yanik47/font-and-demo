const pool = require('../config/db'); 
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

class UserModel {
    static async createUser(username, email, password, phone, role, is_active) {

        const userId = uuidv4();
        const passwordHash = await bcrypt.hash(password, 10); 
    

        const existingUser = await pool.query(
            'SELECT * FROM users WHERE email = $1 OR username = $2 OR phone = $3',
            [email, username, phone]
        );
        if (existingUser.rows.length > 0) {
            throw new Error('User with this email, username, or phone already exists');
        }
    

        const query = `
            INSERT INTO users (user_id, role, is_active, username, email, password, phone) 
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING user_id, username, email, phone, created_at
        `;
        const values = [
            userId,
            role,      
            is_active,         
            username,
            email,
            passwordHash,
            phone
        ];
        const result = await pool.query(query, values);
    
        return result.rows[0];
    }
    

    // Ищет пользователя по имени
    static async findUserByLogin(login) {
        const query = 'SELECT * FROM users WHERE username = $1 OR email = $1';
        const values = [login];
        const result = await pool.query(query, values);
        return result.rows[0];
    }
    

    // Проверяет пароль
    static async checkPassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }
}

module.exports = UserModel;
