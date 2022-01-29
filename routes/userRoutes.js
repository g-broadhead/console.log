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
    console.log(req.body);
    User.authenticate()(req.body.username, req.body.password, (err, user) => {
        if (err) { console.log(err) }
        res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
    })
})

router.get('/user', passport.authenticate('jwt'), (req, res) => {
    res.json(req.user)
})

router.put('/user', passport.authenticate('jwt'), (req, res) => {
    User.findByIdAndUpdate(req.user._id, { ...req.body })
        .then(update => {
            res.json(update);
        });
})

module.exports = router
