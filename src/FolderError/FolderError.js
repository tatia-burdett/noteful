import React from 'react'

class FolderError extends React.Component {
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
        <h2>An error has occursed, could not display folders</h2>
      )
    }
    return this.props.children
  }
}

export default FolderError
