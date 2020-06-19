import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
    return (
        <div>
            <div>
                <Link to={`/createteams`}>Create Teams</Link>
            </div>
            <div>
                <Link to={`/addplayers`}>Add New Person</Link>
            </div>
        </div>
    )
}

export default Links