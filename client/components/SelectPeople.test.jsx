import React from 'react'

import { renderWithRedux } from '../testing/utils'
import { screen } from '@testing-library/react'

import '@testing-library/jest-dom'

import SelectPeople from './SelectPeople'

const getPeopleReducer = [
  { id: 1, name: 'Pete', isSelected: 0 },
  { id: 2, name: 'Nigel', isSelected: 0 },
  { id: 3, name: 'Andre', isSelected: 0 },
  { id: 4, name: 'Sergio', isSelected: 0 }
]

jest.mock('../actions', () => {
  return {
    getPeopleAction: () => () => Promise.resolve()
  }
})

test('SelectPeople component matchs snapshot', () => {
  const { container } = renderWithRedux(<SelectPeople />)
  expect(container).toMatchSnapshot()
})

test('Select People component renders users', async () => {
  renderWithRedux(<SelectPeople />, { initialState: { getPeopleReducer } })

  const firstPerson = await screen.getByText('Pete')
  expect(firstPerson).toBeInTheDocument()

  const secondPerson = await screen.getByText('Nigel')
  expect(secondPerson).toBeInTheDocument()

  const forthPerson = await screen.getByText('Sergio')
  expect(forthPerson).toBeInTheDocument()
})

test('Select People component renders buttons correctly', async () => {
  renderWithRedux(<SelectPeople />)

  expect(screen.getByRole('button', { name: 'Select / Deselect All' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
})

test('Select People component renders the correct options', async () => {
  renderWithRedux(<SelectPeople />)

  expect(screen.getByRole('option', { name: '6' })).toBeInTheDocument()
  expect(screen.queryByText('11')).not.toBeInTheDocument()
})
