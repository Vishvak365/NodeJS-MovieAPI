const axios = require('axios')
require('dotenv').config()
const OMDB_API_KEY = process.env.OMDB_API_KEY
const OMDB_URI = 'http://www.omdbapi.com/'
/**
 * 
 * @param {string} movieTitle Title of the movie
 * @returns {json} Returns most popular results with movie title
 */
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
/**s
 * 
 * @param {*} movieTitle Tile of the movie
 * @returns {json} Returns exact details of movie with exact name
 */
async function getMovieInformation(movieTitle) {
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
module.exports.getMovieSearch = getMovieSearch
module.exports.getMovieWithYear = getMovieWithYear
module.exports.getMovieInformation = getMovieInformation