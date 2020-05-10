const axios = require('axios')
require('dotenv').config()
const OMDB_API_KEY = process.env.OMDB_API_KEY
const OMDB_URI = 'http://www.omdbapi.com/'
async function getMovieSearch(movieTitle) {
    var response
    await axios.get(OMDB_URI, {
        params: {
            apikey: OMDB_API_KEY,
            r: 'json',
            s: movieTitle
        }
    }).then(async function (data) {
        response = data.data
    }).catch(function (error) {
        // console.log(error)
    })
    return response;
}
async function getMovieInformation() {
    var response
    await axios.get(OMDB_URI, {
        params: {
            apikey: OMDB_API_KEY,
            r: 'json',
            t: movieTitle
        }
    }).then(async function (data) {
        response = data.data
    }).catch(function (error) {
        // console.log(error)
    })
    return response;
}
async function getMovieWithYear(movieTitle, year) {

}
module.exports.getMovie = getMovieSearch
module.exports.getMovieWithYear = getMovieWithYear
module.exports.getMovieInformation = getMovieInformation