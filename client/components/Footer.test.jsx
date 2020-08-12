import React from 'react'

import { renderWithRedux } from '../testing/utils'

import Footer from './Footer'

test('Footer component matchs snapshot', () => {
  const { container } = renderWithRedux(<Footer />)
  expect(container).toMatchSnapshot()
})
