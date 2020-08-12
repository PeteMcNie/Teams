import React from 'react'

import { renderWithRedux } from '../testing/utils'

import Addplayers from './Addplayers'

test('Addplayers component matches snapshot', () => {
  const { container } = renderWithRedux(<Addplayers />)
  expect(container).toMatchSnapshot()
})
