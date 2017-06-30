import React, { Component } from 'react'

export default class BasicInput05 extends Component {
  state = {
    name: '',
    names: []
  }

onNameChange = (evt) => {
  this.setState({ name: evt.target.value })
}

onFormSubmit = (evt) => {
  const names = [ ...this.state.names, this.state.name ]
  this.setState({ names: names, name: '' })
  evt.preventDefault()
}

render () {
    return (
      <div>
        <h1>Sign Up Sheet</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder='Name'
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <input
            className='button'
            type='submit' />
        </form>
        <div>
          <h3>Names</h3>
          <ul>
            { this.state.names.map((name, i) => <li key={i}>{name}</li>) }
          </ul>
        </div>
      </div>
    )
  }
}
