const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const app = express()

const port = 3000


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


app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
