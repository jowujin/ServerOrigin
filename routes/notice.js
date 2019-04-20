module.exports = (router, Notice, Users, randomstring, multer) => {
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

    router.post('/addNotice', upload.array('img'), async (req, res) => {
        let new_notice = {
            title: req.body.title,
            content: req.body.content,
            Date: Date.now(),
            token: randomstring.generate(15),
        }
        var position = new Array();
        var pos = new_notice.content.indexOf('%%%');
        while (pos > -1) {
            position.push(pos);
            pos = new_notice.content.indexOf('%%%', pos + 1);
        }
        for (var i = 0; i < position[i] != null; i++) {
            if (position[i] === undefined) break;
            new_notice.content = new_notice.content.replace("%%%", ('localhost:3000/public/notice/' + req.files[i].filename))
        }
        let result = await new_notice.save();
        new_notice = new Notice(new_notice);
        if (!result) return res.status(500).json({ message: 'ERR!' })
        result = await Users.update({ token: req.body.userToken }, {
            $push: { notice: { title: req.body.title, token: new_notice.token } }
        })
        if (!result) return res.status(500).json({ message: 'ERR!' })
        else return res.status(200).json({ message: "Upload Success" })
    }).post('/delNotice', async (req, res) => {
        let result = await Notice.remove({ token: req.body.token })
        console.log(result)
        if (!result.n) return res.status(500).json({ message: "ERR!" })
        else return res.status(200).json({ message: "success!" })
    }).post('/loadNoticeOne', async (req, res) => {
        let result = await Notice.findOne({ token: req.body.token })
        if (!result) return res.status(404).json({ message: 'Notice Not Found!' })
        else return res.status(200).json({ notice: result })
    }).get('/loadNoticeList', async (req, res) => {
        let result = await Notice.find()
        res.status(200).json({ list: result })
    }).post('/likePush', async (req, res) => {
        let notice = await Notice.findOne({ token: req.body.noticeToken })
        let result = await Notice.update({ token: req.body.noticeToken }, {
            $set: { like: notice.like + 1 }
        })
        if (!result) res.status(404).json({ message: 'ERR!' })
        result = await Notice.update({ token: req.body.noticeToken }, {
            $push: { likedUser: { token: req.body.userToken } }
        })
        if (!result) res.status(404).json({ message: 'ERR!' })
        return res.status(200).json({ message: 'success!' })
    }).post('/likePull', async (req, res) => {
        let notice = await Notice.findOne({ token: req.body.noticeToken })
        let result = await Notice.update({ token: req.body.noticeToken }, {
            $set: { like: notice.like - 1 }
        })
        if (!result) res.status(404).json({ message: 'ERR!' })
        result = Notice.update({ token: req.body.noticeToken }, {
            $pop: { likedUser: { token: req.body.userToken } }
        })
        return res.status(200).json({ message: 'success!' })
    })
    return router;
}