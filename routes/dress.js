module.exports = (router, Dress, randomString, Users, multer) => {
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

    router.post('/addDress', upload.single('img'), async(req,res)=>{        
        let newDress = {
            title : req.body.title,
            token : randomString.generate(25),
            price : req.body.price,
            company : req.body.company,
            companyPhone: req.body.companyPhone,
            img: req.file.filename,
            Date: Date.now(),
            age: req.body.age,
            year: req.body.year
        }
        newDress = new Dress(newDress)
        try {
            let result = await newDress.save()
        }
        catch ( e ) {
            return res.status(500).json({message : "ERR!"})
        }
        return res.status(200).json({message : "success!"})
    })
    .post('/loadDressAge', async (req,res)=>{
        let result = await Dress.find({age : req.body.age})
        res.status(200).json({list : result})
    })
    .post('/loadDressYear', async (req,res)=>{
        let result = await Dress.find({year : req.body.year})
        res.status(200).json({list : result})
    })
    .post('/lodaDressFit', async (req,res)=>{
        let result = await Dress.find({age : req.body.age}).sort({"_id" : -1})
        res.status(200).json({list : result})
    })
    .post('/jjim', async(req,res)=>{
        let dress = await Dress.findOne({token : req.body.dressToken})
        if(!dress) return res.status(404).json({message : "Dress Not Found!"})
        let json = {
            title : dress.title,
            token : req.body.dressToken,
            img : dress.img,
            company : dress.company,
            companyPhone : dress.companyPhone,
            price: dress.price
        }
        let result = await Users.update({token : req.body.token}, {
            $push : {Basket : json}
        })
        if(!result) return res.status(500).json({message : "ERR!"})
        let json2 = {
            title : dress.title,
            img: dress.img,
            token : req.body.dressToken.token
        }
        result = await Users.update({token : req.body.token}, {
            $push : {Closet : json2}
        })
        if(!result) return res.status(500).json({message : "ERR!"})
        else return res.status(200).json({message : "success!"})
    })
    return router;
}