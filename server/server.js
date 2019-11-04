const express = require ('express');
const app = express();


const port = 9000;

const connectDb = require ('./database');

// connect DB
connectDb();

app.listen(port, ()=> console.log(`listen port ${port}`));


