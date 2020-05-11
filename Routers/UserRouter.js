var express = require('express')
var router = express.Router()
const mongoose = require('mongoose')
const userSchema = require('../Schemas/userSchema.js')
const User = mongoose.model('userScheme', userSchema, 'user')
const omdb = require('../ExternelAPIs/omdbAPI')
const Authorize = require('../Security/Authentication')
router.use(async function (req, res, next) {
    const authorization = Authorize.checkJWT(req);
    if (authorization[0]) next();
    else {
        res.json(authorization[1]).status(401).send()
    }
})
router.post("/newMovie", async function (req, res, next) {
    if (req['query'].movieTitle) {
        const omdb_response = await omdb.getMovie(req['query'].movieTitle);
        console.log(omdb_response);
        // console.log(omdb_response)
        //!TODO insert error respone for non movie
        res.json(omdb_response).status(200)
    }
})
router.get("/", function (req, res, next) {
    User.find({ username: 'Elon3' }, function (err, data) {
        res.json(data).status(200);
    });
})
module.exports = router;