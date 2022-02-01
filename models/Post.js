const { Schema, model } = require('mongoose')

const Post = new Schema({
    content: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1
    },
    topics: [{
        type: String,
        required: true
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    }]
}, { timestamps: true })

Post.virtual('commentCount').get(function() {
    return this.comments.length;
})

module.exports = model('post', Post)
