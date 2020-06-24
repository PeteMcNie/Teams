import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div className='links'>
      <div className='link'>
        <Link to={`/createteams`}>Create Teams</Link>
      </div>
      <div className='link'>
        <Link to={`/addplayers`}>Add New Person</Link>
      </div>
    </div>
  )
}

export default Links
