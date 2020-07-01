import React from 'react'

import { getPeople } from '../api'

class SelectPeople extends React.Component {
state = {
    names: []
}
    componentDidMount () {
        getPeople()
        .then(allPeople => {
             console.log('All People returned to SelectPeople.jsx: ', allPeople)
           

            //  const ids = allPeople.forEach(el => { return el.id })
            //  console.log('ids', ids)
            //  console.log(allPeople.forEach(el => console.log(el.id)))
           
            //  console.log(allPeople.forEach(el => console.log(el.name)))
           
            //  console.log(allPeople.forEach(el => console.log(el.isSelected)))
           
            
            this.setState(
                {
                    names: allPeople
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


    render() {         
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        {this.state.names.map((el, idx) => {
                             // console.log('SelectPeople render function data: ', el.name, el.isSelected)
                            return (
                                <li key={el.id}>
                                    <input  
                                    type='checkbox' 
                                    checked={this.state.isSelected} //Need to find a way to select only one checkbox at a time to change to true/false onChange
                                    onChange={this.handleCheck.bind(this, idx)}
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