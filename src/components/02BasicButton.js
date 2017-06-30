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
          name='bdog-3'
          value='you the man'
          onClick={this.onButtonClick}
        >
        DUH
        </button>
        <select>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>E</option>
        </select>
      </div>
    )
  }
}
