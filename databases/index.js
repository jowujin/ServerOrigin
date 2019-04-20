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
        token: String,
    }],
    Closet: [{
        title: String,
        phone: String,
        price: Number,
        img: String,
        tag: String,
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
    Comment: [{
        content: String,
        writer: String,
        Date: Date,
    }],
    Comment_cont: Number,
    token: String,
})


let Users = mongoose.model('users', userSchema);
let Notice = mongoose.model('notice', noticeSchema);

export { Users, Notice }
