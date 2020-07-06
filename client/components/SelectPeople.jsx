import React from 'react'
import { Link } from 'react-router-dom'

import { getPeople } from '../api'
import { sortSelectedPeople } from '../sortFunctions'

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

    handleSubmit = evnt => {
      evnt.preventDefault()
      const selected = this.state.selectedPeople
      // console.log('Selected people in selectedPeople.jsx: ', selectedPeople)
      sortSelectedPeople(selected)

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
                      checked={this.state.selectedPeople.includes(person)} // Need to find a way to select only one checkbox at a time to change to true/false onChange
                      onChange={(evnt) => this.handleCheck(evnt, person)}
                    />  {person.name}
                  </li>
                )
              }
              )}
            </ul>
            <div className='link'>
              <Link to={'/teams'}><input type='submit' value='Create Teams!' /></Link>
            </div>
          </form>
        </div>
      )
    }
}

export default SelectPeople
