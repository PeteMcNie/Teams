import React from 'react'

import { newPeople } from '../api'

class Form extends React.Component {
  constructor () {
    super()
    this.state = {
      names: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    handleChange = (evnt, index) => {
      // console.log(fieldName)
      // console.log(evnt.target.value)
      this.state.names[index] = evnt.target.value
      this.setState({ names: this.state.names })
    }

    handleRemove = (index) => {
      this.state.names.splice(index, 1)
      this.setState({ names: this.state.names })
    }

    addName () {
      this.setState({ names: [...this.state.names, ''] })
    }

    handleSubmit = evnt => {
      
      evnt.preventDefault() // This prevents form submisson beng wiped when submit button is clicked
      const newPeopleData = this.state
      
      console.log('Handling submit', newPeopleData)
      newPeople(newPeopleData)
     
    }

    render () {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            {
              this.state.names.map((name, index) => {
                return (
                  <div key={index}>
                    <input value={name} onChange={evnt => this.handleChange(evnt, index)} placeholder="Name"/>
                    <button onClick={() => this.handleRemove(index)}>Remove</button>
                  </div>
                )
              })
            }
            <div>
              <button onClick={(evnt) => this.addName(evnt)}>Add Person</button>
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      )
    }
}

export default Form
