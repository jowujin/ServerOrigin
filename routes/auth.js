module.exports = (router, Users, randomString) => {
    router.post('/signup', async (req, res) => {
        let user = {
            id: req.body.id,
            password: req.body.password,
            name: req.body.name,
            address: req.body.address,
            birthday: req.body.birthday,
            token: randomString.generate(25)
        }
        let new_user = new Users(user);
        try {
            var result = await new_user.save();
        } catch (e) {
            return res.status(409).json({ message: "already exist" });
        }
        res.status(200).json(new_user)
    }).post('/signin', async (req, res) => {
        let result = await Users.findOne({ id: req.body.id, password: req.body.password })
        if (!result) return res.status(402).json({ message: "user is not Found" })
        return res.status(200).json(result)
    }).get('/auto/:token', async (req, res) => {
        console.log(req.params.token)
        console.log(11)
        try {


            let result = await Users.findOne({ token: req.params.token })
            console.log(1234)
            if (!result) return res.status(404).json({ message: 'Users Not Found' })
            console.log(13)
            return res.status(200).json({ user: result })
        } catch (e) {
            const { message } = e
            return res.json({ message })
        }
    })
    return router;
}
