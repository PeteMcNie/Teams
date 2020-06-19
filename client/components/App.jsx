import React from 'react'
import { Route } from 'react-router-dom'

import Title from './title'

const App = () => {
  return (
    <>
      <Route path='/' component={Title} />
    </>
  )
}

export default App
