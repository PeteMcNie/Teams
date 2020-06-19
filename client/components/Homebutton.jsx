import React from 'react'
import { Link } from 'react-router-dom'

const Homebutton = () => {
    return (
        <div className='link'>
            <Link to={'/'} className='home'>Home</Link>
        </div>
    )
}

export default Homebutton
