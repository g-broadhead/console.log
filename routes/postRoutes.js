const router = require('express').Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { redirect } = require('express/lib/response')
const { Post, User } = require('../models')

// GET all posts
// user must be logged in
router.get('/posts', passport.authenticate('jwt'), async function (req, res) {
  const posts = await Post.findAll({ include: [User] })
  res.json(posts)
})

// POST one post
router.post('/posts', passport.authenticate('jwt'), async function ({ body, user }, res) {
  const post = await Post.create({
    ...body,
    uid: user.id
  })
  res.json(post)
})

// DELETE one post
//user must be logged in
router.delete('/posts/:id', passport.authenticate('jwt'), async function ({ params: { id } }, res) {
  await Post.destroy({ where: { id } })
  res.sendStatus(200)
})

module.exports = router
