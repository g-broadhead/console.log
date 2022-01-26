const router = require('express').Router()
const { User, Post } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { redirect } = require('express/lib/response')

//user registration
router.post('/users/register', (req, res) => {
  User.register(new User({ username: req.body.username, email: req.body.email}), req.body.password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
    res.redirect('./loginPage.html')
  })
})

// authenticate user login
router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? {
      username: user.username,
      token: jwt.sign({ id: user.id }, process.env.SECRET)
    } : null)
  })
})

router.get('/users/profile', passport.authenticate('jwt'), (req, res) => res.json(req.user))

module.exports = router
