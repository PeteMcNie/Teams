import React from 'react'

import { getPeople } from '../api'

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

    handleCheck = (evnt, id) => {
      // console.log('called')
      const isChecked = evnt.target.checked
      let selected = [...this.state.selectedPeople]
      if (isChecked) {
        selected.push(id)
      } else {
        selected = selected.filter(i => id !== i)
      }
      this.setState({
        selectedPeople: selected
      })
    }

    handleSubmit = evnt => {
      evnt.preventDefault()
      const selectedPeople = this.state
      console.log('Selected people: ', selectedPeople)
    }

    render () {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <ul>
              {this.state.people.map(person => {
                // console.log('SelectPeople render function data: ', el.id, el.name, el.isSelected)
                return (
                  <li key={person.id}>
                    <input
                      type='checkbox'
                      checked={this.state.selectedPeople.includes(person.id)} // Need to find a way to select only one checkbox at a time to change to true/false onChange
                      onChange={(evnt) => this.handleCheck(evnt, person.id)}
                    />  {person.name}
                  </li>
                )
              }
              )}
            </ul>
            <div>
              <input type='submit' value='Create Teams!' />
            </div>
          </form>
        </div>
      )
    }
}

export default SelectPeople
