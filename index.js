const express = require('express')
const app = express()
const router = express.Router()
const port = 3000
var auth = require('./Routers/AuthenticationRouter')
var user = require('./Routers/UserRouter')
require('./ExternelAPIs/Connection')

app.use('/api/auth', auth)
app.use('/api/user', user)
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
    
    // test();
});