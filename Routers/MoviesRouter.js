var express = require('express')
var router = express.Router()
const mongoose = require('mongoose')
const userSchema = require('../Schemas/userSchema.js')
const User = mongoose.model('userScheme', userSchema, 'user')
const omdb = require('../ExternelAPIs/omdbAPI')
const JWT = require('../Security/JWT')
const Authorize = require('../Security/Authentication')
router.use(async function (req, res, next) {
    const authorization = Authorize.checkJWT(req);
    if (authorization[0]) next();
    else {
        res.json(authorization[1]).status(401).send()
    }
})
/**
 * @api {get} /api/movies/searchMovies Movie Search
 * @apiDescription Search for a movie with a title and get an array of movies matching title
 * @apiName SearchMovies
 * @apiGroup Movies
 * 
 * @apiParam {String} movieTitle Movie to search for
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "Search": [
                    {
                        "Title": "The Martian",
                        "Year": "2015",
                        "imdbID": "tt3659388",
                        "Type": "movie",
                        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg"
                    },
                    {
                        "Title": "Martian Child",
                        "Year": "2007",
                        "imdbID": "tt0415965",
                        "Type": "movie",
                        "Poster": "https://m.media-amazon.com/images/M/MV5BMjExMDAxNzYzNV5BMl5BanBnXkFtZTcwMDQ3MDU1MQ@@._V1_SX300.jpg"
                    },
                    ...
                ]
 *     }
 * @apiErrorExample {json} Error-Response: If search yields no results
 *     HTTP/1.1 400 Not Found
 *     {
 *       {
 *           "Response": "False",
 *           "Error": "Movie not found!"
 *       }
 *     }
 */
router.get("/searchMovies", async function (req, res, next) {
    if (req['query'].movieTitle) {
        const omdb_response = await omdb.getMovieSearch(req['query'].movieTitle);
        //!TODO insert error respone for non movie
        res.json(omdb_response).status(200)
    } else {
        res.json({ message: "'movieTitle' parameter not found" })
    }
})
/**
 * @apiDeprecated Implementation of getting movie info with IMDB-id coming
 * @api {get} /api/movies/movieInfo Movie Info
 * @apiVersion 0.1.0
 * @apiDescription Get info on a particular movie with exact title
 * @apiName MovieInfo
 * @apiGroup Movies
 * 
 * @apiParam {String} movieTitle Movie to search for
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      {
            "Title": "The Martian",
            "Year": "2015",
            "Rated": "PG-13",
            "Released": "02 Oct 2015",
            "Runtime": "144 min",
            "Genre": "Adventure, Drama, Sci-Fi",
            "Director": "Ridley Scott",
            ...
        }
 *     }
 * @apiErrorExample {json} Error-Response: If search yields no results
 *     HTTP/1.1 400 Not Found
 *     {
 *       {
 *           "Response": "False",
 *           "Error": "Movie not found!"
 *       }
 *     }
 */
router.get("/movieInfo", async function (req, res, next) {
    if (req['query'].movieTitle) {
        const omdb_response = await omdb.getMovieInformation(req['query'].movieTitle);
        //!TODO insert error respone for non movie
        res.json(omdb_response).status(200)
    } else {
        res.json({ message: "'movieTitle' parameter not found" })
    }
})
module.exports = router