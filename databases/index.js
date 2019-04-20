import mongoose from 'mongoose';
import config from '../config/config';

var db = mongoose.connect(config.DB_URL)
mongoose.Promise = global.Promise;


const userSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    password: String,
    name: { type: String, unique: true },
    address: String, // 주소
    token: String, // 유저 토큰
    birthday: Number, // 생년월일
    Basket: [{ // 장바구니
        title: String,
        token: String,
        img: String,
        company: String,
        companyPhone: String,
        price: Number,
    }],
    Closet: [{
        title: String,
        img: String,
        token: String,
    }],
    notice: [{ // 게시판
        title: String, //글 제목
        token: String // 글 토큰
    }]
})

const noticeSchema = new mongoose.Schema({
    title: String, // 글 제목
    content: String,
    Date: Date,
    like: Number,
    likedUser: [{
        token: String
    }],
    Comment: [{
        content: String,
        writer: String,
        Date: Date,
    }],
    Comment_cont: Number,
    token: String,
})

const dressSchema = new mongoose.Schema({
    title: String,
    token: String,
    price: Number,
    company: String,
    companyPhone: String,
    img: String,
    Date: Date,
    age: Number, // 연령
    year: Number // 연도
})

let Users = mongoose.model('users', userSchema);
let Notice = mongoose.model('notice', noticeSchema);
let Dress = mongoose.model('dress', dressSchema);

export { Users, Notice, Dress }
