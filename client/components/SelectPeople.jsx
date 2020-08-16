import React from 'react'
import { connect } from 'react-redux'

import Loading from './Loading'

import { shuffleSelectedPeople } from '../sortFunctions'
import { getPeopleAction, deletePerson, teamCreator } from '../actions'

class SelectPeople extends React.Component {
state = {
  selectedPeople: [],
  numberOfTeams: '2'
}

componentDidMount () {
  this.props.dispatch(getPeopleAction())
    .then(() => {
      this.setState({
        people: this.props.people
      })
    })
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
      if (this.state.selectedPeople.length) {
        this.setState({
          selectedPeople: []
        })
      } else if (this.state.selectedPeople.length - 1 < this.state.selectedPeople.length) {
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
      this.props.dispatch(deletePerson(id)) // CHECK IF NEED TO DELETE GET_PEOPLE IN DELETE REDUCER
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
      if (this.props.loading) {
        return <Loading />
      }

      console.log('Render: this.props.people', this.props.people)

      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <ul>
              {this.props.people.map(person => {
                return (
                  <li key={person.id}>
                    <input
                      type='checkbox'
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
              <select value={this.state.numberOfTeams} onChange={this.handleSelect}>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
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

function mapStateToProps (state) {
  return {
    loading: state.loading,
    people: state.getPeopleReducer
  }
}

export default connect(mapStateToProps)(SelectPeople)
