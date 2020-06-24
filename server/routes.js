const express = require('express')
const db = require('./db')

const router = express.Router()

module.exporrts = router

router.get('/', (req, res) => {
  db.getPeople()
    .then(people => {
      res.json(people)
    })
    .catch(err => {
      res.status(500).send('Database error: ' + err.message)
    })
})
