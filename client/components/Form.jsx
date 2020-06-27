import React from 'react'

import { newPeople } from '../api'

class Form extends React.Component {
  constructor () {
    super()
    this.state = {
      names: [{
        name: '',
        isChecked: false}] //Altered this from an array with no fields to two fields, not working
    }
  }

    handleChange = (evnt, index) => {
      // console.log(fieldName)
      // console.log(evnt.target.value)
      this.state.names[index] = evnt.target.value
      this.setState({ names: this.state.names })
    }

    handleRemove = (evnt, index) => {
      evnt.preventDefault()
      this.state.names.splice(index, 1)
      this.setState({ names: this.state.names })
    }

    addName (evnt) {
      evnt.preventDefault() // Needed becasue of button wanting to submit form by default
      this.setState({ names: [...this.state.names, ''] })
    }

    handleSubmit = evnt => {
      evnt.preventDefault() // This prevents form submisson beng wiped when submit button is clicked
      const newPeopleData = this.state
       console.log('Handling submit, check for isChecked field defaulting to false', newPeopleData)
      newPeople(newPeopleData)
    }

    render () {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            {
              this.state.names.map((name, isChecked, index) => {
                return (
                  <div key={index}>
                    <input value={name} onChange={evnt => this.handleChange(evnt, index)} placeholder="Name"/>
                    {/* NEED ISCHECKED FIELD HERE???? */}
                    <button onClick={(evnt) => this.handleRemove(evnt, index)}>Remove</button>
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
