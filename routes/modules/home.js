const express = require('express')
const router = express.Router()
const Todo = require('../../models/todo')


// read all items in CRUD
router.get('/', (req, res) => {
  Todo.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(todos => res.render('index', { todos }))
    .catch(error => console.error(error))
})


module.exports = router