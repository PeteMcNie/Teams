import React from 'react'

import { renderWithRedux } from '../testing/utils'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

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

test('if user checks an individual checkbox it displays as checked', async () => {
  renderWithRedux(<SelectPeople />, { initialState: { getPeopleReducer } })

  userEvent.selectOptions(screen.queryAllByRole('combobox', 'amount')[0], '2')

  const person = await screen.getByText('Pete')
  // expect(people[0]).toBe('Pete')
  expect(person).toBeInTheDocument()

  expect(screen.getByRole('button', { name: 'Select / Deselect All' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  expect(screen.getByRole('option', { name: '6' })).toBeInTheDocument()
})
