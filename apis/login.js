var express = require('express')

var m = require("./Model.js")

var router = express.Router()

router.get('/', (req, res) => {

  m.User.find({}, (err, users) => {
    console.log(users)
    res.json(users)
  })

})

router.post('/login', (req, res) => {

  m.User.findOne({name : req.body.name}, ((err, user) => {
    if (user) {
      // Found User
      console.log(req.body.name + " requests login.")
      res.status(200).json(users[0])
    }
    else {
      // User Not found
      console.log(req.body.name + " is not found")
      res.status(404).send("User not found.")
    }
  }))

})

router.post('/reg', (req, res) => {

  m.User.findOne({name : req.body.name}, (err, user) => {
    if (user) {
      // User Exists
      console.log(req.body.name + " request register, but same name exists.")
      res.status(403).send("User exists")
    }
    else {
      var newUser = new m.User({
        name : req.body.name,
      })
      newUser.save()
      console.log("User created " + req.body.name)
      res.status(200).json({
        name : newUser.name,
        welcomeMsg : "Welcome, " + newUser.name + "!"
      })
    }
  })

})

module.exports = router
