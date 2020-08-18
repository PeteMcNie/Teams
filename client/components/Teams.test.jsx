import React from 'react'

import { renderWithRedux } from '../testing/utils'
import { screen } from '@testing-library/react'

import '@testing-library/jest-dom'

import Teams from './Teams'

const newTeams = [
  [
    { id: 1, name: 'Pete', isSelected: 0 },
    { id: 55, name: 'Steve', isSelected: 0 },
    { id: 4, name: 'Jill', isSelected: 0 }
  ],
  [
    { id: 23, name: 'Dan', isSelected: 0 },
    { id: 6, name: 'Lucy', isSelected: 0 },
    { id: 87, name: 'Court', isSelected: 0 }
  ],
  [
    { id: 3, name: 'Chloe', isSelected: 0 },
    { id: 86, name: 'Nigel', isSelected: 0 },
    { id: 21, name: 'Nico', isSelected: 0 }
  ]
]

test('teams component matches snapshot', () => {
  const { asFragment } = renderWithRedux(<Teams />,
    { initialState: { newTeams } })

  expect(asFragment()).toMatchSnapshot()
})

test('teams component renders the correct number of teams', () => {
  renderWithRedux(<Teams />, { initialState: { newTeams } })

  expect(screen.getByText('Nigel')).toBeInTheDocument()
  expect(screen.getByText('Court')).toBeInTheDocument()
  expect(screen.getByText('Pete')).toBeInTheDocument()
})

test('teams component renders the reshuffle link correctly', async () => {
  renderWithRedux(<Teams />, { initialState: { newTeams } })

  const link = await screen.getByTestId('link')
  expect(link).toBeInTheDocument()
  expect(screen.getByText('Re-shuffle')).toBeInTheDocument()
})
