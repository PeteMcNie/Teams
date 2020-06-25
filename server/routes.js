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
  // console.log('post route: ', req.body)
  db.postPeople(req.body)
    .then(res.status(202))
    .catch(err => {
      res.status(500).send(err.message)
    })
})
