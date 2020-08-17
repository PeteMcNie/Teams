import React from 'react'
import { connect } from 'react-redux'

import Loading from './Loading'

import { shuffleSelectedPeople } from '../sortFunctions'
import { getPeopleAction, deletePerson, teamCreator } from '../actions'

class SelectPeople extends React.Component {
_isMounted = false

state = {
  selectedPeople: [],
  numberOfTeams: '2'
}

componentDidMount () {
  this._isMounted = true
  this.props.dispatch(getPeopleAction())
    .then(() => {
      if (this._isMounted) {
        this.setState({
          people: this.props.people
        })
      }
    })
}

componentWillUnmount () {
  this._isMounted = false
}

    handleCheck = (evnt, person) => {
      const isChecked = evnt.target.checked
      let selected = [...this.state.selectedPeople]
      if (isChecked) {
        selected.push(person)
      } else {
        selected = selected.filter(i => person !== i)
      }
      this.setState({
        selectedPeople: selected
      })
    }

    handleCheckAll = () => {
      if (this.state.selectedPeople.length === this.state.people.length) {
        this.setState({
          selectedPeople: []
        })
      } else {
        this.setState({
          selectedPeople: this.state.people
        })
      }
    }

    handleSelect = evt => {
      this.setState({
        numberOfTeams: evt.target.value
      })
    }

    deletePerson = (evt, id) => {
      evt.preventDefault()
      this.props.dispatch(deletePerson(id))
      this.props.dispatch(getPeopleAction())
        .then(() => {
          this.setState({
            people: this.props.people
          })
        })
    }

    handleSubmit = evnt => {
      evnt.preventDefault()

      const selected = this.state.selectedPeople
      const numberOfTeams = this.state.numberOfTeams
      // console.log('Selected people in selectedPeople.jsx: ', selected)

      const teams = shuffleSelectedPeople(selected, numberOfTeams)
      // console.log('selectPeople ', teams)

      this.props.dispatch(teamCreator(teams))
      this.props.history.push('/teams')
    }

    render () {
      console.log('FOR TEST ', this.props.people)
      if (this.props.loading) {
        return <Loading />
      } else {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <ul>
                {this.props.people.map(person => {
                  return (
                    <li key={person.id}>
                      <input
                        type='checkbox'
                        name={person.name}
                        checked={this.state.selectedPeople.includes(person)}
                        onChange={(evnt) => this.handleCheck(evnt, person)}
                      />  {person.name}
                      <button onClick={evt => this.deletePerson(evt, person.id)}><i className="fas fa-trash"></i></button>
                    </li>
                  )
                }
                )}
              </ul>
              <div>
                <input type='button' onClick={this.handleCheckAll} value='Select / Deselect All' />
              </div>
              <div>
                <p>Select number of Teams</p>
                <select name='amount' value={this.state.numberOfTeams} onChange={this.handleSelect}>
                  {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
              <div>
                <input type='submit' value='Create Teams!' />
              </div>
            </form>
          </div>
        )
      }
    }
}

function mapStateToProps (state) {
  return {
    loading: state.loading,
    people: state.getPeopleReducer
  }
}

export default connect(mapStateToProps)(SelectPeople)
