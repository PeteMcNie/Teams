import React from 'react'
import { Link } from 'react-router-dom'

import Homebutton from './homebutton'
import Form from './form'

const Addplayers = () => {
    return (
        <div>
            <div>
                <Form />
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
