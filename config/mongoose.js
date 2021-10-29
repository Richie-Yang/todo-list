const mongoose = require('mongoose')


mongoose.connect(
  'mongodb://localhost/todo-list',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
// get db connection status
const db = mongoose.connection

// connection error
db.on('error', () => {
  console.log('mongodb error!')
})

// connection successful
db.once('open', () => {
  console.log('mongodb connected!')
})


module.exports = db