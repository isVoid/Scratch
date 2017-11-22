var express = require('express')

var m = require("./Model.js")

var router = express.Router()

router.get('/', (req, res) => {

  m.Post.find({}, (err, posts) => {
    console.log(posts)
    res.json(posts)
  })

})

router.post('/new', (req, res) => {
  console.log("Post New\n" + req.body)

  newPost = new m.Post({
    title: req.body.title,
    body: req.body.body
  })
  newPost.save()
  console.log("Created new post. " + newPost.title)

  res.status(200).send("New Post Created. " + newPost.title)

})

module.exports = router
