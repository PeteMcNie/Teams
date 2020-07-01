import request from 'superagent'

const peopleUrl = 'http://localhost:8080/home/v1' // Server-side route (different from client side)

export function getPeople () {
  // console.log('getPeople function hit')
  return request
    .get(peopleUrl)
    .then(response => {
      // console.log('getPeople function returned people', response.body)
      return response.body
    })
    .catch('Failed to GET people from database')
}


export function newPeople (newPeopleData) {
  console.log('API data ready to send to server', newPeopleData)
  return request
    .post(peopleUrl)
    .send(newPeopleData)
    .then(response => {
      // console.log('client-side: ', response.body)
      return response.body
    })
    .catch("Error in api.js or before on POSTing")
}


// export function selectedPeople (selectedPeople) {
//   console.log(selectedPeople)
//   return request
//     .get(`${peopleUrl}/selectedPeople)
// }