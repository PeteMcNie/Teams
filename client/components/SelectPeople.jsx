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
            this.setState(
                {
                    names: allPeople
                }
            )
        })
    }



    render() {
        return (
            <div>
                <form>
                    <ul>
                        {this.state.names.map(el => {
                             // console.log('SelectPeople render function data: ', el)
                            return (
                                <li key={el.id}>{el.name}</li>
                            )}
                        )}
                    </ul>
                </form>
            </div>
        )
    }
}

export default SelectPeople