import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export const Teams = (teams) => {
  // console.log('teams in component: ', teams.teams)

  if (typeof teams.teams !== 'undefined' && teams.teams.length === 2) {
    return (
      <div>
        <div>
          <h3>Team One:</h3>
          <ul>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Two:</h3>
          <ul>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <Link to={'/createTeams'}>Back to Create Teams</Link>
      </div>
    )
  } else if (typeof teams.teams !== 'undefined' && teams.teams.length === 3) {
    return (
      <div>
        <div>
          <h3>Team One:</h3>
          <ul>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Two:</h3>
          <ul>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Three:</h3>
          <ul>
            {teams.teams[2].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <Link to={'/createTeams'}>Back to Create Teams</Link>
      </div>
    )
  } else if (typeof teams.teams !== 'undefined' && teams.teams.length === 4) {
    return (
      <div>
        <div>
          <h3>Team One:</h3>
          <ul>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Two:</h3>
          <ul>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Three:</h3>
          <ul>
            {teams.teams[2].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Four:</h3>
          <ul>
            {teams.teams[3].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <Link to={'/createTeams'}>Back to Create Teams</Link>
      </div>
    )
  } else if (typeof teams.teams !== 'undefined' && teams.teams.length === 5) {
    return (
      <div>
        <div>
          <h3>Team One:</h3>
          <ul>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Two:</h3>
          <ul>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Three:</h3>
          <ul>
            {teams.teams[2].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Four:</h3>
          <ul>
            {teams.teams[3].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Five:</h3>
          <ul>
            {teams.teams[4].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <Link to={'/createTeams'}>Back to Create Teams</Link>
      </div>
    )
  } else if (typeof teams.teams !== 'undefined' && teams.teams.length === 6) {
    return (
      <div>
        <div>
          <h3>Team One:</h3>
          <ul>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Two:</h3>
          <ul>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Three:</h3>
          <ul>
            {teams.teams[2].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Four:</h3>
          <ul>
            {teams.teams[3].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Five:</h3>
          <ul>
            {teams.teams[4].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Six:</h3>
          <ul>
            {teams.teams[5].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <Link to={'/createTeams'}>Back to Create Teams</Link>
      </div>
    )
  } else if (typeof teams.teams !== 'undefined' && teams.teams.length === 7) {
    return (
      <div>
        <div>
          <h3>Team One:</h3>
          <ul>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Two:</h3>
          <ul>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Three:</h3>
          <ul>
            {teams.teams[2].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Four:</h3>
          <ul>
            {teams.teams[3].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Five:</h3>
          <ul>
            {teams.teams[4].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Six:</h3>
          <ul>
            {teams.teams[5].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Seven:</h3>
          <ul>
            {teams.teams[6].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <Link to={'/createTeams'}>Back to Create Teams</Link>
      </div>
    )
  } else if (typeof teams.teams !== 'undefined' && teams.teams.length === 8) {
    return (
      <div>
        <div>
          <h3>Team One:</h3>
          <ul>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Two:</h3>
          <ul>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Three:</h3>
          <ul>
            {teams.teams[2].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Four:</h3>
          <ul>
            {teams.teams[3].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Five:</h3>
          <ul>
            {teams.teams[4].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Six:</h3>
          <ul>
            {teams.teams[5].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Seven:</h3>
          <ul>
            {teams.teams[6].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Eight:</h3>
          <ul>
            {teams.teams[7].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <Link to={'/createTeams'}>Back to Create Teams</Link>
      </div>
    )
  } else if (typeof teams.teams !== 'undefined' && teams.teams.length === 9) {
    return (
      <div>
        <div>
          <h3>Team One:</h3>
          <ul>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Two:</h3>
          <ul>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Three:</h3>
          <ul>
            {teams.teams[2].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Four:</h3>
          <ul>
            {teams.teams[3].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Five:</h3>
          <ul>
            {teams.teams[4].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Six:</h3>
          <ul>
            {teams.teams[5].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Seven:</h3>
          <ul>
            {teams.teams[6].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Eight:</h3>
          <ul>
            {teams.teams[7].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Nine:</h3>
          <ul>
            {teams.teams[8].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <Link to={'/createTeams'}>Back to Create Teams</Link>
      </div>
    )
  } else if (typeof teams.teams !== 'undefined' && teams.teams.length === 10) {
    return (
      <div>
        <div>
          <h3>Team One:</h3>
          <ul>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Two:</h3>
          <ul>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Three:</h3>
          <ul>
            {teams.teams[2].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Four:</h3>
          <ul>
            {teams.teams[3].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Five:</h3>
          <ul>
            {teams.teams[4].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Six:</h3>
          <ul>
            {teams.teams[5].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Seven:</h3>
          <ul>
            {teams.teams[6].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Eight:</h3>
          <ul>
            {teams.teams[7].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Nine:</h3>
          <ul>
            {teams.teams[8].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Team Ten:</h3>
          <ul>
            {teams.teams[9].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <Link to={'/createTeams'}>Back to Create Teams</Link>
      </div>
    )
  } else {
    console.log('More than X teams')
    return null
  }
}

const mapStateToProps = state => {
  // console.log('Teams: ', state.newTeams)
  return {
    teams: state.newTeams
  }
}

export default connect(mapStateToProps)(Teams)
