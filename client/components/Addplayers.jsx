import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Homebutton from './Homebutton'
import Form from './Form'
// import Loading from './Loading'

const Addplayers = (props) => {
// console.log('addplayers ', props)
  // const { loading } = props

  // if (loading) {
  //   return <Loading />
  // }

  return (
    <div>
      <div>
        <Form />
      </div>
      <div className='link'>
        <Link to={'/createteams'}>Create Teams</Link>
      </div>
      <div>
        <Homebutton />
      </div>
    </div>
  )
}

// function mapStateToProps (state) {
//   return {
//     loading: state.loading
//   }
// }

export default connect()(Addplayers)
