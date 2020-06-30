import React from 'react'

import { getPeople } from '../api'

class SelectPeople extends React.Component {
state = {
  id: '',
  name: '',
  isSelected: false
  // people: []
}

componentDidMount () {
  getPeople()
    .then(people => {
      people.map(el => {
        this.setState({
          id: el.id,
          name: el.name,
          isSelected: el.isSelected
        })
      })
    })
    // .then(allPeople.map(el => {
    //   this.setState(
    //     {
    //       people: allPeople
    //     }
    //   )
    // })
}

    handleCheck = evnt => {
      console.log('called')

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
              {this.state.people.map(el => {
                console.log('SelectPeople render function data: ', el.id, el.name, el.isSelected)
                return (
                  <li key={el.id}>
                    <input
                      type='checkbox'
                      checked={this.state.isSelected} // Need to find a way to select only one checkbox at a time to change to true/false onChange
                      onChange={this.handleCheck}
                    />  {el.name} {el.isSelected}
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
