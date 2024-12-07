const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const authRouter = require('./routes/authRouter');
const courseRouter = require("./routes/courseRouter");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

app.use(bodyParser.json());

// Роуты
app.use('/auth', authRouter);
app.use("/courses", courseRouter);

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
  });