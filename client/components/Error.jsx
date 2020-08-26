import React from 'react'
import { connect } from 'react-redux'

const Error = (props) => {
  if (props.error) {
    return (
      <div className='errorMessage'>{props.error.error}</div>
    )
  } else {
    return null
  }
}

function mapStateToProps (state) {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps)(Error)
