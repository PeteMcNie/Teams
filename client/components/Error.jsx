import React from 'react'
import { connect } from 'react-redux'

const Error = (props) => {
  // return (
  //   <div>{props.error}</div>
  // )
  return null
}

function mapStateToProps (state) {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps)(Error)
