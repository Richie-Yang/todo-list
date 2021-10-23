const express = require('express')
const mongoose = require('mongoose')
const app = express()

const port = 3000


mongoose.connect('mongodb://localhost/todo-list')
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


app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
