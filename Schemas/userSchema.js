const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    password: { type: String, required: true }
}, { timestamps: true });
module.exports = Schema