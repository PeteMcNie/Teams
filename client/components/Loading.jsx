import React from 'react'
import { connect } from 'react-redux'

const Loading = props => {
    return props.loading
    ? <img className='loading' src='/images/loading.svg' />
    : null
}

function mapStateToProps (state) {
    return {
        loading: state.loading
    }
}

export default connect(mapStateToProps)(Loading)
