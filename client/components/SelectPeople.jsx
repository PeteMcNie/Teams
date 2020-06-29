import React from 'react'

import { getPeople } from '../api'

class SelectPeople extends React.Component {
state = {
  people: []
}

componentDidMount () {
  getPeople()
    .then(allPeople => {
      // console.log('All People returned to SelectPeople.jsx: ', allPeople)

      // const ids = allPeople.map(el => el.id)
      // console.log('ids', ids)

      // const individualNames = allPeople.map(el => el.name)
      // console.log('name', individualNames)

      // const areSelected = allPeople.map(el => el.isSelected)
      // console.log('isSelected', areSelected)

      this.setState(
        {
          people: allPeople
        }
      )
    })
}

    handleCheck = evnt => {
      console.log('called')
      this.setState({ isSelected: evnt.target.checked })
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
