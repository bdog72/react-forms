import React, { Component } from 'react'

export default class BasicButton01 extends Component {
  onGreatClick = (evt) => {
    console.log('The user clicked button-1: great', evt)
  }

  onAmazingClick = (evt) => {
    console.log('The user clicked button-2: amazing', evt)
  }

  render () {
    return (
      <div>
        <h1>What Do You Think Of React</h1>
        <h3>Check the console after you click the button</h3>
        <button
          className='button'
          name='button-1'
          value='great'
          onClick={this.onGreatClick}
        >
          Great
        </button>
        <button
          className='button'
          name='button-2'
          value='amazing'
          onClick={this.onAmazingClick}
        >
          Amazing
        </button>
      </div>
    )
  }
}
