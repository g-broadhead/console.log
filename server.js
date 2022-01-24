require("dotenv").config()

const express = require("express");
const path = require("path");
const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')

const app = express()
const { User } = require('./models')

app.use(express.static(path.join(__dirname, "client", "build")))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
}, ({ id }, cb) => User.findById(id)
    .populate('songs')
    .then(user => cb(null, user))
    .catch(err => cb(err))))

app.use(require('./routes'))

app.get('*', (req, res) => res.sendFile(join(__dirname, 'client', 'build', 'index.html')))

// app.use(routes)
app.listen(process.env.PORT || 3001, async () => {
    console.log(`Server running`)
})
