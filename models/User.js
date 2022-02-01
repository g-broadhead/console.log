const { Schema, model } = require('mongoose')

const User = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post',
    }],
    avatar: {
        type: String,
        required: false,
        unique: false,
    },
    github: {
        type: String,
        required: false,
        unique: false,
    },
    linkedIn: {
        type: String,
        required: false,
        unique: false,
    },
    instagram: {
        type: String,
        required: false,
        unique: false,
    },
    twitter: {
        type: String,
        required: false,
        unique: false,
    },
    workname: {
        type: String,
        required: false,
        unique: false,
    },
    positionTitle: {
        type: String,
        required: false,
        unique: false,
    },
    email: {
        type: String,
        required: false,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
