import React from 'react'
import { connect } from 'react-redux'

export const Teams = (teams) => {
  console.log('teams in component: ', teams.teams)

  if (teams.teams) {
    return (
      <div>
        <h3>hi</h3>
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = state => {
  console.log('Teams: ', state.twoTeams.teams)
  return {
    teams: state.twoTeams.teams
  }
}

export default connect(mapStateToProps)(Teams)
