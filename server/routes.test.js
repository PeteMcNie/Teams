const request = require('supertest')

const db = require('./db')
const server = require('./server')

jest.mock('./db', () => {
  return {
    getPeople: jest.fn(),
    postPeople: jest.fn()
  }
})

test('GET / route returns all people from the db', () => {
  db.getPeople.mockImplementation(() => Promise.resolve(
    {
      id: 1,
      name: 'Pete',
      isSelected: false
    }
  ))

  return request(server)
    .get('/home/v1/')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.name).toEqual('Pete')
    })
})

test('GET / returns 500 if there is a database error', () => {
  const err = new Error('Test error')
  db.getPeople.mockImplementation(() => Promise.reject(err))
  return request(server)
    .get('/home/v1/')
    .expect(500)
    .then(res => {
      expect(res.text).toMatch('Database error')
    })
})

xtest('POST / returns 202 if the people are successfully posted', done => {
  return request(server)
    .post('/home/v1/')
    .send('Bob')
    .expect(202)
    .end((err, res) => {
      //  console.log(res.body) //NEED TO CHECK WHY I CAN"T TEST THE RESPONSE, 'Bob' is an array which may be causing problems
      //  expect(res.body.name).toEqual('Bob')
      done()
    })
})

xtest('POST / returns 500 if there is a database error', () => {
  const err = new Error('Test error')
  db.postPeople.mockImplementation(() => Promise.reject(err))
  return request(server)
    .post('/home/v1/')
    .expect(500)
    .then(res => {
      expect(res.text).toMatch('Posting to database error')
    })
})
