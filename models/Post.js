const { Schema, model } = require('mongoose')

const Post = new Schema({
  content: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment'
  }]
}, { timestamps: true })

module.exports = model('post', Post)
