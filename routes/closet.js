module.exports = (router, Users, randomString, multer) => {
    let storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public');
        },
        filename: (req, file, cb) => {
            var newStr = randomstring.generate(22)
            newStr = newStr + '.PNG'
            cb(null, newStr);
        },
        limits: {
            fileSize: 5 * 1024 * 1024
        }
    })
    const upload = multer({ storage: storage });
    // 'localhost:3000/public/notice/' + req.files[i].filename
    router.post('/addNewDress', upload.single('img'), async (req,res)=>{
        let new_dress = {
            title: req.body.title,
            img: 'localhost:3000/public/notice/' + req.file.filename,
            token: randomString.generate(25)
        }
        let result = await Users.update({token : req.body.token}, {
            $push : {Closet : new_dress}
        })
        if(!result) return res.status(500).json({message : "ERR!"})
        else return res.status(200).json({message : "success!"})
    })
    .post('/loadCloset', async (req,res)=>{
        let user = await Users.findOne({token : req.body.token})
        if(!user) return res.status(404).json({message : "Users Not Found!"})
        return res.status(200).json({closet : user.Closet})
    })
    .post('/removeCloset', async(req,res)=>{
        let result = await Users.update({token : req.body.token}, {
            $pop : {Closet : req.body.closetToken}
        })
        if(!result) return res.status(500).json({message : "ERR!"})
        else return res.status(200).json({message : "success!"})
    })
    return router;
}
