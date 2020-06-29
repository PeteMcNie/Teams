const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
  getPeople,
  postPeople
}

function getPeople (db = database) {
  return db('people')
    .select('id', 'name', 'is_selected as isSelected')
}

function getNewPeople (id, db = database) {
  return db('people')
    .where('id', id)
    .select('id', 'name', 'is_selected as isSelected')
}

function postPeople (newPeople, db = database) {
  // console.log('postpeople function: ', peopleData)
  let peopleToInsert = newPeople.names.map(person => {
    return { name: person, is_selected: false } // isSelected added here, update table columns to include isavailable
  })
  console.log('people to insert: ', peopleToInsert)
  return db('people')
    .insert(peopleToInsert)
    .then(people => {
      // console.log('After POST insert in db.js: ', people[0])
      return getNewPeople(people[0])
    })
}
