var mongoose = require('mongoose')
var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/Blog', {
  useMongoClient: true
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var UserSchema = new Schema({
  name: String,
  gender: String,
  register_date: Date,
  email: String,
  password: String
})
var User = mongoose.model('User', UserSchema)

var PostSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
})
var Post = mongoose.model('Post', PostSchema)

exports.User = User
exports.Post = Post
