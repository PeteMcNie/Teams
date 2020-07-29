import React from 'react'
import { connect } from 'react-redux'

export const Error = (props) => {
    return (
        <div>{props.error}</div>
    )   
}

const mapStateToProps = state => {
    return {
        error: state.error
    }
}


export default connect(mapStateToProps)(Error)