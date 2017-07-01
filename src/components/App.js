import React, { Component } from 'react'
import BasicButton01 from './01BasicButton'
import BasicButton02 from './02BasicButton'
import BasicInput03 from './03BasicInput'
import BasicInput04 from './04BasicInput'
import BasicInput05 from './05BasicInput'
import StateInputMulti from './06StateInputMulti'
import BasicValidation07 from './07BasicValidation'
import Form from './08FieldComponent/Form'
import CourseSelect from './09/CourseSelect'

class App extends Component {
  render () {
    return (
      <div className='flex'>
        <BasicButton01 />
        <hr />
        <BasicButton02 />
        <hr />
        <BasicInput03 />
        <hr />
        <BasicInput04 />
        <hr />
        <BasicInput05 />
        <hr />
        <StateInputMulti />
        <hr />
        <BasicValidation07 />
        <hr />
        <Form />
        <hr />
        <CourseSelect />
      </div>
    )
  }
}

export default App
