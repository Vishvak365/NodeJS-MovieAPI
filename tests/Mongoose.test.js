const mongoose = require('mongoose')
const userSchema = require('../Schemas/userSchema.js')
const User = mongoose.model('userScheme', userSchema, 'user')
require('dotenv').config()
beforeAll(async () => {
    const url = process.env.DB_URI
    await mongoose.connect(url, { useNewUrlParser: true })
    // console.log(mongoose.connection)
})

test('Testing connection to user database', async function () {
    // await User.find({ username: 'Elon3' }, function (err, data) {
    //     console.log(data);
    // });
    expect(mongoose.Connection)
})