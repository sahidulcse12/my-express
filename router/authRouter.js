const express = require('express');
const { User } = require('../models/users');
const bcrypt = require('bcrypt');
const router = express.Router();


const authUser = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send('Invalid password or email address');

    const validPassword = bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(404).send('Invalid password or email address');

    const token = user.generateJWT();
    res.send({ token: token })
}

router.route('/')
    .post(authUser)

module.exports = router;