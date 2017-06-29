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
          className='button'
          name='button-1'
          value='great'
          onClick={this.onButtonClick}
        >
          Great
        </button>
        <button
          className='button'
          name='button-2'
          value='amazing'
          onClick={this.onButtonClick}
        >
          Amazing
        </button>
        <button
          className='button'
          name='bdog-1'
          value='you the man'
          onClick={this.onButtonClick}
        >
        DOH
        </button>
      </div>
    )
  }
}
