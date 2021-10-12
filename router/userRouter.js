const express = require('express');
const { User } = require('../models/users');
const authorize = require('../middlewares/authorize');
const bcrypt = require('bcrypt');
const router = express.Router();

//check user by email->err message->save server
const newUser = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(404).send('User already registered')

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    try {
        const result = await user.save();
        const token = user.generateJWT();
        res.send({
            token: token,
            data: {
                name: result.name,
                email: result.email,
                role: result.role,
            }
        })
    } catch (err) {
        const errMsg = [];
        for (field in err.errors) {
            errMsg.push(err.errors[field].message);
            return res.status(400).send(errMsg);
        }
    }
}

router.route('/')
    .post(newUser)

router.route('/me')
    .post(authorize, (req, res) => {
        res.send(req.user);
    })


module.exports = router;