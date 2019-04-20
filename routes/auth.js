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
        if (!result) return status(402).json({ message: "user is not Found" })
        return res.status(200).json(result)
    })
    return router;
}
