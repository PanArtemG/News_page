const express = require ('express');
const app = express();
const newsPosts = require ('./routes');

const port = 9000;

const connectDb = require ('./database');

// connect DB
connectDb();

//bodyParser
app.use(express.urlencoded({extend: true}));
app.use(express.json());

//Подключаем запрос к сервер.js
app.use('/', newsPosts);

app.listen(port, ()=> console.log(`listen port ${port}`));


