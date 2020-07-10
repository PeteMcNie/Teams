const request = require('supertest')

const db = require('./db')
const server = require('./server')

jest.mock('./db', () => {
    return {
        getPeople: jest.fn()
    }
})

test('/ route returns all people from the db', () => {
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