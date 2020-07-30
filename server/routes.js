const express = require('express')
const db = require('./db')

const schema = require('./validation/schema')
const middleware = require('./validation/middleware')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getPeople()
    .then(people => {
      res.json(people)
    })
    .catch(err => {
      res.status(500).send('Database error: ' + err.message)
    })
})

router.post('/', middleware(schema), (req, res) => {
  const newPeople = req.body
  // console.log('newPeople: ', newPeople)

  db.postPeople(newPeople)
    .then(person => {
      // console.log('In router.js after posting: ', person)
      return res.status(202).json(person)
    })
    .catch(err => {
      res.status(500).send('Posting database error: ' + err.message)
    })
})
