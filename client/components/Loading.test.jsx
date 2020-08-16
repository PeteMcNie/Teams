import React from 'react'

import { renderWithRedux } from '../testing/utils'

import '@testing-library/jest-dom'

import Loading from './Loading'

test('Loading component displays if loading is true', () => {
  const { asFragment } = renderWithRedux(<Loading />,
    { initialState: { loading: true } })
  expect(asFragment()).toMatchSnapshot()
})

test('Loading component does not display if loading is false', () => {
  const { asFragment } = renderWithRedux(<Loading />,
    { initialState: { loading: false } })
  expect(asFragment()).toMatchSnapshot()
})
