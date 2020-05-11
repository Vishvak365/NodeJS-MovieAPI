const express = require('express')
const app = express()
const port = 3000
var auth = require('./Routers/AuthenticationRouter')
var user = require('./Routers/UserRouter')
var movies = require('./Routers/MoviesRouter')
require('./ExternelAPIs/Connection')

app.use('/api/auth', auth)
app.use('/api/user', user)
app.use('/api/movies', movies)
app.listen(port, () => {
    // console.log(`Listening on http://localhost:${port}`)
    console.log("Started application");
    // test();
});
//sudo apidoc -e ./node_modules/ -o docs/