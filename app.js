import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import randomString from 'randomstring';
import session from 'express-session';
import path from 'path';
import multer from 'multer';



let app = express();
let router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
app.use(session({
    secret: 'appjam',
    resave: true,
    saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, 'public')));

import { Users } from './databases/index';

let auth = require('./routes/auth')(router, Users, randomString);

app.use('/auth', auth);

const PORT = 3001

app.listen(PORT, console.log('Server On Port', PORT))