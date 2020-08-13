import React from 'react'
import { renderWithRedux } from '../testing/utils'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import Form from './Form'

test('if user clicks on add person button expect a textbox to appear', async () => {
  renderWithRedux(<Form />)

  userEvent.click(screen.getByRole('button', { name: 'Add Person' }))
  expect(screen.getByRole('textbox')).toBeInTheDocument()
  expect(screen.getByText('Submit')).toBeInTheDocument()
})

test('if user clicks on add person and then remove expect the remove button to disappear', async () => {
  renderWithRedux(<Form />)

  userEvent.click(screen.getByRole('button', { name: 'Add Person' }))
  userEvent.click(screen.getByRole('button', { name: 'Remove' }))
  await waitFor(() => {
    expect(screen.queryByText('Remove')).not.toBeInTheDocument()
  })
})
