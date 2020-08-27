import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export const Teams = (teams) => {
  // console.log('teams in component: ', teams.teams)
  if (typeof teams.teams === 'undefined') {
    return (
      <div data-testid='link'>
        <Link className='reshuffle' to={'/createTeams'}>Re-shuffle</Link>
      </div>
    )
  } else if (teams.teams.length === 2) {
    return (
      <div>
        <div className='team'>
          <h3 className='teamHeading'>Team One:</h3>
          <ul className='teamsGrid'>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Two:</h3>
          <ul className='teamsGrid'>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div data-testid='link'>
          <Link className='reshuffle' to={'/createTeams'}>Re-shuffle</Link>
        </div>
      </div>
    )
  } else if (teams.teams.length === 3) {
    return (
      <div>
        <div className='team'>
          <h3 className='teamHeading'>Team One:</h3>
          <ul className='teamsGrid'>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Two:</h3>
          <ul className='teamsGrid'>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Three:</h3>
          <ul className='teamsGrid'>
            {teams.teams[2].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div data-testid='link'>
          <Link className='reshuffle' to={'/createTeams'}>Re-shuffle</Link>
        </div>
      </div>
    )
  } else if (teams.teams.length === 4) {
    return (
      <div>
        <div className='team'>
          <h3 className='teamHeading'>Team One:</h3>
          <ul className='teamsGrid'>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Two:</h3>
          <ul className='teamsGrid'>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Three:</h3>
          <ul className='teamsGrid'>
            {teams.teams[2].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Four:</h3>
          <ul className='teamsGrid'>
            {teams.teams[3].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
          <div data-testid='link'>
            <Link className='reshuffle' to={'/createTeams'}>Re-shuffle</Link>
          </div>
        </div>
      </div>
    )
  } else if (teams.teams.length === 5) {
    return (
      <div>
        <div className='team'>
          <h3 className='teamHeading'>Team One:</h3>
          <ul className='teamsGrid'>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Two:</h3>
          <ul className='teamsGrid'>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Three:</h3>
          <ul className='teamsGrid'>
            {teams.teams[2].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Four:</h3>
          <ul className='teamsGrid'>
            {teams.teams[3].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Five:</h3>
          <ul className='teamsGrid'>
            {teams.teams[4].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div data-testid='link'>
          <Link className='reshuffle' to={'/createTeams'}>Re-shuffle</Link>
        </div>
      </div>
    )
  } else if (teams.teams.length === 6) {
    return (
      <div>
        <div className='team'>
          <h3 className='teamHeading'>Team One:</h3>
          <ul className='teamsGrid'>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Two:</h3>
          <ul className='teamsGrid'>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Three:</h3>
          <ul className='teamsGrid'>
            {teams.teams[2].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Four:</h3>
          <ul className='teamsGrid'>
            {teams.teams[3].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Five:</h3>
          <ul className='teamsGrid'>
            {teams.teams[4].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Six:</h3>
          <ul className='teamsGrid'>
            {teams.teams[5].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div data-testid='link'>
          <Link className='reshuffle' to={'/createTeams'}>Re-shuffle</Link>
        </div>
      </div>
    )
  } else if (teams.teams.length === 7) {
    return (
      <div>
        <div className='team'>
          <h3 className='teamHeading'>Team One:</h3>
          <ul className='teamsGrid'>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Two:</h3>
          <ul className='teamsGrid'>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Three:</h3>
          <ul className='teamsGrid'>
            {teams.teams[2].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Four:</h3>
          <ul className='teamsGrid'>
            {teams.teams[3].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Five:</h3>
          <ul className='teamsGrid'>
            {teams.teams[4].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Six:</h3>
          <ul className='teamsGrid'>
            {teams.teams[5].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Seven:</h3>
          <ul className='teamsGrid'>
            {teams.teams[6].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div data-testid='link'>
          <Link className='reshuffle' to={'/createTeams'}>Re-shuffle</Link>
        </div>
      </div>
    )
  } else if (teams.teams.length === 8) {
    return (
      <div>
        <div className='team'>
          <h3 className='teamHeading'>Team One:</h3>
          <ul className='teamsGrid'>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Two:</h3>
          <ul className='teamsGrid'>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Three:</h3>
          <ul className='teamsGrid'>
            {teams.teams[2].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Four:</h3>
          <ul className='teamsGrid'>
            {teams.teams[3].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Five:</h3>
          <ul className='teamsGrid'>
            {teams.teams[4].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Six:</h3>
          <ul className='teamsGrid'>
            {teams.teams[5].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Seven:</h3>
          <ul className='teamsGrid'>
            {teams.teams[6].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Eight:</h3>
          <ul className='teamsGrid'>
            {teams.teams[7].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div data-testid='link'>
          <Link className='reshuffle' to={'/createTeams'}>Re-shuffle</Link>
        </div>
      </div>
    )
  } else if (teams.teams.length === 9) {
    return (
      <div>
        <div className='team'>
          <h3 className='teamHeading'>Team One:</h3>
          <ul className='teamsGrid'>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Two:</h3>
          <ul className='teamsGrid'>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Three:</h3>
          <ul className='teamsGrid'>
            {teams.teams[2].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Four:</h3>
          <ul className='teamsGrid'>
            {teams.teams[3].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Five:</h3>
          <ul className='teamsGrid'>
            {teams.teams[4].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Six:</h3>
          <ul className='teamsGrid'>
            {teams.teams[5].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Seven:</h3>
          <ul className='teamsGrid'>
            {teams.teams[6].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Eight:</h3>
          <ul className='teamsGrid'>
            {teams.teams[7].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Nine:</h3>
          <ul className='teamsGrid'>
            {teams.teams[8].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div data-testid='link'>
          <Link className='reshuffle' to={'/createTeams'}>Re-shuffle</Link>
        </div>
      </div>
    )
  } else if (teams.teams.length === 10) {
    return (
      <div>
        <div className='team'>
          <h3 className='teamHeading'>Team One:</h3>
          <ul className='teamsGrid'>
            {teams.teams[0].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Two:</h3>
          <ul className='teamsGrid'>
            {teams.teams[1].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Three:</h3>
          <ul className='teamsGrid'>
            {teams.teams[2].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Four:</h3>
          <ul className='teamsGrid'>
            {teams.teams[3].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Five:</h3>
          <ul className='teamsGrid'>
            {teams.teams[4].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Six:</h3>
          <ul className='teamsGrid'>
            {teams.teams[5].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Seven:</h3>
          <ul className='teamsGrid'>
            {teams.teams[6].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Eight:</h3>
          <ul className='teamsGrid'>
            {teams.teams[7].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Nine:</h3>
          <ul className='teamsGrid'>
            {teams.teams[8].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div className='team'>
          <h3 className='teamHeading'>Team Ten:</h3>
          <ul className='teamsGrid'>
            {teams.teams[9].map(person => {
              return <li key={person.id}>{person.name}</li>
            })}
          </ul>
        </div>
        <div data-testid='link'>
          <Link className='reshuffle' to={'/createTeams'}>Re-shuffle</Link>
        </div>
      </div>
    )
  } else {
    return (
      <div data-testid='link'>
        <Link className='reshuffle' to={'/createTeams'}>Re-shuffle</Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log('Teams: ', state.newTeams)
  return {
    teams: state.newTeams
  }
}

export default connect(mapStateToProps)(Teams)
