const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post('/user/register', (req, res) => {
  const { name, username } = req.body
  User.register(new User({ name, username }), req.body.password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.post('/user/login', (req, res) => {
<<<<<<< HEAD
  console.log(req.body)
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
=======
    User.authenticate()(req.body.username, req.body.password, (err, user) => {
<<<<<<< HEAD
>>>>>>> b71097278c252b910ed0d06da61f4edf836a838b
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
=======
    if (err) { 
      console.log(err)
     }
    if(user) {
      res.json(jwt.sign({ id: user._id }, process.env.SECRET))
    } else {
      res.sendStatus(500);
    }
>>>>>>> 308b6bad5c469a4671215de5513b8d3bef088c05
  })
})

router.get('/user', passport.authenticate('jwt'), (req, res) => {
  res.json(req.user)
})

router.put('/user', passport.authenticate('jwt'), (req, res) => {
  User.findByIdAndUpdate(req.user._id, { ...req.body })
    .then(update => {
      res.json(update)
    })
})

module.exports = router
