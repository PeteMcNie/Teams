import React from 'react'

import { renderWithRedux } from '../testing/utils'

import App from './App'

test('App component displays correct components', () => {
  const { container } = renderWithRedux(<App />)
  expect(container).toMatchSnapshot()
})
