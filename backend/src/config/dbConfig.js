const mongoose = require('mongoose')

const dbConfig = "mongodb+srv://thiagodev:root@cluster0.fdovctj.mongodb.net/?retryWrites=true&w=majority"

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = connection