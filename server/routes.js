const express = require('express')
const db = require('./db')

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

router.post('/', (req, res) => {
  const newPeople = req.body
  //console.log('newPeople: ', newPeople)

  db.postPeople(newPeople)
    .then(person => {
      console.log('In router.js after posting: ', person)
      return res.status(202).json(person[0])
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
