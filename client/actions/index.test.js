import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions'
import fetchMock from 'fetch-mock'
// import fetch from 'node-fetch'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

xdescribe('thunk action testing', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates GETTING_PEOPLE_SUCCESS on a succesful request', () => {
    fetchMock.getOnce('/home/v1', {
      body: { people: ['people here'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: actions.GETTING_PEOPLE },
      { type: actions.GETTING_PEOPLE_SUCCESS, people: ['people here'] }
    ]

    const store = mockStore({ people: [] })

    return store.dispatch(actions.getPeopleAction())
      .then(() => {
      // return of async actions
      // WRITE TESTS TO INPECT MOCK
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('getPeopleAction() should create an action gettingPeople while loading', () => {
    const expectedAction = {
      type: actions.GETTING_PEOPLE
    }
    expect(actions.gettingPeople()).toEqual(expectedAction)
  })

  it('getPeopleSuccess() should return action when people successfully load', () => {
    const people = [
      { id: 1, name: 'Pete', isSelected: 0 },
      { id: 2, name: 'Nigel', isSelected: 0 },
      { id: 3, name: 'Jeff', isSelected: 0 }
    ]
    const expectedAction = {
      type: actions.GETTING_PEOPLE_SUCCESS,
      people
    }
    expect(actions.getPeopleSuccess(people)).toEqual(expectedAction)
  })
})
