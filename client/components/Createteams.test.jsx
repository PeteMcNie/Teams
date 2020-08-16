import React from 'react'

import { renderWithRedux } from '../testing/utils'

import CreateTeams from './Createteams'

test('CreateTeams component matched snapshot', () => {
  const { container } = renderWithRedux(<CreateTeams />)
  expect(container).toMatchSnapshot()
})
