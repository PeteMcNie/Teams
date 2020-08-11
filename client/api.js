import request from 'superagent'

const peopleUrl = 'http://localhost:3000/home/v1' // Server-side route (different from client side)

export function getPeople () {
  // console.log('getPeople function hit')
  return request
    .get(peopleUrl)
    .then(response => {
      // console.log('getPeople function returned people', response.body)
      return response.body
    })
    .catch(err => {
      console.err('Error in api getpeople ', err)
    })
}

export function newPeople (newPeople) {
  // console.log('API data ready to send to server', newTeamMembers)
  return request
    .post(peopleUrl)
    .send(newPeople)
    .then(response => {
    // console.log('client-side: ', response)
      return response.body
    })
    .catch(err => {
      console.error('Error in api newPeople', err.response.body)
      throw err
    })
}

export function removePerson (id) {
  return request
    .delete(`${peopleUrl}/${id}`)
    .then(response => {
      // console.log('client-side api ', response)
      return response
    })
    .catch(err => {
      console.error('Error in api removePerson', err.response)
    })
}
