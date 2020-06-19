import React from 'react'
import { Link } from 'react-router-dom'

import Homebutton from './homebutton'

const Addplayers = () => {
    return (
        <div>
            <p>Add players here</p>
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
