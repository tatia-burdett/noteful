import React from 'react'
import { Link } from 'react-router-dom'

class MainNote extends React.Component {
  render() {
    return (
      <section>
        <h3>{this.props.note.name}</h3>
        <p>{this.props.note.content}</p>
      </section>
    )
  }
}

export default MainNote