import React from 'react'

import { renderWithRedux } from '../testing/utils'

import Links from './Links'

test('Links component matches snapshot', () => {
  const { container } = renderWithRedux(<Links />)
  expect(container).toMatchSnapshot()
})
