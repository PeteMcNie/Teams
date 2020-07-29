import React from 'react'
import { connect } from 'react-redux'

const Error = (props) => {
    return (
        <div>Hi {props.error}</div>
    )   
}

function mapStateToProps (state) {
    return {
        error: state.errorMessage
    }
}

export default connect(mapStateToProps)(Error)
