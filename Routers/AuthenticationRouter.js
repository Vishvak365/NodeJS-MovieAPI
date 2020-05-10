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
    /**
     *     username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    password: { type: String, required: true }
     */
    user.save(function (err, user) {
        if (err)
            res.json(err).status(400)
        else {
            res.json(user).status(200)
        }
    });
})
// router.get("/", async (req, res) => {
//     if (req['headers'].authorization && req['headers'].authorization.startsWith("Bearer ")) {
//         const token = req['headers'].authorization.split(" ")[1] //Splits bearer and token into array
//         const verified = await verifiyJWT(token);
//         if (verified) {
//             res.json(verified).status(200);
//         } else {
//             res.json({ message: "Key expired or tampered with" }).status(401);
//         }
//     } else {
//         res.json({
//             message: "No auth found or improper format, proper format below",
//             properFormat: [{ authorization: "Bearer <AUTH_TOKEN>" }]
//         }).status(401).send();
//     }
// })
module.exports = router