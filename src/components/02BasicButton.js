import React, { Component } from 'react'

export default class BasicButton02 extends Component {
  onButtonClick = (evt) => {
    const btn = evt.target
    console.log(`The user clicked ${btn.name} ${btn.value}`)
  }
  render () {
    return (
      <div>
        <h1>What Do You Think Of React</h1>
        <h3>Check the console after clicking the button</h3>
        <button
          name='button-1'
          value='great'
          onClick={this.onButtonClick}
        >
          Great
        </button>
        <button
          name='button-2'
          value='amazing'
          onClick={this.onButtonClick}
        >
          Amazing
        </button>
      </div>
    )
  }
}
