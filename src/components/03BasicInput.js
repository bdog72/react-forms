import React, { Component } from 'react'

export default class BasicInput03 extends Component {
  onFormSubmit = (evt) => {
    evt.preventDefault()
    console.log(this.refs.name.value)
  }
  render () {
    return (
      <div>
        <h1>Sign Up Sheet</h1>
        <h3>Check the console after submitting a name</h3>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder='Name'
            ref='name' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}
