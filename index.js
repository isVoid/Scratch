var express = require("express")
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

login = require('./apis/login.js')
post = require('./apis/post.js')

app.use(express.static('public'))

app.use('/api/users', login)
app.use('/api/posts', post)

app.get('/api/', function(req, res) {
  res.send('This is the backend of Michael\'s Blog.')
})

app.get('/', function(req, res) {
  res.sendFile('public/index.html', {root : __dirname})
})

app.get('/admin/', function(req, res) {
  res.sendFile('public/admin.html', {root : __dirname})
})

app.listen(3000, () => console.log('Blog app is listening.'))
