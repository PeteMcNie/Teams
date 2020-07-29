import React from 'react'
import { Link } from 'react-router-dom'

import Homebutton from './Homebutton'
import Form from './Form'
import Error from './Error'

const Addplayers = () => {
  return (
    <div>
      <div>
        <Form />
        <Error />
      </div>
      <div className='link'>
        <Link to={'/createteams'}>Create Teams</Link>
      </div>
      <div>
        <Homebutton />
      </div>
    </div>
  )
}

export default Addplayers
