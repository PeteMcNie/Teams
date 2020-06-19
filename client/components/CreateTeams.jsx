import React from 'react'
import { Link } from 'react-router-dom'

const CreateTeams = () => {
    return (
        <div>
            <p>Pick team members here</p>
            <div>
                <Link to={'/addplayers'}>Add New Person</Link>
            </div>
            <div>
                <Link to={'/'}>Home</Link>
            </div>
        </div>
    )
}

export default CreateTeams
