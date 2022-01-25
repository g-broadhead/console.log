const { Schema, model } = require('mongoose')

const User = new Schema({
 name: String,
 email: String,
}, { timestamps: true })

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)