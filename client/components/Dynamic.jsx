import React from 'react'
import { connect } from 'react-redux'

class Dynamic extends React.Component {
  state = {
    incomes: [{income: '', occurrance: 'weekly'}]
  }


  addIncome = evnt => {
    this.setState((prevState) => ({
      incomes: [...prevState.incomes, {income: '', occurrance: 'weekly'}]
    }))
  }

  handleChange = (evnt, idx) => {
    this.state.incomes[idx] = evnt.target.value
    console.log('handleChange ', this.state.incomes[idx])
    this.setState({
      incomes: {income: this.state.incomes, occurrance: 'weekly'}
      
    })
  }
  
  handleSubmit = (evnt) => {
    evnt.preventDefault()
    console.log('AFTER handleSubmit', this.state)
  }

 render() { 
  let { incomes } = this.state
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        {incomes.map((val, idx) => {
          return (
            <div>
              <div key={idx}>
                <label>Income</label>
                <input type='text' onChange={(evnt) => this.handleChange(evnt, idx)} placeholder="Enter amount here" />
              </div>
              <div>
                <label>Occurrance Weekly</label>
                <input type='hidden' />
              </div>
            </div>
          )
        })}
        <input type='submit' value='Submit' />
      </form>
      <div>
        {incomes.map(field => {
          return <div>{field}</div>
        })}
      </div>
    </div>
  )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps)(Dynamic)
