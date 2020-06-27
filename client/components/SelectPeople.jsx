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




    render() {
        return (
            <div>
                <form>
                    <ul>
                        {this.state.names.map(el => {
                             // console.log('SelectPeople render function data: ', el)
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
                </form>
            </div>
        )
    }
}

export default SelectPeople