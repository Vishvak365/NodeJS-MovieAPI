var express = require('express')
var router = express.Router()
var JWT = require('../Security/JWT')
const mongoose = require('mongoose')
const userSchema = require('../Schemas/userSchema.js')
const User = mongoose.model('userScheme', userSchema, 'user')

router.get("/login", function (req, res) {
    const query = req['query']
    if (!query.username || !query.password)
        res.status(400).send("username or password query not included in request");
    const token = JWT.GenerateJWT(query.username)
    res.json({ Authorization: "Bearer " + token }).status(200).send();
})
router.get("/create", function (req, res) {
    var user = new User({
        username: 'Elon3',
        'email': 'elon@tesla.com',
        'name': "Elon Musk",
        'age': 43,
        'password': "A*()u2jol"
    }
    );
    user.save(function (err, user) {
        if (err)
            res.json(err).status(400)
        else {
            res.json(user).status(200)
        }
    });
})
module.exports = router