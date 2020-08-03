import React from 'react'
import { connect } from 'react-redux'

import Loading from './Loading'

import { getPeople } from '../api'
import { sortSelectedPeople } from '../sortFunctions'
import { twoTeams } from '../actions'

class SelectPeople extends React.Component {
state = {
  people: [],
  selectedPeople: []
}

componentDidMount () {
  getPeople()
    .then(allPeople => {
      this.setState(
        {
          people: allPeople
        }
      )
    })
}

    handleCheck = (evnt, person) => {
      // console.log('called')
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
      // console.log(this.state)
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

    handleSubmit = evnt => {
      evnt.preventDefault()
      const selected = this.state.selectedPeople
      // console.log('Selected people in selectedPeople.jsx: ', selected)
      const teams = sortSelectedPeople(selected)
      this.props.dispatch(twoTeams(teams))
      this.props.history.push('/teams')
    }

    render () {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <ul>
              {this.state.people.map(person => {
                // console.log('SelectPeople render function data: ', person)
                return (
                  <li key={person.id}>
                    <input
                      type='checkbox'
                      checked={this.state.selectedPeople.includes(person)}
                      onChange={(evnt) => this.handleCheck(evnt, person)}
                    />  {person.name}
                  </li>
                )
              }
              )}
            </ul>
            <div>
              <input type='button' onClick={this.handleCheckAll} value='Select / Deselect All' />
            </div>
            <div>
              <input type='submit' value='Create Teams!' /><Loading />
            </div>
          </form>
        </div>
      )
    }
}

function mapStateToProps (state) {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps)(SelectPeople)
