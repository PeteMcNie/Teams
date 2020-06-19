import React from 'react'
import { Link } from 'react-router-dom'

const Addplayers = () => {
    return (
        <div>
            <p>Add players here</p>
            <div>
                <Link to={'/createteams'}>Create Teams</Link>
            </div>
            <div>
                <Link to={'/'}>Home</Link>
            </div>
        </div>
    )
}

export default Addplayers
