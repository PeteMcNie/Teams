import React from 'react'

import { getPeople } from '../api'

class SelectPeople extends React.Component {
state = {
    names: [],
    isChecked: false
}
    componentDidMount () {
        getPeople()
        .then(allPeople => {
            // console.log('All People returned to SelectPeople.jsx: ', allPeople)
            this.setState(
                {
                    names: allPeople
                }
            )
        })
    }

    handleCheck = evnt => {
        console.log('called')
        this.setState({ isChecked: evnt.target.checked })
    }

    handleSubmit = evnt => {
        evnt.preventDefault()
        const selectedPeople = this.state
        console.log('Selected people: ', selectedPeople)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        {this.state.names.map(el => {
                             // console.log('SelectPeople render function data: ', el.isChecked)
                            return (
                                <li key={el.id}>
                                    <input  
                                    type='checkbox' 
                                    checked={el.isChecked} 
                                    value={el.name}
                                    onChange={this.handleCheck}
                                    />  {el.name}
                                </li>
                            )}
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