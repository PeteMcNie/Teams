import React from 'react'
import { connect } from 'react-redux'

import Loading from './Loading'

import { sortSelectedPeople } from '../sortFunctions'
import { getPeopleAction, twoTeams, deletePerson } from '../actions'

class SelectPeople extends React.Component {
state = {
  people: [],
  selectedPeople: []
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

    deletePerson = (evt, id) => {
      evt.preventDefault()
      this.props.dispatch(deletePerson(id))
    }



    handleSubmit = evnt => {
      evnt.preventDefault()
      const selected = this.state.selectedPeople
      // console.log('Selected people in selectedPeople.jsx: ', selected)
      const teams = sortSelectedPeople(selected)
      this.props.dispatch(twoTeams(teams))
      this.props.history.push('/teams')
    }

    render () {
      if (this.props.loading) {
        return <Loading />
      }

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
