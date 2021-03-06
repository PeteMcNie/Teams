import React from 'react'
import { Link } from 'react-router-dom'

import Homebutton from './Homebutton'
import SelectPeople from './SelectPeople'

const CreateTeams = (props) => {
  return (
    <div>
      <p className='heading'>Pick team members</p>
      <div>
        <SelectPeople history={props.history} />
      </div>
      <div className='link'>
        <Link to={'/addplayers'}>Add New People</Link>
      </div>
      <div>
        <Homebutton />
      </div>
    </div>
  )
}

export default CreateTeams
