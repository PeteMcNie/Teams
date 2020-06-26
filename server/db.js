const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
  getPeople,
  postPeople
}

function getPeople (db = database) {
  return db('people').select()
}

function postPeople (peopleData, db = database) {
  // console.log('postpeople function: ', peopleData)
  let peopleToInsert = peopleData.names.map(people => {
    return { name: people }
  })
  // console.log('people to insert: ', peopleToInsert)
  return db('people')
    .insert(peopleToInsert)
    .then(people => {
      console.log('After POST insert in db.js: ', people)
      // Not sure what needs to be returned here after data is posted
    })
}
