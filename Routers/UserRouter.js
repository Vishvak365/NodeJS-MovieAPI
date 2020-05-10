var express = require('express')
var router = express.Router()
const mongoose = require('mongoose')
const userSchema = require('../Schemas/userSchema.js')
const User = mongoose.model('userScheme', userSchema, 'user')
var omdb = require('../ExternelAPIs/omdbAPI')
var JWT = require('../Security/JWT')

router.use(async function (req, res, next) {
    if (req['headers'].authorization && req['headers'].authorization.startsWith("Bearer ")) {
        const token = req['headers'].authorization.split(" ")[1] //Splits bearer and token into array
        const verified = await JWT.VerifyJWT(token);
        if (verified) {
            next();
        } else {
            res.json({ message: "Key expired or tampered with" }).status(401);
        }
    } else {
        res.json({
            message: "No auth found or improper format, proper format below",
            properFormat: [{ authorization: "Bearer <AUTH_TOKEN>" }]
        }).status(401).send();
    }
})
router.get("/searchMovies", async function (req, res, next) {
    if (req['query'].movieTitle) {
        const omdb_response = await omdb.getMovieSearch(req['query'].movieTitle);
        console.log(omdb_response);
        // console.log(omdb_response)
        //!TODO insert error respone for non movie
        res.json(omdb_response).status(200)
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