import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import randomString from 'randomstring';
import path from 'path';
import multer from 'multer';



let app = express();
let router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

import { Users, Notice, Dress } from './databases/index';

let auth = require('./routes/auth')(router, Users, randomString);
let notice = require('./routes/notice')(router, Notice, Users, randomString, multer);
let closet = require('./routes/closet')(router, Users, randomString, multer);
let comment = require('./routes/comment')(router, Notice, randomString, multer);
let dress = require('./routes/dress')(router, Dress, randomString, Users, multer)

app.use('/auth', auth);
app.use('/notice', notice);
app.use('/closet', closet);
app.use('/comment', comment);
app.use('/dress', dress);

const PORT = 3001

app.listen(PORT, console.log('Server On Port', PORT))