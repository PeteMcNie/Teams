import React from 'react'
import { Route } from 'react-router-dom'

import Title from './Title'
import Links from './Links'
import CreateTeams from './Createteams'
import Addplayers from './Addplayers'

const App = () => {
  return (
    <>
      <Route path='/createteams' component={CreateTeams} />
      <Route path='/addplayers' component={Addplayers} />
      <Route exact path='/' component={Title} />
      <Route exact path='/' component={Links} />
    </>
  )
}

export default App
