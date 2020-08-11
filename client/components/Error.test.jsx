import React from 'react'

import { renderWithRedux } from '../testing/utils'

import Error from './Error'

const initialState = {
  error: null
}

const newState = {
  error: 'error'
}

test('Error component is falsey when no error is thrown', async () => {
  const { asFragment } = renderWithRedux(<Error />, { initialState })
  expect(asFragment).toMatchSnapshot()
})

test('Error component is truthy when store changes', async () => {
  const { asFragment } = renderWithRedux(<Error />, { newState })
  expect(asFragment).toMatchSnapshot()
})
