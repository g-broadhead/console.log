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
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) {
      console.log(err)
    }
    if (user) {
      res.json(jwt.sign({ id: user._id }, process.env.SECRET))
    } else {
      res.sendStatus(500);
    }
  })
})

router.get('/user', passport.authenticate('jwt'), (req, res) => {
  res.json(req.user)
})

router.get('/user/:id', passport.authenticate('jwt'), (req, res) => {
  User.findById(req.params.id)
  .then(user => {
    res.json(user)
  }).catch(err => {
    console.log(`!! Error fetching user with id ${req.param.id}`)
    console.log(err);
    res.status(500).json({error: "Failed to fetch user with this id"});
  })
})



router.put('/user', passport.authenticate('jwt'), (req, res) => {
  User.findByIdAndUpdate(req.user._id, { ...req.body }, { new: true })
    .then(update => {
      res.json(update)
    })
})

module.exports = router
