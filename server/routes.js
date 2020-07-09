const express = require('express')
const db = require('./db')

// const schemas = require('./validation/schema')
const middleware = require('./validation/middleware')
const Joi = require('@hapi/joi')

const router = express.Router()

module.exports = router

const schema = Joi.object({
  names: Joi.array().items(
    Joi.string().alphanum().min(1).max(15).required()
  )
})

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
      return res.status(202).json(person[0])
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
