import React from 'react'

import { renderWithRedux } from '../testing/utils'

import Title from './Title'

test('Title componet matches snapshot', () => {
  const { container } = renderWithRedux(<Title />)
  expect(container).toMatchSnapshot()
})
