import React from 'react'

class NotesError extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError () {
    return {hasError: true}
  }

  render () {
    if (this.state.hasError) {
      return (
        <h2>An error has occursed, could not display notes</h2>
      )
    }
    return this.props.children
  }
}

export default NotesError
