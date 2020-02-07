const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const connect = (url) => mongoose.connect("mongodb://localhost:27017/ex1")

module.exports = connect
