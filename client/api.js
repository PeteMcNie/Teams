import request from 'superagent'

const addPeopleUrl = 'http://localhost:8080/home/v1' // Server-side route (different from client side)

export function newPeople (newPeopleData) {
  console.log('API data ready to send to server', newPeopleData)
  return request
    .post(addPeopleUrl)
    .send(newPeopleData)
    .then(response => {
      console.log('client-side: ', response.body)
      return response.body
    })
    .catch("Error in api.js or before on POSTing")
}
