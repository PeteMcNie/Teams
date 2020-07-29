import React from 'react'
import { connect } from 'react-redux'

export const Error = (props) => {
    return (
        <div>Hi {props.error}</div>
    )   
}

const mapStateToProps = state => {
    return {
        error: state.errorMessage
    }
}

export default connect(mapStateToProps)(Error)
