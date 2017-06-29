import React, { Component } from 'react'
import BasicButton01 from './01BasicButton'
import BasicButton02 from './02BasicButton'
import BasicInput03 from './03BasicInput'
import BasicInput04 from './04BasicInput'

class App extends Component {
  render () {
    return <div>
      <BasicButton01 />
      <hr />
      <BasicButton02 />
      <hr />
      <BasicInput03 />
      <hr />
      <BasicInput04 />
    </div>
  }
}

export default App
