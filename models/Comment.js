const { Schema, model } = require('mongoose')

const Comment = new Schema({
  body: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  posts: {
    type: Schema.Types.ObjectId,
    ref: 'post',
    required: true
  }
}, { timestamps: true })

module.exports = model('comment', Comment)
