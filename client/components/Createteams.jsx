import React from 'react'
import { Link } from 'react-router-dom'

import Homebutton from './Homebutton'

const CreateTeams = () => {
  return (
    <div>
      <p>Pick team members here</p>
      <div className='link'>
        <Link to={'/addplayers'}>Add New Person</Link>
      </div>
      <div>
        <Homebutton />
      </div>
    </div>
  )
}

export default CreateTeams
