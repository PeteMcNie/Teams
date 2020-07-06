import React from 'react'
import { connect } from 'react-redux'

export const Teams = () => {
  return (
    <div>
      <h3>hi</h3>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('Teams: ', state)
  return {
    teams: state
  }
}

export default connect(mapStateToProps)(Teams)
