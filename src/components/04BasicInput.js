import React, { Component } from 'react'

export default class BasicInput04 extends Component {
  static displayNmae = '04-basic-input'

  state = {
    names: []
  }

onFormSubmit = (evt) => {
  const name = this.refs.name.value
  const names = [ ...this.state.names, name ]
  this.setState({ names: names })
  this.refs.name.value = ''
  evt.preventDefault()
}

render () {
    return (
      <div>
        <h1>Sign Up Sheet</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder='Name'
            ref='name'
          />
          <input type='submit' />
        </form>
        <div>
          <h3>Names</h3>
          <ul>
            { this.state.names.map((name, i) => <li key={i}>{name}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}
