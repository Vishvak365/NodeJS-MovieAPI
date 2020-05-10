require('dotenv').config()
const mongoose = require('mongoose');
const uri = process.env.DB_URI
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
        console.log(`Successfully connected to mongoose database.`)
    });