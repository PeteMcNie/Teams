import React from 'react'
import { Route } from 'react-router-dom'

import Title from './title'
import Links from './links'
import CreateTeams from './createteams'

const App = () => {
  return (
    <>
      <Route path='/createteams' component={CreateTeams} />
      <Route exact path='/' component={Title} />
      <Route exact path='/' component={Links} />
    </>
  )
}

export default App
