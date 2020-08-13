import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export const Teams = (teams) => {
  // console.log('teams in component: ', teams.teams)

  // if (teams.teams) {
  //   return (
  //     <div>
  //       <div>
  //         <h3>Team One:</h3>
  //         <ul>
  //           {teams.teams.teamOne.map(person => {
  //             return <li key={person.id}>{person.name}</li>
  //           })}
  //         </ul>
  //       </div>
  //       <div>
  //         <h3>Team Two:</h3>
  //         <ul>
  //           {teams.teams.teamTwo.map(person => {
  //             return <li key={person.id}>{person.name}</li>
  //           })}
  //         </ul>
  //       </div>
  //       <Link to={'/createTeams'}>Back to Create Teams</Link>
  //     </div>
  //   )
  // } else {
  return null
  // }
}

const mapStateToProps = state => {
  console.log('Teams: ', state.newTeams)
  return {
    teams: state.newTeams
  }
}

export default connect(mapStateToProps)(Teams)
