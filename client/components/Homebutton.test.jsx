import React from 'react'

import { renderWithRedux } from '../testing/utils'

import Homebutton from './Homebutton'

test('Homebutton matches snapshot', () => {
  const { container } = renderWithRedux(<Homebutton />)
  expect(container).toMatchSnapshot()
})
