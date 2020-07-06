import React from 'react'
import { Route } from 'react-router-dom'

import Title from './Title'
import Links from './Links'
import CreateTeams from './Createteams'
import Addplayers from './Addplayers'
import Footer from './Footer'
import Teams from './Teams'

const App = () => {
  return (
    <>
      <Route path='/createteams' component={CreateTeams} />
      <Route path='/addplayers' component={Addplayers} />
      <Route path='/teams' component={Teams} />
      <Route exact path='/' component={Title} />
      <Route exact path='/' component={Links} />
      <Footer />
    </>
  )
}

export default App
