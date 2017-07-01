import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import Core from './api/core.json'
// import Electives from './api/electives.json'

export default class CourseSelect extends Component {
  // static propTypes = {
  //   department: PropTypes.string,
  //   course: PropTypes.string,
  //   onChange: PropTypes.func.isRequired
  // }
state = {
  department: null,
  course: null,
  courses: [],
  _loading: false
}

  onSelectDepartment = (evt) => {
    const department = evt.target.value
    const course = null
    this.setState({ department, course })
    this.props.onChange({ name: 'department', value: department })
    this.props.onChange({ name: 'course', value: course })

    if (department) this.fetch(department)
  }

  onSelectCourse = (evt) => {
    const course = evt.target.value
    this.setState({ course })
    this.props.onChange({ name: 'course', value: course })
  }

  fetch = (department) => {
    this.setState({ _loading: true, courses: [] })
    apiClient(department).then((course) => {
      this.setState({ _loading: false, courses: courses })
    })
  }

  componentWillReceiveProps (update) {
    this.setState({
      department: update.department,
      course: update.course
    })
  }

  render () {
    return (
      <div>
        { this.renderDepartmentSelect() }
        <br />
        { this.renderCourseSelect() }
      </div>
    )
  }
}
