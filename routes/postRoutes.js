const router = require('express').Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { redirect } = require('express/lib/response')
const { Post, User, Comment } = require('../models')


function nl2br (str, is_xhtml) {
  // http://kevin.vanzonneveld.net
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Philip Peterson
  // +   improved by: Onno Marsman
  // +   improved by: Atli Þór
  // +   bugfixed by: Onno Marsman
  // +      input by: Brett Zamir (http://brett-zamir.me)
  // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Brett Zamir (http://brett-zamir.me)
  // +   improved by: Maximusya
  // *     example 1: nl2br('Kevin\nvan\nZonneveld');
  // *     returns 1: 'Kevin<br />\nvan<br />\nZonneveld'
  // *     example 2: nl2br("\nOne\nTwo\n\nThree\n", false);
  // *     returns 2: '<br>\nOne<br>\nTwo<br>\n<br>\nThree<br>\n'
  // *     example 3: nl2br("\nOne\nTwo\n\nThree\n", true);
  // *     returns 3: '<br />\nOne<br />\nTwo<br />\n<br />\nThree<br />\n'
  var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>'; // Adjust comment to avoid issue on phpjs.org display

  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

// GET all posts
// user must be logged in
router.get('/post', passport.authenticate('jwt'), async function (req, res) {
  const posts = await Post.find().populate('user')
  res.json(posts)
})

router.get('/post/topic/:topic', passport.authenticate('jwt'), async (req, res) => {
  Post.find({ topics: req.params.topic }).populate('user').then(posts => {
    res.json(posts)
  }).catch(err => {
    console.log(`!! ERROR: Failed to fetch posts for topic ${req.params.topic}`)
    console.log(err)
    res.status(500).json({ error: `Cannot find posts with topic ${req.params.topic}` })
  })
})

router.get('/post/:id', passport.authenticate('jwt'), async function (req, res) {
  try {
    const post = await Post.findById(req.params.id)
      .populate('user')
      .populate('comments')
      .populate({ path: 'comments', populate: { path: 'user' } })
    res.json(post)
  } catch (err) {
    console.log(`!! ERROR: Failed to fetch post with id ${req.params.id}`)
    console.log(err)
    res.status(500).json({ error: `Failed to fetch post with id ${req.params.id}` })
  }
})

// Get Posts by User ID
router.get('/post/user/:id', passport.authenticate('jwt'), async function (req, res) {
    try {
        const post = await Post.find({ user: req.params.id }).populate('user')
            .populate('user')
            .populate('comments')
            .populate({ path: 'comments', populate: { path: 'user' } });
        res.json(post);
    } catch (err) {
        console.log(`!! ERROR: Failed to fetch post with id ${req.params.id}`);
        console.log(err);
        res.status(500).json({ error: `Failed to fetch post with id ${req.params.id}` })
    }
});

// POST one post
router.post('/post', passport.authenticate('jwt'), function ({ body, user }, res) {
  body.content = nl2br(body.content);
  Post.create({
    content: body.content,
    topics: body.topics,
    user: user.id
  }).then(post => {
    console.log('Post Callback', post)
    User.findByIdAndUpdate(user._id, { $push: { posts: post._id } })
      .then(update => {
        res.json(post)
      })
  })
})

router.post('/post/comment', passport.authenticate('jwt'), (req, res) => {
  Comment.create({ body: req.body.content, post: req.body.postId, user: req.user.id })
    .then(comment => {
      Post.findByIdAndUpdate(req.body.postId, { $push: { comments: comment._id } })
        .then(post => {
          res.json(comment)
        }
        )
    }).catch(err => {
      console.log('!! ERROR: failed to create comment')
      console.log(err)
      console.log(req.body)
      res.status(500).json({ error: 'failed to create comment' })
    })
})

// DELETE one post
// user must be logged in
router.delete('/posts/:id', passport.authenticate('jwt'), async function (req, res) {
  await Post.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

// Update a post
router.put('/post/:id', passport.authenticate('jwt'), (req, res) => {
  Post.findByIdAndUpdate(req.params.id, { ...req.body })
    .then(update => {
      res.json(update)
    }).catch(err => {
      console.log(`!! Error updating post with id ${req.params.id}`)
      console.log(err)
      res.status(500).json({ error: 'Failed to update post' })
    })
})

module.exports = router
