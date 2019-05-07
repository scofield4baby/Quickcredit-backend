import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

const app = express();

//setup body parser
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());



export default app;
