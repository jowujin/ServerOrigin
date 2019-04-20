module.exports = (router, Notice, randomstring, multer) => {
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

    router.post('/addComment', upload.array('img'), async (req, res) => {
        console.log(0)
        let new_comment = {
            content: req.body.content,
            writer: req.body.name,
            Date: Date.now()
        }
        var position = new Array();
        var pos = new_comment.content.indexOf("%%%");
        while (pos > -1) {
            position.push(pos);
            pos = new_comment.content.indexOf("%%%", pos + 1);
        }
        for (var i = 0; i < position[i] != null; i++) {
            if (position[i] === undefined) break;
            new_comment.content = new_comment.content.replace("%%%", ('localhost:3000/public/notice/' + req.files[i].filename))
        }
        let result = await Notice.update({ token: req.body.token }, {  //글 토큰
            $push: { Comment: new_comment }
        })
        if (!result) return res.status(500).json({ message: "ERR!" })
        else return res.status(200).json({ message: "success!" })
    })
    return router
}